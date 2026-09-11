# Mission: Command-line tools for systems work

## Why

Ilango runs his own software on his own machines (Ink, Kobun, Dokploy on
Hetzner, plus a home lab) and is working through a systems-engineering
curriculum. When something is slow, stuck, or unreachable he wants to *look*
rather than guess: at the processes, the sockets, the disk, the packets. The
tools in this workspace are how you look. A side benefit is being able to teach
them credibly on ilango.builds.stuff.

## Success looks like

- Search any codebase or filesystem in seconds with `rg` and `fd`, and know
  exactly why a search came back empty.
- Reshape any JSON or YAML from the shell with `jq` and `yq` without opening an
  editor or writing a script.
- Given a misbehaving process, answer "what is it doing, what does it have open,
  who is holding that port" with `ps`, `pgrep` and `lsof`.
- Trace a live process on macOS with `dtrace`/`dtruss`, and know the Linux
  equivalent (`bpftrace`) well enough to reach for it.
- Find where the disk went, move directories around as archives, and read the
  block-device layout on a Linux box (`du`, `tar`, `lsblk`).
- Debug "why won't this connect" by working down the stack: `dig` → `nc` →
  `openssl s_client` → `curl`, with `ss` and `tcpdump` to see what the kernel
  and the wire actually saw.

## Constraints

- Full-time day job; side-project time only. Lessons must finish in one sitting.
- Practises on macOS (daily driver) and a local Linux machine / home lab. Every
  lesson notes where the two differ (BSD vs GNU flags, dtrace vs bpftrace,
  Linux-only tools like `lsblk`).
- Already fluent with grep, find, sed and awk — use them as the known ground to
  teach against, never re-teach them.
- Zero prior knowledge of the six tool groups is the assumed starting point.
- Prefers building to understand: every lesson ends with something run for real.

## Out of scope

- Shell scripting, tmux, git, Docker — adjacent, but not this course.
- Load testing, profiling (`perf`, pprof) and the wider sysstat family — a
  possible follow-on course once the six groups are solid.
- Windows.
