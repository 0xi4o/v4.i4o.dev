# Notes

Working notes and teaching preferences for this workspace.

- Ilango: ten years' full-stack, fluent in Go and TypeScript, builds an agent
  builder platform at work. Do not teach Go syntax, HTTP or JSON.
- **From the basics, from an empty folder.** Corrected on 20 Sep 2026, the
  same day the workspace was set up: he first said he had "built a basic
  loop", then, on seeing a lesson 1 that started at architecture and
  transcript types, said it has been a while and asked to start a Go project
  from scratch and be walked through from the basics. Same pattern as the
  homelab course. Rule: every harness concept (token, block, stop reason,
  tool call, turn, SSE, …) is earned with something he runs before it is
  used. Walk through the code; give full listings for plumbing, and leave one
  function per lesson for him to write against a test, with my version
  folded in a `<details>`. Offer Go refreshers (`context`, `httptest`) on
  request, do not pre-teach them.
- Pace: slow burn. He asks for a lesson; no schedule, no `plan.org`, nothing
  added to the career plan. He has five other strands live and two were
  replanned this month, so never nudge about pace here. Each lesson is one
  sitting: ~20 min reading, ~60–90 min of Go.
- First consumer: none yet. Library first, open source under Aurelius Labs
  (`aureliushq`). So API design and tests matter more than any one feature.
  DocuDex's Q&A agent (career plan, Apr 2027) is the likely first user; do
  not design for it specifically.
- Providers: Anthropic Messages first, then OpenAI. The second provider is
  the lesson that tests the abstraction.
- Reference implementation: pi at commit `b73412a` (v0.86.0). Always link to
  the pinned commit. His brand is "read real source", so every lesson sends
  him to a specific file and line range in pi, not to a summary of it.
- Go stance: standard library first; a dependency needs a stated reason.
  Design choices are written the way his design-docs course taught: choice,
  reason, cost, "I accept that because".
- Module and package names are his to choose. Placeholder in lessons:
  module `harness`, packages `llm` (pi-ai's role) and `agent`
  (pi-agent-core's role). Replace everywhere once he names it.
- Glossary lives at `reference/glossary.mdx`. Stick to its terms: harness,
  provider layer, agent core, transcript, block, turn, run, stop reason.
  pi says "context" for what we call the transcript plus tools; say so once
  and then use ours.
- Planned order (revise against learning records):
  1. Hello, model: new module, one non-streaming call over `net/http`,
     content blocks / stop reason / usage, statelessness. (written)
  2. A conversation: keep the message list yourself, a REPL, the system
     prompt, watch input tokens grow.
  3. Tools and the loop: declare a tool, `tool_use` and `tool_result`, loop
     until `end_turn`. One file, Anthropic wire types. The 400-line agent.
  4. The map and the transcript types: why two layers, own the types, JSON
     round trip. (drafted as 0004 before the correction; its intro assumes
     lessons 1–3 and needs a read-through before use)
  5. Refactor the one-file agent onto `llm` types: first provider file,
     non-streaming.
  6. Streaming from first principles: what SSE is, read it with `bufio`,
     assemble blocks by index, partial JSON tool arguments.
  7. The stream contract (start → deltas → done | error), the Go shape for a
     stream, and a faux provider so everything after is testable offline.
  8. Tools properly: JSON Schema, argument validation, split results.
  9. The agent core: turns, stop reasons including `length`, errors as tool
     results, agent events and subscribers.
  10. Abort: `context.Context` end to end, partial results, `Continue`.
  11. Parallel tool execution with source-order results; hooks; `terminate`.
  12. Steering and follow-up queues.
  13. Second provider (OpenAI) and cross-provider handoff.
  14. `transformContext` / `convertToLlm`, pruning, compaction hooks.
  15. Production: retries, rate limits, prompt caching, usage and cost,
      telemetry, session persistence.
  16. v0.1: API review, examples, README, release.
  Interleave retrieval from earlier lessons in every quiz.
- API cost: he is watching spending. Use Haiku, say what a lesson costs, and
  make tests run against `httptest` fakes so the feedback loop is free.
- British spelling; `About Me/writing-rules.md` applies. Sentence-case
  headings. Lessons import from `../assets/`. `LessonLayout`, `Quiz`,
  `Checklist`, `Categorise`, `BeforeAfter` and `Steps` copied from
  `../homelab/assets/` so the courses look alike. New here: `CodeTask`
  (a build exercise: spec, test command, done-when ticks, hidden hints).
- Progress: workspace set up 2026-09-20. Lesson 1 (hello, model) written the
  same day after the correction, not yet done. Its test and my `ask` were run
  on Go 1.24. Next: lesson 2, written against how lesson 1 went.
