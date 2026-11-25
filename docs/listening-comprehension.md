# Communication module — Listening & Comprehension

## Sources and current audio availability

- The repository contains no `.mp3`, `.wav`, `.ogg`, `.m4a`, or other recorded audio asset under `public` or `src`.
- Beginner transcript lessons reuse the 32 A0 `listening.script` records in `speakingCurriculum.ts`.
- Elementary episodes reuse the existing communication course dialogues and their quiz questions from `guestData.ts`; no new AI Conversation scenario or fake dialogue was added.
- No synthetic speech or guessed audio URLs are used. Each lesson displays “Audio chưa có”. The real HTML audio player is prepared for an actual asset and supports play/pause, replay, speed, progress, loading, and playback error states once one is supplied.

## Implemented

- Listening & Comprehension is integrated into the existing Speaking area at `/dashboard/speaking/listening`; there is no new learner sidebar item.
- Filters support Beginner, Elementary, Intermediate, Upper-Intermediate, and Advanced. Only levels backed by actual course data have lessons; selecting another level shows an honest empty state without blocking access.
- Learners can reveal/hide transcripts, complete transcript-grounded comprehension questions, see explanations and wrong answers, and save matching vocabulary to the existing Vocabulary Library when a word exists there.
- The optional self-recording tool requests microphone access only after a click, records locally in the current page, and lets the learner replay their own recording. It does not send audio or claim pronunciation analysis.
- Quiz result, attempts, answer review, and first-attempt XP use existing `quizScores` and quiz XP logic. The module does not add a second lesson-completion reward. Transcript reading is labeled as transcript practice, not counted as an audio listen.
- Progress follows the current app contract and remains in React memory; reload/sign-out loses it. Cross-login persistence needs an approved progress schema because the existing project has no persisted learning-progress tables.

## Verification

- Production build passes.
- Runtime curriculum checks cover 37 episode IDs, non-empty transcripts, valid answer indexes, unique prompts, A0 answer words appearing in source transcripts, topic-answer consistency, supported level list, and explicit missing-audio state.
- Browser audio loading/playback and microphone permission/recording need device testing. No recorded audio exists, so playback success cannot be verified yet.
