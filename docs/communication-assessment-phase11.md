# Phase 11 – Communication Assessment

## Implemented

- Added a Communication Assessment hub with four assessment types and a history view.
- Listening section links to existing transcript comprehension quizzes. Because the app has no listening audio, these are labeled as transcript comprehension, not audio listening tests.
- Speaking section links to existing A0 speaking tasks and self-check rubrics. It does not assign automated speaking, grammar, fluency, or CEFR scores.
- Pronunciation section links to the current IPA knowledge checks and clearly separates them from pronunciation/audio evaluation.
- Situational section lists the existing scenario library and its goals/checklists. AI role-play is not scored or marked complete while its provider is unavailable.
- Extended the shared `quizScores` records with up to 20 timestamped attempts per quiz, including each selected answer. Existing XP source IDs and first-attempt-only XP behavior are unchanged.
- Assessment history shows only objective listening-transcript and IPA quiz results. Comparisons are made only between attempts for the same quiz. Optional review links are derived from real quiz results below 100%; no suggested route is changed automatically.

## Data and limitations

There is no assessment database schema or migration in this project, and GuestContext explicitly keeps progress in memory only. No Supabase table, RLS policy, API endpoint, or provider secret was added. Attempts are scoped to the current in-memory account/session and reset when the app reloads or account scope changes. Existing quiz data remains in the shared progress state; it is not copied into a separate assessment ledger.

There is no real audio, speech-to-text, pronunciation evaluator, or AI conversation backend configured. So there is no audio listening score, spoken feedback, accent judgment, or situational conversation result. The page explains which tasks can currently be scored and which are self-practice.

## Verification

- `npm run build` – passed.
- `npm run lint` – passed with warnings in existing application files.
- Runtime checks cover assessment history ordering, same-quiz-only comparison, answer history, and evidence-based review suggestions.
- `git diff --check` – passed.
