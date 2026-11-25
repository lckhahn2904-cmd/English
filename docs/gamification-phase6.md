# Gamification · Phase 6

## Existing state reviewed

- `GuestContext` already awarded session XP for course completion, quiz submission, and vocabulary toggles, but it had no transaction history or unique-source ledger. Removing a vocabulary mark reversed XP, so toggling could repeatedly re-earn it.
- Lesson completions, quiz scores, learned vocabulary IDs, and Phase 5 speaking evidence exist only in React memory. There are no Supabase progress tables or writes in the inspected app source.
- Quiz scores keep the latest result per lesson, not a full attempt log. Speech/AI sessions and measured lesson duration are not recorded.
- Supabase client usage is for Authentication. Authentication configuration was not changed.

## Implemented in the current session

- Added a configurable daily goal for activity types, completed lessons, or vocabulary marks. Progress uses events from the learner's actual actions; time-based goals are not offered because duration is not measured.
- Added XP transactions with source IDs, no repeat reward for the same source, a 100 XP daily cap, and a once-per-day +10 XP daily-goal reward. XP from marking the same word again is not re-awarded if the mark is toggled off and back on.
- Added a 28-day local-date activity grid, current streak, level progress, and recent XP transactions.
- Added evidence-based badges for a first completed lesson, 50 distinct vocabulary marks, and a seven-day streak. Speaking Explorer and Grammar Builder are omitted because their required completed-session evidence is not currently available.
- Added a one-step review challenge only after repeated support-needed results on separate assessed activities. It links to the associated A0 lesson and expires seven days after the second such result. No challenge is displayed when there is not enough evidence.
- GuestContext resets in-memory learning and gamification data when the active account scope changes, preventing a guest or one account's session XP from carrying into another account.

## Important limits

All gamification information is session-only. Reloading the page clears XP history, goal settings, streak days, calendar data, and badges. On sign-in/account change, in-memory state resets to avoid mixing accounts. Streak uses the browser's local date. These features cannot provide dependable multi-day continuity until approved server-side storage is added.

The current progress model does not track minutes. The AI Conversation service is still unconfigured, so no conversation completion contributes activity or XP. Personalized review challenges depend on repeated evidence and will usually be absent with the current single A0 quiz type.

Client-side XP is not tamper-proof. For account-wide integrity across devices, XP grants and source-id idempotency must move to an authenticated server/database operation.

## Proposed database schema (not applied)

No schema or RLS policy was changed. A minimal persistent design for review:

1. `learning_activity_events`: `id uuid`, `user_id uuid references auth.users`, `source_id text`, `activity_type text`, `lesson_id text nullable`, `knowledge_ids text[]`, `occurred_at timestamptz`; unique constraint on `(user_id, source_id)`.
2. `xp_transactions`: `id uuid`, `user_id uuid`, `source_id text`, `points integer`, `reason text`, `created_at timestamptz`; unique `(user_id, source_id)`. A server-side function should validate activity and apply the daily cap before insert.
3. `daily_learning_goals`: `user_id uuid primary key`, `goal_type text`, `target integer`, `updated_at timestamptz`.
4. Derive streaks, badges, and challenges from activity events initially; do not store duplicate counters. Badge definitions remain versioned application data. Add a separate achievement-award table only if award history needs to be immutable.

RLS should restrict reads and deletes to `auth.uid() = user_id`; inserts and XP grants should go through a server-side function that sets the owner and checks the unique source ID. The browser must not assign itself XP or change `user_id`. Define retention and account deletion behavior before migration. This schema requires approval before implementation.

## Verification

`npm.cmd run build` passes. Scenario checks cover unique XP sources, the daily XP cap, daily goal reward-once, local-date streak continuity and breaks, badge thresholds, and evidence-gated review challenges. The dashboard is still served under the existing `/dashboard` route; no Sidebar entry was added.
