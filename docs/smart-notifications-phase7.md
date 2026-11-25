# Phase 7 — Smart Notifications & Learning Reminders

## Delivered

- Added a dashboard bell with unread count and a Notification Center at `/dashboard/notifications`.
- Added real in-session notices for XP transactions, completed lessons, current daily-goal completion, eligible badge unlocks, and evidence-backed review-challenge completion.
- Added read/unread controls, mark-all-read, deletion, chronological ordering, and links to relevant learning pages.
- Added an opt-in reminder schedule with local device time, weekdays, goal/lesson/challenge choices, and a complete pause switch. It sends at most one scheduled reminder per day, prioritizing an imminent review challenge, then an active speaking lesson, then an incomplete daily goal. A completed daily goal is never reminded.
- Reminders are checked every 30 seconds while the app is open. Duplicate IDs are suppressed for the session.
- Browser notification permission is requested only after the learner presses the enable button. If granted, the same scheduled reminder can use the browser Notification API while the app remains open. Unsupported/denied states have an explanation; there are no repeated permission prompts.

## Data and limits

- The project has Supabase Auth but no notification/progress tables or notification backend in the inspected source. No database, RLS, Auth, or migration changes were made.
- Notification records and reminder preferences live in the existing in-memory `GuestContext`; they reset on reload and on account-scope change, matching the existing Phase 1–6 learning-progress behavior.
- This is not Web Push. There is no service worker, push subscription, scheduled server job, or background delivery. A reminder may be missed if the site is closed or the device/browser suspends its tab. Full background delivery needs an approved data schema, RLS, and a trusted server/Edge Function to store subscriptions and send scheduled pushes; no secrets belong in the frontend.
- “Continue lesson” uses the Phase 5 active speaking lesson ID. Other course types do not expose an active lesson ID yet.

## Verification

- `npm.cmd run build` passes.
- `npm.cmd run lint` passes with existing project warnings (including hook/purity warnings outside this feature).
- `git diff --check` passes.
- Smoke checks cover reminders disabled by default, valid schedule matching, disabled schedule, wrong weekday, and notification metadata.
- Browser-specific permission flows and device/mobile delivery were not exercised in this environment.
