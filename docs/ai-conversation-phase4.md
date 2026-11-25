# AI Conversation · Phase 4 Foundation

## What is implemented

- `/dashboard/conversation` is part of the existing Giao tiếp area; no Sidebar item was added.
- Four modes are available in the setup UI: Topic Conversation, Role-play, Daily Conversation, and Free Talk.
- The available topic and role-play cards are grounded in existing A0 lesson material. A1, A2, B1, B1+, and B2 are represented by level adaptation profiles only; there is no upper-level curriculum or lesson content exposed as ready.
- Each structured scenario carries its lesson code, objective, AI and learner roles, starting situation, opening question, vocabulary, and useful expressions.
- Correction mode defaults to Natural Conversation and offers the other two requested modes.
- `ConversationContextManager` assembles the selected mode, level, topic, role-play information, A0 learning context, correction preference, recent message window (12 messages by default), compact context summary, and turn number. Topic and summary lengths are bounded.
- `ConversationProviderAdapter` and response/correction/summary types define the future backend boundary. The summary shape is qualitative and does not require numeric scores or a CEFR decision.
- The UI labels the context as a preview and disables chat and voice until services exist. No message is sent, no audio is recorded, and no fake AI reply is generated.

## Current limits and required services

The inspected project has Supabase Authentication client code, but no conversation API, AI provider adapter implementation, or conversation-history tables. No migration was applied. Consequently, multi-turn AI behavior, factual context extraction, non-repetition, role persistence enforcement, correction, session summaries, error/retry handling, rate limits, voice capture, STT, and TTS are not active yet. Those behaviors must be verified against a real backend before being described as working.

Before that integration, the product owner needs to choose an AI provider and server hosting/API approach. Voice also needs separate STT and TTS decisions; pronunciation assessment is a separate optional service. Keep all provider secrets on the server. Add authenticated request validation, per-user rate limits, request timeouts and bounded retries there. Do not send audio without an explicit consent flow.

## Proposed session schema (not applied)

If durable history is approved, a `conversation_sessions` table could store:

| Field | Suggested type | Purpose |
| --- | --- | --- |
| `id` | `uuid` primary key | Session ID |
| `user_id` | `uuid` references `auth.users(id)` | Owner |
| `mode` | `text` with a checked enum | topic, role-play, daily, or free-talk |
| `topic_id` | `text`, nullable | Selected curated scenario |
| `scenario_id` | `text`, nullable | Role-play scenario |
| `cefr_level` | `text` | The level selected for this session, not an inferred promotion |
| `messages` | `jsonb` | Necessary text messages and structured corrections |
| `session_summary` | `jsonb`, nullable | Evidence-based qualitative recap |
| `assessment` | `jsonb`, nullable | Descriptive criteria only; omit unsupported dimensions |
| `started_at` | `timestamptz` | Session start |
| `ended_at` | `timestamptz`, nullable | Session end |
| `created_at` | `timestamptz` | Record creation |

Use RLS policies that require `auth.uid() = user_id` for select, insert, and delete, and prevent the client from changing ownership. Decide retention and user deletion behavior before storing text. Do not store audio by default. Any schema change needs review and approval before migration.

## Build and verification

`npm.cmd run build` succeeds. It reports the project's existing large-bundle warning (>500 kB). Live multi-turn and error-flow checks are pending because no AI or speech endpoint is configured.
