# Phase 8 — Admin data and security proposal

## What the repository has today

- Supabase Auth client only; no SQL migrations, schema snapshots, content tables, role table, Edge Functions, or RLS policies are present in the project.
- Course/dialogue, grammar, A0 speaking, and interactive exercise content are TypeScript data. The large vocabulary set is loaded from a remote CSV source when configured, with a local fallback.
- Learning progress and Phase 5–7 events live only in React memory. The client has no dependable account/learning analytics to report.
- `user.app_metadata` is server-managed by Supabase. The client registration flow only writes `user_metadata`; it does not assign roles.

## Safe Phase 8 work already in the app

- `/admin` checks only the server-managed `app_metadata.role === 'admin'` or `app_metadata.roles` claim. It does not inspect email or editable `user_metadata`, and the ordinary learner sidebar has no Admin link.
- The admin overview reports counts from actual bundled content and the loaded vocabulary source. Account and active learner metrics are explicitly unavailable rather than fabricated.
- The content catalog searches and previews current course, lesson, grammar, exercise, and vocabulary data in read-only mode.
- No role can be granted from this UI. In a configured Supabase project, an operator would have to assign the claim through a trusted Supabase administrative environment; never expose a service-role key in this Vite app.

## Proposed database work (not applied)

Before enabling CRUD, agree on these tables and rules:

1. `admin_roles(user_id uuid primary key references auth.users on delete cascade, role text check role in ('admin','content_editor'), created_at, created_by)`. Ordinary clients cannot insert/update/delete this table. Role grants and revokes go through a trusted operator/Edge Function using the server-only service role; do not let an admin client promote itself.
2. `content_courses(id text primary key, title, description, level, category, image_url, sort_order, status draft|published|archived, created_at, updated_at, updated_by)`.
3. `content_lessons(id text primary key, course_id references content_courses, sort_order, title, content jsonb, status draft|published|archived, created_at, updated_at, updated_by)`. Keep the JSON payload validated against the existing course/lesson TypeScript shape before publish.
4. `grammar_topics` and `learning_exercises` with stable text IDs, typed JSON payloads, status, ordering, and timestamps. Keep current 12-tense and exercise IDs intact during migration.
5. `vocabulary_items` and `vocabulary_group_memberships` with a unique normalized word/group key and optional asset URLs. Import existing vocabulary as a reviewed, idempotent seed; do not overwrite the current CSV/source without an explicit data plan.
6. `admin_audit_log` for publish/archive and role grant/revoke events, storing actor ID, action, content ID, and timestamp but no secrets.

RLS proposal:

- Public/learner SELECT is restricted to `status = 'published'` on content tables.
- Admin/editor SELECT/INSERT/UPDATE is allowed only when a server-side `is_admin()` or `has_content_role()` function verifies `auth.uid()` against `admin_roles`. The function uses a fixed `search_path`, is not executable by `anon`, and does not trust client-supplied role values.
- Delete is replaced by archive for content. Role revocation is operator-only and audited.
- User/learning analytics need separate minimal, aggregated policies and a clear retention plan; the present app has no such rows to backfill.

Migration sequence: add role/content tables and policies; import existing static content with a dry-run and ID/count checks; switch learner reads to published rows with a safe bundled fallback; add admin CRUD and draft preview; then add limited aggregate analytics only if progress persistence is separately approved. No production database has been inspected or changed by this repository task.

## Approval needed to continue with persistent CRUD

Approve or revise this schema/RLS proposal before creating migrations, importing content, adding protected write APIs, or replacing learner content reads. Those actions change database and publishing behavior. Until then, the admin UI remains a read-only catalog and no database writes are exposed.
