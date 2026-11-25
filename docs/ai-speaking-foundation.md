# AI Speaking Foundation

## Current state

- The A0 curriculum and knowledge map in `src/data/speakingCurriculum.ts` and `src/data/a0KnowledgeMap.ts` remain the source of lesson scope.
- Guided text practice is currently a browser-only learning activity. It uses the lesson's opening question, speaking tasks, sentence patterns, and example answer. It does not call an AI model, grade learner text, or save a transcript.
- The four support modes are selectable in the practice UI. They change which curriculum hint is shown; they do not adapt automatically or change CEFR.
- Voice capture, speech-to-text, sample audio, text-to-speech, and pronunciation scoring are unavailable. The UI says so and does not request microphone permission.
- The existing `GuestContext` stores course progress only in React memory. No Supabase table, migration, or speaking-history persistence currently exists in the inspected source.

## Integration boundaries

`src/services/speakingPracticeService.ts` defines provider-neutral contracts for a language-model adapter, speech-to-text, text-to-speech, pronunciation assessment, request context, assessment labels, and session records. Implementations should call an authenticated server API. Provider credentials must remain server-side; the browser should never receive secret keys.

Before enabling providers, select and confirm vendors, hosting, costs, data processing terms, voice consent, retention, and age-appropriate privacy settings. The app should add authentication checks, request size limits, per-user usage limits, timeouts, bounded retries, and clear error states on the server. Do not treat a transcript as pronunciation evidence. Do not assign pronunciation scores without a dedicated evaluator, or promote CEFR from one answer.

## Data proposal (not applied)

There is no database migration in this change. If durable history is approved later, a minimal `speaking_sessions` table could contain:

| Field | Suggested type | Purpose |
| --- | --- | --- |
| `id` | `uuid` primary key | Session ID |
| `user_id` | `uuid` references `auth.users(id)` | Owner |
| `lesson_id` | `text` | Existing A0 lesson identifier |
| `messages` | `jsonb` | Necessary learner text and feedback only |
| `assessment` | `jsonb` | Descriptive, evidence-based results; omit unsupported dimensions |
| `duration_seconds` | `integer`, nullable | Only when measured |
| `created_at` | `timestamptz` | Session creation time |

Enable row-level security and policies requiring `auth.uid() = user_id` for select, insert, and delete; do not permit client ownership changes. Define a retention period and user deletion path before storing transcripts. Never store raw audio without a separate, explicit consent design. Avoid collecting email, profile details, CEFR changes, or unnecessary device data in the session record.

## Still requires a product decision

- Choose an AI model provider and server hosting/API approach.
- Choose speech-to-text and text-to-speech providers, or keep voice unavailable.
- Choose whether to add pronunciation assessment; this is a separate capability from speech recognition.
- Approve a history schema, retention period, and delete/export behavior before any migration.
- Decide whether authenticated users' completed lessons should inform learning context; current guest progress is session-only and is not a durable learning record.
