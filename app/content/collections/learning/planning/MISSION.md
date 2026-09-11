# Mission: Design and architecture docs for POCs and features

## Why

Ilango is six months out from applying for hands-on tech-lead roles at
dev-tools / AI companies, and the reference postings (Sourcegraph Code Plane,
Railway Scalability) all ask for the same thing: make a technical decision,
write it down so other engineers can argue with it, and defend it async. He has
ten years of building but has never written a proper design doc — plans live in
his head, tickets and chat. The POC he leads at work, Kobun, DocuDex and the two
defended design exercises in January and February are all places this shows up
in the next six months.

## Success looks like

- Write a one-to-three page design doc for a feature in under an hour, with
  context, goals and non-goals, the design as trade-offs, and the alternatives
  he rejected and why.
- Write an ADR for a single decision in fifteen minutes, and keep an ADR log in
  a repo that a new engineer can read to understand why things are the way they
  are.
- Write a POC write-up that ends in a recommendation (build / don't / build
  differently) a manager can act on without reading the code.
- Draw the one or two diagrams a doc needs (C4 context and container level)
  and stop there.
- Run an async review: choose reviewers, state what kind of feedback is wanted,
  handle comments without a meeting, and record the outcome.
- Read someone else's design doc and give review comments that improve the
  decision rather than the prose.

## Constraints

- Full-time job, plus DDIA, LeetCode DSA (deadline 31 Oct) and the LYT workshop
  running in parallel. Front-loading agreed: several short sessions in the next
  fortnight, then one a week.
- No house template at work; he chooses the format. Lessons teach one opinionated
  skeleton and note where RFC / KEP / RFD processes differ.
- Every lesson ends with a real doc or a real section of one, written for a
  live project (the POC at work, Kobun, DocuDex), never a toy.
- Follow `About Me/writing-rules.md`: plain English, British spelling, no padding.
  The docs themselves should read that way too.

## Out of scope

- Product specs and PRDs (the problem side) — touched only where a design doc
  needs a problem statement.
- Full system-documentation frameworks (arc42 end to end), UML beyond what C4
  needs, and formal methods.
- Estimation, project planning and roadmaps.
- Presenting designs as slides or in live design-review meetings; the target is
  async, written review.
