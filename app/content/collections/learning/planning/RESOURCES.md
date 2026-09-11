# Design and architecture docs — resources

Verified 2026-09-07. Primary sources and company handbooks only; no
content-marketing.

## Knowledge

### Design docs — what they are and how to write one

- [Design Docs at Google — Malte Ubl](https://www.industrialempathy.com/posts/design-docs-at-google/)
  The anatomy (context and scope, goals and non-goals, design, alternatives,
  cross-cutting concerns), the "not an implementation manual" rule, length
  guidance, when to skip one, and the review lifecycle. Use for: the skeleton
  every lesson builds on. Read first.
- [How to write a good design document — Grant Slatton](https://grantslatton.com/how-to-design-document)
  A design doc is an argument that has to convince the author first; order it
  so the reader is never surprised; every paragraph summarisable in one
  sentence; Amazon's silent-read review. Use for: structure and ordering, and
  for when docs get read but not agreed with.
- [Scaling engineering teams via RFCs — Gergely Orosz](https://blog.pragmaticengineer.com/scaling-engineering-teams-via-writing-things-down-rfcs/)
  A lightweight RFC process: write, targeted approvals, broadcast. Use for:
  proposing a doc culture to a team that has none.
- [Software engineering RFC and design doc examples and templates — Gergely Orosz](https://newsletter.pragmaticengineer.com/p/software-engineering-rfc-and-design)
  Catalogue of real company templates. Use for: comparing skeletons, stealing
  section headings.
- [Engineering planning with RFCs, design documents and ADRs — Gergely Orosz](https://newsletter.pragmaticengineer.com/p/rfcs-and-design-docs)
  (partly paywalled) When each doc type applies; how Uber's process evolved.
  Use for: choosing between RFC, design doc and ADR for a given decision.
- [Writing practices and culture — HashiCorp](https://www.hashicorp.com/en/how-hashicorp-works/articles/writing-practices-and-culture)
  PRD (problem) vs RFC (solution), team-first review, named approvers,
  company-wide broadcast. Use for: a dev-tools company's real process; what
  "approver" means in practice.
- [How to write design docs for machine learning systems — Eugene Yan](https://eugeneyan.com/writing/ml-design-docs/)
  ([template repo](https://github.com/eugeneyan/ml-design-docs)) Adds success
  metrics, methodology and risk sections. Use for: features with a model or an
  agent in the loop, where "does it work" is a measurement question.

### Decisions and architecture description

- [Documenting Architecture Decisions — Michael Nygard (2011)](https://cognitect.com/blog/2011/11/15/documenting-architecture-decisions)
  The original ADR post: title, context, decision, status, consequences. Use
  for: any single decision worth remembering.
- [Architectural Decision Records — adr.github.io](https://adr.github.io/)
  Nygard, MADR and Y-statement templates, plus tooling. Use for: picking a
  template and a repo layout for an ADR log.
- [C4 model — Simon Brown](https://c4model.com/)
  Context, container, component, code. Use for: the one or two diagrams a doc
  needs; the vocabulary for "what box is this".
- [arc42 — Hruschka and Starke](https://arc42.org/)
  Full architecture documentation template. Heavier than this course needs;
  use for: a checklist of sections a long-lived system doc might want.
- [A Philosophy of Software Design, 2nd ed. — John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/book.php)
  Complexity, deep modules, information hiding. Use for: the vocabulary of the
  alternatives section — why one design is simpler than another.
- [Scaling technical consistency — Will Larson](https://lethain.com/scaling-consistency/)
  Architecture review groups and when they become bottlenecks. Use for:
  thinking about review as a tech lead, not only as an author.

### POC, spike and "should we build this" write-ups

- [Write the pitch — Shape Up, ch. 6, Ryan Singer](https://basecamp.com/shapeup/1.5-chapter-06)
  Problem, appetite, solution, rabbit holes, no-gos. Use for: the POC
  recommendation doc — the "should we commit?" shape.
- [RFD 1: Requests for Discussion — Oxide](https://rfd.shared.oxide.computer/rfd/0001)
  States model the path from rough idea to committed decision
  (prediscussion → ideation → discussion → published → committed → abandoned).
  Use for: framing a POC doc as a discussion that can end in "abandoned".
- [Working Backwards — Bryar and Carr](https://us.macmillan.com/books/9781250267597/workingbackwards/)
  The published source on Amazon's PR/FAQ. Use for: customer-first framing of
  a proposal. Book only; no public Amazon template exists.

### Getting a doc reviewed well

- [Requests for comments — Sourcegraph handbook (archived)](https://github.com/sourcegraph/handbook/blob/main/content/company-info-and-process/communication/rfcs/index.md)
  Async review with status labels: WIP → Reviewing problem ("reviews should
  focus on confirming that the problem definition is correct") → Reviewing
  solution → Approved → Implemented, or Closed / Abandoned. Background must be
  "indisputable facts, not opinion"; problem statement says "why this problem
  is worth solving now"; tags for decider, input providers, approvers and
  affected teams. Use for: the exact process at the reference employer.
  Verified 10 Sep 2026.
- [The Rust RFC book](https://rust-lang.github.io/rfcs/)
  ([template](https://github.com/rust-lang/rfcs/blob/master/0000-template.md))
  Drawbacks, rationale and alternatives, unresolved questions, final comment
  period. Use for: section headings that force honesty about downsides.
- [Kubernetes Enhancement Proposals](https://github.com/kubernetes/enhancements/blob/master/keps/README.md)
  ([template](https://github.com/kubernetes/enhancements/blob/master/keps/NNNN-kep-template/README.md))
  Reviewers/approvers and the production-readiness questionnaire. Use for:
  the "what would ops ask?" checklist on infra-facing designs.

## Wisdom (communities)

- [Rands Leadership Slack](https://randsinrepose.com/welcome-to-rands-leadership-slack/)
  Large, moderated; staff-plus and architecture channels. Use for: process and
  "how does your company do this" questions. Not for pasting confidential docs.
- [LeadDev — code reviews and docs](https://leaddev.com/category/code-reviews-docs)
  Editorial and conference talks, member Slack. Use for: reading how other
  leads run reviews.
- [r/ExperiencedDevs](https://www.reddit.com/r/ExperiencedDevs/)
  Senior-leaning, moderated. Use for: threads on RFC/ADR practice at other
  companies.
- Real reviewers: the POC's stakeholders at work, and Ilango's manager, are the
  best critique loop available — a live doc reviewed by people who have to act
  on it beats any forum.

## Gaps

- No high-trust source found specifically on writing up a *failed* or
  inconclusive POC. Shape Up's pitch and Oxide's "abandoned" state are the
  closest. Watch for one.
- No verified source on reviewing someone else's design doc as a reviewer
  (as opposed to running the process). Google's eng-practices cover code
  review, not design review.
