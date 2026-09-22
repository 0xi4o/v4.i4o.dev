# Agent harness engineering resources

pi is pinned at commit `b73412a` (packages at v0.86.0, read 2026-09-20). Link
to that commit in lessons so line references stay true; re-pin deliberately.

## Knowledge

- [Source: `earendil-works/pi` — `packages/agent`](https://github.com/earendil-works/pi/tree/b73412a/packages/agent)
  The reference agent core. `src/agent-loop.ts` (857 lines) is the loop;
  `src/types.ts` the config, hooks and events; the README has the event
  sequences. Use for: anything about turns, tool execution, steering,
  follow-up, hooks, termination.
- [Source: `earendil-works/pi` — `packages/ai`](https://github.com/earendil-works/pi/tree/b73412a/packages/ai)
  The reference provider layer. `src/types.ts` holds the message, content
  block, stop reason and stream event types; `src/api/*.ts` has one file per
  wire format; `src/providers/faux.ts` is the test provider. Use for: the
  unified types, the stream contract, per-provider quirks, handoff.
- [Article: "What I learned building an opinionated and minimal coding agent" — Mario Zechner](https://mariozechner.at/posts/2025-11-30-pi-coding-agent/)
  pi's author on why each piece exists: the four wire formats, context
  handoff, abort with partial results, split tool results, the minimal loop.
  Use for: the reasoning behind a design choice before copying it.
- [Article: "How to Build an Agent" — Thorsten Ball (Amp)](https://ampcode.com/notes/how-to-build-an-agent)
  A working code-editing agent in under 400 lines of Go against the Anthropic
  SDK. Use for: the floor. This is roughly where Ilango already is; the
  course starts where it stops.
- [Article: "Agent Design Is Still Hard" — Armin Ronacher](https://lucumr.pocoo.org/2025/11/21/agents-are-hard/)
  Production lessons: own your abstraction, manage caching explicitly,
  reinforce in the loop, isolate failures. Use for: the production lessons
  (caching, context, failure handling).
- [Article: "Pi: The Minimal Agent Within OpenClaw" — Armin Ronacher](https://lucumr.pocoo.org/2026/1/31/pi/)
  An outside view of why pi's core is small. Use for: scope discipline.
- [Article: "Building effective agents" — Anthropic](https://www.anthropic.com/engineering/building-effective-agents)
  Workflows versus agents, and the case for simple composable pieces. Use
  for: vocabulary and when a loop is the wrong tool.
- [Docs: Messages API reference — Anthropic](https://platform.claude.com/docs/en/api/messages)
  Request fields, response fields, stop reasons, headers. Use for: lessons
  1 to 3 and the first provider file. Model ids and prices:
  [models overview](https://platform.claude.com/docs/en/about-claude/models/overview).
- [Docs: Streaming Messages — Anthropic](https://platform.claude.com/docs/en/build-with-claude/streaming)
  The SSE event sequence and `input_json_delta`. Use for: the first provider.
- [Docs: Tool use — Anthropic](https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview)
  Tool definitions, `tool_use` and `tool_result` blocks, stop reasons.
- [Docs: Responses API streaming — OpenAI](https://developers.openai.com/api/reference/resources/responses)
  The second wire format. Use for: the lesson that forces the abstraction.
- [Blog: "Range Over Function Types" — The Go Blog](https://go.dev/blog/range-functions)
  `iter.Seq`. Use for: deciding how a Go stream of events should look.
- [Blog: "Go Concurrency Patterns: Context" — The Go Blog](https://go.dev/blog/context)
  Use for: abort and partial results.

## Wisdom (Communities)

- [pi Discord](https://discord.com/invite/3cU7Bz4UPx)
  Where pi's maintainers and users talk. Use for: "why does the loop do X"
  once the source and the blog post have not answered it.
- [pi GitHub Discussions](https://github.com/earendil-works/pi/discussions)
  People embedding pi-agent-core in their own products (for example #3337).
  Use for: what production users run into.
- [Gophers Slack](https://invite.slack.golang.org/) and
  [r/golang](https://www.reddit.com/r/golang/)
  Use for: API design review of the module before v0.1.

## Gaps

- No high-trust write-up of a production agent harness in Go. The Go
  material stops at the 400-line loop. Expect to translate from pi's
  TypeScript and check Go idiom against the standard library.
- OpenAI URL above not yet read in a lesson; verify before citing details.
- Nothing yet on retries, rate limits and telemetry for LLM calls. Find
  before the production lessons.
