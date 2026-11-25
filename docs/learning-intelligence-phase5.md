# Learning Intelligence · Phase 5

## Existing progress sources reviewed

- `GuestContext` already tracks completed lesson IDs, explicitly learned vocabulary IDs, the active A0 speaking lesson, and one latest quiz result per existing course quiz.
- The A0 curriculum has 32 lessons and `a0KnowledgeMap` defines introductions, prerequisites, and reinforcement links.
- The A0 speaking lesson already requires a correct quiz answer and self-check criteria before marking a lesson complete.
- This repository uses the Supabase client for Authentication, but the inspected source has no Supabase table reads/writes, practice-history table, AI conversation history, or learning database schema.
- Phase 4 AI conversation controls are setup/context previews only. No live provider or multi-turn transcript exists.

## Implemented

- Added session-only learning evidence. An A0 lesson-check stores the checked result against the lesson's explicitly introduced knowledge IDs. A guided-text submission is recorded separately as self-reported practice and is not treated as performance evidence. The latest 300 events are held in memory and disappear on reload/sign-out/reset.
- Added independent learning-intelligence functions to build knowledge progress, a compact Learning Context, rule-based review/lesson recommendations with reasons, and evidence-based qualitative insights.
- Guided Speaking now initializes its support level from evidence for that lesson's knowledge; the learner can still choose another support level. CEFR remains unchanged.
- Knowledge states are distinct from lesson completion. Completion can introduce the lesson's knowledge; only assessment evidence can contribute to practicing, needs-review, improving, or mastered states. Needs-review requires two independent activities with recent support-needed outcomes. Mastered requires three recent independent successful activities across at least two activity types. Current app activities do not yet provide enough varied evidence for mastered; no CEFR promotion occurs.
- Dashboard now shows real A0 completion counts, knowledge exposure, evaluated attempts, supported recommendations, session activities, and an insight. It does not fabricate time, daily streaks, or a review schedule.
- AI Conversation context preview now receives current A0 progress, selected lesson, explicitly learned vocabulary, support level, and any evidence-backed review topics. The `SpeakingProviderRequest` contract accepts the same Learning Context for a future adapter. Neither path sends data to an AI today.

## Limits

- A0 currently has one scored quiz type. It can report whether that checked question was met or needs support, but it cannot reliably identify broad grammar/vocabulary weaknesses across different activities. Repeat checks of the same question replace one another for weakness detection rather than counting as independent activities.
- Guided text practice records that a learner submitted text, not whether the answer was correct. It cannot create a weakness or mastery decision.
- Lesson completion times, activity duration, durable attempt history, AI conversation messages, speech recognition, and pronunciation evidence are not available.
- All progress in `GuestContext`, including for signed-in sessions, is in-memory only and not synced to Supabase. No authentication behavior changed.
- AI Teacher and live AI Conversation remain unavailable until an authenticated server API and provider are selected. No API keys or external services were added.

## Database proposal (not applied)

No migration was made. To support durable data later, use an append-only `learning_activity_events` table as the source of truth rather than storing a second copy of progress:

| Field | Suggested type | Purpose |
| --- | --- | --- |
| `id` | `uuid` primary key | Event ID |
| `user_id` | `uuid` references `auth.users(id)` | Owner |
| `session_id` | `uuid`, nullable | Optional learning session link |
| `lesson_id` | `text` | Existing lesson ID/code |
| `activity_id` | `text` | Distinguishes independent quiz, speaking, review, or conversation activities |
| `activity_type` | `text` with checked enum | Activity evidence source |
| `knowledge_ids` | `text[]` | Only knowledge explicitly tested or practiced |
| `outcome` | `text` with checked enum | met, needs-support, or self-reported-practice |
| `score` | `numeric`, nullable | Only when a real scoring method supplies one |
| `created_at` | `timestamptz` | Evidence time |

Compute knowledge state, review queue, recommendation, and insight from these events at first; add materialized tables only if scale requires them. If a separate `learning_sessions` table is later needed, link its `user_id`, `started_at`, and `ended_at` to activity events. Recommendation history and insights can be derived and need not be persisted initially.

RLS should require `auth.uid() = user_id` for select, insert, and delete; the server must set ownership and reject client ownership changes. Define retention and user deletion/export behavior before storing anything. Do not store transcripts or audio in the activity event table. Any migration needs schema review and approval first.

## Verification

`npm.cmd run build` passes. Ad-hoc service scenario checks passed for no-data state, lesson completion without mastery, a single error without a weakness label, repeated independent errors with a review recommendation, and stable success across activity types. The dashboard route returned HTTP 200. The project has no configured test runner, so browser interaction was not automated. Real AI context delivery and conversation-history privacy checks remain pending backend integration.
