# Working Notes

## Teaching preferences (Ilango)

- Plain English, minimal jargon — technical enough for detail, but translate rather than name-drop.
- British spellings. Direct, warm, no padding.
- Go SDK chosen for the course (his published index.md sample was TypeScript, but he picked Go — partly because the Temporal server is Go and internals are half the mission).
- Wants both practical fluency AND internals understanding — lessons should connect API behaviour to the mechanism underneath wherever cheap to do so.
- Starting level: read about Temporal, never run it.

## Session log

- **2026-07-20** — Workspace initialised. Mission set (build + internals, Go). Lesson 1 written: the event history / replay mental model. Next natural step: hands-on — run the dev server and first Go program (learn.temporal.io Go path), then workflow vs activity boundaries in practice.
- **2026-07-22** — Lesson 1 complete: references read, quiz 3/3 first pass (learning record 0001). Lesson 2 written: hands-on money-transfer sample with three predict-then-verify experiments (no-worker start, server kill, failing activity + live fix). Next: build a workflow from scratch, choosing and defending the workflow/activity boundary; then signals/queries. Remember spaced retrieval of lesson 1 concepts in lesson 3.

## Reminders for future sessions

- His broader instructions point to an `About Me/` folder (about-me.md, writing-rules.md, memory.md) — not reachable this session (folder not connected). Ask for it or check connection next time; writing-rules.md matters for lesson prose.
- He keeps published learning notes at `v4.i4o.dev/app/content/collections/learning/temporal.io/index.md` — same file mirrored in the workspace folder. Don't clobber it; it's his public site content, not a lesson.
- Lesson topics he already flagged in index.md: workflow/activity boundaries + determinism, signals/queries/continueAsNew, time-skipping test server. Use these as the backbone of the lesson sequence.
