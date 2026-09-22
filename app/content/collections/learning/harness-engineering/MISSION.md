# Mission: Agent harness engineering in Go

## Why
Build and open-source a production-grade agent harness as a Go module — the
Go counterpart of `@earendil-works/pi-ai` (one LLM API over many providers)
and `@earendil-works/pi-agent-core` (the agent loop, tools and events) — and
understand every line of it well enough to defend the design. It ships as a
library first, under Aurelius Labs; the projects that use it come later.

## Success looks like
- A tagged v0.1 Go module with two packages: a provider layer (streaming,
  tool calls, stop reasons, usage, abort with partial results) and an agent
  core (loop, tool execution, events, steering and follow-up queues, hooks).
- Anthropic Messages and one OpenAI API both work behind the same types, and
  a conversation started on one can continue on the other.
- A faux provider makes the whole loop testable with no network and no key.
- I can explain, from memory, how a turn runs: what is sent, what streams
  back, how a tool call is assembled, when the loop stops and why.
- I can read a change in pi's `agent-loop.ts` and say whether my harness
  needs the same change, and why or why not.
- A second project imports the module and gets an agent in under 50 lines.

## Constraints
- Slow burn: a lesson when I ask for one. No schedule, no `plan.org`. DSA,
  LYT, homelab, design docs and the career plan have first call on time.
- Go standard library first. A dependency needs a reason.
- Read real source: pi is the reference implementation, pinned to a commit.
- Baseline: fluent in Go; agent internals treated as new. Start from an
  empty folder and one model call, and earn each concept before using it.

## Out of scope
- A TUI or a coding-agent CLI (pi's `tui` and `coding-agent` packages).
- Agent frameworks (LangChain, ADK and friends), multi-agent orchestration,
  RAG, evals, prompt engineering as a subject.
- Gemini, Bedrock and the long tail of providers, until v0.1 is out.
- OAuth subscription logins, image generation, browser bundling.
