-- Communication Content Studio storage. Additive only; existing curriculum tables are untouched.
create table if not exists public.communication_lessons (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  lesson_data jsonb not null check (jsonb_typeof(lesson_data) = 'object'),
  status text not null default 'draft' check (status in ('draft', 'published', 'unpublished')),
  created_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  published_at timestamptz
);

create index if not exists communication_lessons_status_updated_idx
  on public.communication_lessons (status, updated_at desc);

create or replace function public.is_communication_admin()
returns boolean
language sql
stable
security invoker
set search_path = public
as $$
  select
    coalesce((auth.jwt() -> 'app_metadata' ->> 'role') = 'admin', false)
    or coalesce((auth.jwt() -> 'app_metadata' -> 'roles') ? 'admin', false);
$$;

create or replace function public.set_communication_lesson_updated_at()
returns trigger
language plpgsql
set search_path = public
as $$
begin
  new.updated_at = now();
  if new.status = 'published' and old.status is distinct from 'published' then
    new.published_at = now();
  elsif new.status <> 'published' then
    new.published_at = null;
  end if;
  return new;
end;
$$;

drop trigger if exists communication_lesson_updated_at on public.communication_lessons;
create trigger communication_lesson_updated_at
  before update on public.communication_lessons
  for each row execute function public.set_communication_lesson_updated_at();

alter table public.communication_lessons enable row level security;

drop policy if exists "Published communication lessons are readable" on public.communication_lessons;
create policy "Published communication lessons are readable"
  on public.communication_lessons for select
  to anon, authenticated
  using (status = 'published');

drop policy if exists "Admins can read all communication lessons" on public.communication_lessons;
create policy "Admins can read all communication lessons"
  on public.communication_lessons for select
  to authenticated
  using (public.is_communication_admin());

drop policy if exists "Admins can create communication lessons" on public.communication_lessons;
create policy "Admins can create communication lessons"
  on public.communication_lessons for insert
  to authenticated
  with check (public.is_communication_admin() and created_by = auth.uid() and updated_by = auth.uid());

drop policy if exists "Admins can update communication lessons" on public.communication_lessons;
create policy "Admins can update communication lessons"
  on public.communication_lessons for update
  to authenticated
  using (public.is_communication_admin())
  with check (public.is_communication_admin() and updated_by = auth.uid());

drop policy if exists "Admins can delete communication drafts" on public.communication_lessons;
create policy "Admins can delete communication drafts"
  on public.communication_lessons for delete
  to authenticated
  using (public.is_communication_admin() and status = 'draft');

grant select on public.communication_lessons to anon, authenticated;
grant insert, update, delete on public.communication_lessons to authenticated;
grant execute on function public.is_communication_admin() to anon, authenticated;

comment on table public.communication_lessons is
  'Admin-authored communication scenarios. Only published rows are publicly readable; all writes require the trusted app_metadata admin claim via RLS.';
