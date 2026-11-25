# Communication Content Studio (Phase 13)

## What is included

- Admin route: `/admin/content/communication` (also linked from the admin navigation).
- Create and edit drafts, copy a bundled scenario into a new draft, filter/search, and preview authored lessons.
- Validate required lesson fields, dialogue translations, and quiz answers before publishing.
- Save, publish, unpublish, and delete draft records through Supabase. Published lesson dialogue and comprehension questions appear in the learner Conversation page; quiz attempts use the existing session quiz progress and XP flow.
- Bundled scenarios and existing learner progress are not modified by the studio.

## Supabase setup

The migration is `supabase/migrations/20261125000100_communication_content.sql`. It only adds `public.communication_lessons`, its timestamp trigger, and RLS policies. It has **not** been applied to any Supabase project. Until an operator applies it, Admin can inspect and prepare drafts in the UI, but server-backed load/save/publish actions will report that storage is unavailable.

The migration authorizes writes only when the authenticated JWT has a trusted `app_metadata.role = "admin"` or an `app_metadata.roles` entry equal to `admin`. Set this claim through a trusted server-side Supabase Auth administration path; user-editable `user_metadata` is not accepted. RLS exposes published rows to learners and full rows/writes to trusted Admins. Draft deletion is limited to Admins and draft status.

No project schema was changed remotely. No audio Storage bucket or upload workflow exists, so audio-required content cannot be published. Existing static content is read-only in this studio. No learner progress tables, account listing, or analytics endpoints are added.
