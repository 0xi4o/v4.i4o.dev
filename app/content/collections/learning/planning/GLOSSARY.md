# Design and architecture docs — glossary

The canonical vocabulary for this workspace. A term is promoted here once
Ilango has used it correctly, not when it is first introduced.

## Terms

**Proof of concept (POC)**:
A time-boxed build whose purpose is to answer a question, not to ship. Its
output is the answer, written down.
_Avoid_: prototype (implies a UI to look at), spike (a POC of a day or less)

**Trade-off**:
What a design gives up to get what it gets. A design section that names none
is describing, not deciding.
_Avoid_: pros and cons (lists both sides without saying which won)

**Goal**:
An outcome that must be true when the work ships, stated so it can be checked.
More than one design could satisfy it.
_Avoid_: requirement (implies someone else set it), feature

**Design choice**:
A way of making a goal true. Belongs in the design section, where it can be
argued with; never in the goals list.
_Avoid_: goal, decision (reserved for ADRs)

**Non-goal**:
A goal a reader could reasonably have expected that the author is explicitly
rejecting, with a clause on why.
_Avoid_: out of scope (too vague to surprise anyone), limitation

**Open question**:
Something the author is unsure about, listed at the end of the doc with what
would resolve it.
_Avoid_: TODO, TBD
