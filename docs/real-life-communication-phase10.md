# Phase 10 – Real-Life Communication Scenarios

## Implemented

- Expanded the existing Conversation page into a searchable/filterable scenario library grouped by Daily Life, Travel, Workplace, Job Interview, and Phone & Online.
- Kept the six existing A0 scenarios and added 16 authored extensions. A0 cards link to their related curriculum lesson; new topics include café ordering, airport and hotel check-in, directions, taxi, work introductions/task clarification/project updates, interview practice, scheduling, phone messages, and online meetings.
- Added scenario detail with learner/AI roles, goal, opening line, vocabulary, useful expressions, completion checklist, and optional unexpected situation.
- Added Guided, Standard, and Challenge support modes. Hints can be shown/hidden; Challenge can reveal a context-appropriate optional twist.
- Extended the conversation request/prompt builder with difficulty guidance and the scenario's real content, including a rule to introduce a twist only after the learner can address the main goal.
- Linked learners back to the existing Speaking lesson and Pronunciation area where relevant. No new progress store, XP ledger, API endpoint, or database table was added.

## Limitations

The repository has no configured AI provider or authenticated conversation backend. The existing conversation input, send, and voice controls remain disabled; no conversation is generated and no after-session feedback or completion is recorded. The A1/A2 labels are content suggestions, not measured CEFR levels, and the app does not yet have validated A1/A2 curriculum. The page says this before practice so it does not present a preview as an active AI session.

## Verification

- `npm run build` – passed.
- `npm run lint` – passed with warnings in existing application files.
- `git diff --check` – passed.
- Runtime content checks – 22 unique scenarios across all five categories; required goals, roles, prompts, vocab, phrases, checklists, and A0 lesson links are present. Optional Challenge instructions defer the twist until after the learner has a chance to meet the main goal.
- Live AI behavior, turn-based feedback, and provider integration were not testable because no backend/provider is configured.
