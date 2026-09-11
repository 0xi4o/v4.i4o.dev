# Notes

Working notes and teaching preferences for this workspace.

- Ilango is a full-stack dev (Go + React + TypeScript), self-taught, filling in
  systems fundamentals. Comfortable with grep/find/sed/awk — treat those as known.
- Start from zero on the six tool groups. He wrote a reference of his own
  (`claude-cowork-os/linux-cli-deep-dive.md`) but asked that lessons ignore it
  and teach as if he had no knowledge of these tools.
- Machines: macOS daily, plus a local Linux box / home lab. Not Hetzner for
  practice. Always flag BSD/GNU differences and Linux-only tools.
- Short lessons, one sitting each. Hands-on bias: predict the command, run it,
  check the result.
- British spelling; follow `About Me/writing-rules.md` in the cowork-os
  workspace. Plain English, no padding, sentence-case headings.
- This folder is a content collection on his site (v4.i4o.dev), which renders
  MDX. Lessons import components from `../assets/`. Assets are shared in shape
  with the PocketBase course (`../pocketbase/assets/`) so the courses look alike.
- Tag convention in this collection: lowercase, hyphen-separated.
- Planned order: (1) rg + fd, (2) jq, (3) yq, (4) ps + pgrep, (5) lsof,
  (6) du + tar + lsblk, (7) dig + nc + curl, (8) ss + openssl, (9) tcpdump,
  (10) dtrace/dtruss on macOS, (11) bpftrace on Linux. Interleave retrieval
  drills from earlier lessons into later ones.
- Progress: workspace set up 2026-09-02; lesson 1 written, not yet completed.
