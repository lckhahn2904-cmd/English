# Phase 12 – Communication Learning Path

## Learning stages

The A0 curriculum is mapped once across three trackable stages; 32 existing lessons are reused without copies:

1. **Communication Basics** – A001–A008 and A017–A020 (12 lessons).
2. **Everyday Communication** – A009–A016 and A021–A024 (12 lessons).
3. **Practical Conversations** – A025–A032 (8 lessons).
4. **Workplace Communication** – existing scenario cards for introductions, clarifying tasks, and project updates.
5. **Confident Communication** – existing interview scenario cards.

Stages 4–5 are labeled as practice previews. Scenario role-play has no live AI provider and therefore cannot report tracked completion. Related audio claims are also avoided: lesson links open existing transcript practice, and pronunciation opens the existing manual/IPA module.

## Progress and personalization

- Stage and overall progress come only from completed lesson IDs already stored in GuestContext. Stage completion does not require perfect quiz results and never unlocks or blocks another stage.
- Continue Learning follows the path order and honors the active lesson. All lesson links remain open for learners who want to skip around or review.
- Smart Review uses the existing Learning Intelligence recommendations from repeated assessment evidence. With insufficient evidence, the path says so instead of guessing a weakness.
- Goal and pace preferences filter/highlight existing scenario suggestions and are held in the same in-memory context as other app preferences. They do not alter or clear completed lessons.
- Changing preference does not change CEFR level or mark scenarios complete.

## Data and verification

No duplicate lesson definitions, database table, migration, API, or RLS policy was added. Progress and preferences follow the app's current in-memory session behavior and reset on reload/account-scope change.

- Runtime path checks – all 32 A0 lessons mapped exactly once; stage counts are 12/12/8; stage transitions follow completion data; preview stages are never marked complete.
- `npm run build` – passed.
- `npm run lint` – passed with warnings in existing application code.
- `git diff --check` – passed.
