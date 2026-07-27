# Working Notes

## Teaching preferences (Ilango)

- Absolute beginner at analytics. **Never use a term without defining it first** — this
  was his explicit ask. Every new word goes in the glossary the moment it appears.
- Plain English, British spellings, direct and short. See `About Me/writing-rules.md`
  in `claude-cowork-os` for the full list of tics to avoid.
- Technical enough for code and detail; the gap is vocabulary, not ability.
- **The course teaches PostHog, not a Kobun implementation.** He said this explicitly in
  session 1. Kobun is the running example only because it has a marketing site _and_ an
  app behind a login, so the whole visitor-to-user journey fits on one product. Never
  let a lesson become a Kobun project — every step should read as "here is how this works,
  illustrated on a product like Kobun".
- He has just finished Temporal lessons 1–2 — the "append-only log of things that
  happened" idea is already in place. Reuse it as an anchor; it is genuinely the same
  shape as an event stream.

## Setup facts

- PostHog Cloud free tier. Region not yet chosen (EU vs US) — decide in the setup lesson.
- Not yet signed up as of session 1.

## Session log

- **2026-07-26** — Workspace initialised. Mission set: general fluency in PostHog's web
  and product analytics, Kobun as the running example. Decisions he wants the data to
  support: what-to-build-next, drop-off, traffic quality, and the marketing-site → app
  journey. Lesson 1 written: the one-table data model (events, properties, persons) and
  how every chart derives from it.
- **2026-07-26, later** — He corrected the framing: the lessons are to understand PostHog
  as a whole, not to instrument one product. Mission rewritten to say so. He does want
  both surfaces (marketing site + app) in one project, since that is what the
  visitor-to-user journey needs. Next: hands-on — create the Cloud project, install on
  both surfaces, watch real events land, then read the pre-built web analytics dashboard
  and identify what each tile counts.

## Reminders for future sessions

- `index.md` in this folder is his **published site content** (v4.i4o.dev), not a lesson.
  Don't clobber it.
- Lesson 3 should be how to design a tracking plan — north star, metrics tree, event list —
  using `getting-hogpilled` and `best-practices`, worked through on Kobun but written as a
  method he can apply anywhere. That is where the mission actually pays off.
- The marketing-site → app journey question needs: one project for both surfaces, plus
  `identify`. Worth its own lesson once events are landing.
- Every source in `RESOURCES.md` is PostHog's own. Find at least one independent voice
  before the lessons on interpreting results, and say so plainly in the meantime.
- Spaced retrieval: re-probe the event/property/person model in lesson 3, not lesson 2.
