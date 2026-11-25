# Phase 9 – Pronunciation & Intonation

## Shipped scope

- Adds `/dashboard/speaking/pronunciation`, linked from the Speaking practice area.
- Builds 32 pronunciation lesson views from the existing A0 curriculum, including sound guidance, A007 word stress, and A008 review.
- Adds five IPA minimal pairs using the curriculum's stored IPA metadata: ship/sheep, bad/bed, pin/bin, ten/den, and sip/zip.
- Adds IPA recognition checks for lessons with source IPA and records them through the existing shared quiz progress flow. The first attempt follows existing XP behavior; retries do not create a separate pronunciation ledger.
- Adds source-backed contraction examples and manual practice for sentence stress and intonation.
- Reuses the optional local microphone recorder to replay the learner's own recording. Recordings are held in the page and released when it is left.

## Current limits

The repository has no pronunciation sample audio and no speech analysis service. The page does not synthesize or pretend to provide audio, compare a learner's voice, or assign pronunciation scores. The minimal-pair checks ask learners to identify stored IPA on screen; they are not listening discrimination tests. Intonation and stress controls are self-practice prompts, not scored evaluations. Audio assets and automatic spoken feedback need a real, reviewed source/service before they can be enabled.

## Verification

- `npm run build` – passed.
- `npm run lint` – passed with existing warnings elsewhere in the app.
- Runtime curriculum checks – 32 lessons, 5 complete minimal pairs, 30 valid IPA questions, and 4 source-backed contractions.
- `git diff --check` – passed. Browser microphone behavior was not manually tested.
