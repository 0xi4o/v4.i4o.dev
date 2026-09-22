# Notes

Working notes and teaching preferences for this workspace.

- Ilango: ten years' full-stack (Go, TypeScript, React), self-taught, aiming
  at a hands-on tech-lead role by Feb 2027 (see `claude-cowork-os/career/`).
  Has never written a proper design doc; nobody at work has set a format, so
  he chooses. Wants it front-loaded: several short sessions in the next
  fortnight, then weekly.
- Real docs to apply lessons to, in rough order: the POC at work (design doc
  review by 12 Sep, outcome/recommendation doc by 26 Sep per career plan);
  Kobun and DocuDex ADRs (ADR index lives in `career/notes.org`); the two
  defended design exercises on 24 Jan and 7 Feb 2027.
- One opinionated skeleton for the course (Google's, via Malte Ubl), with RFC /
  RFD / KEP differences noted rather than taught separately.
- Every lesson ends with a real section written for a live project. Never a
  toy example. Word budgets keep it to one sitting.
- British spelling; follow `About Me/writing-rules.md` in the cowork-os
  workspace, for the lessons and for the docs he writes. Sentence-case headings.
- This folder is a content collection on his site (v4.i4o.dev), which renders
  MDX. Lessons import from `../assets/`. `LessonLayout` and `Quiz` are copied
  from `../cli-tools/assets/` so the courses look alike; `Checklist` and
  `BeforeAfter` are new here.
- Planned order: (1) the one-page design doc skeleton, (2) goals, non-goals and
  scope — the section reviewers actually read, (3) alternatives and trade-offs,
  (4) ADRs and an ADR log, (5) the POC write-up and recommendation, (6) C4
  diagrams — the two you need, (7) running an async review, (8) reviewing
  someone else's doc, (9) cross-cutting concerns and the ops checklist (KEP
  production-readiness), (10) the long-form design exercise (Railway shape).
  Interleave retrieval from earlier lessons; reuse the same live doc across
  lessons 1–3 so it grows into a finished thing.
- Work docs (the POC design doc and outcome doc) are confidential and will
  not be shared here. Lessons can point at them as the place to apply the
  skill, but any review, critique or worked example in this workspace uses
  Kobun or DocuDex. Never ask him to paste work docs. Self-review checklists
  matter more than usual because he is his own reviewer for the work docs.
- Course example is DocuDex (chosen 10 Sep). Still only an idea, so the doc
  under construction in lessons 1–3 is the DocuDex MVP design doc, not a
  feature doc. Watch for product-spec drift; suggest a separate problem
  statement if it keeps leaking in.
- Progress: workspace set up 2026-09-07. Lessons 1–3 completed by 17 Sep (LRs 0002–0004); the DocuDex design doc is a complete first version and the skeleton skill is established. Lesson 4 (ADRs) written 17 Sep, not yet completed. Next: lesson 5, the POC write-up, using the godoc-coverage assumption as the POC question.
