# CLI tools resources

Primary sources first. Every claim in a lesson should trace to one of these.
Verified 2026-09-02 unless marked.

## Knowledge

### ripgrep and fd

- [ripgrep user guide (GUIDE.md)](https://github.com/BurntSushi/ripgrep/blob/master/GUIDE.md)
  The official guide: default filtering, globs, types, `--replace`, config file. Use for: any question about *why* rg did or didn't search something.
- [ripgrep README](https://github.com/BurntSushi/ripgrep/blob/master/README.md)
  Install instructions per platform and the feature overview. Use for: installation.
- [ripgrep flag definitions (defs.rs)](https://github.com/BurntSushi/ripgrep/blob/master/crates/core/flags/defs.rs)
  The source `rg --help` is generated from. Use for: the exact meaning of a flag when the guide is vague.
- [fd README](https://github.com/sharkdp/fd/blob/master/README.md)
  The README is the manual: tutorial, full `--help`, install per distro. Use for: everything fd.

### jq and yq

- [jq manual](https://jqlang.org/manual/)
  The canonical jq reference (1.8). Use for: filter syntax, builtins, `--arg`.
- [yq docs (Mike Farah)](https://mikefarah.gitbook.io/yq)
  The Go yq — jq-like syntax over YAML, JSON, INI, XML. Use for: YAML editing and conversion. Repo: https://github.com/mikefarah/yq

### Processes

- [ps(1) — man7](https://man7.org/linux/man-pages/man1/ps.1.html)
  procps ps on Linux; explains the Unix/BSD/GNU option styles. Use for: `-o` format keys, `STAT` codes.
- [ps(1) — macOS (BSD)](https://keith.github.io/xcode-man-pages/ps.1.html)
  The macOS ps. Use for: which Linux flags don't exist on the Mac.
- [pgrep(1) — man7](https://man7.org/linux/man-pages/man1/pgrep.1.html)
  pgrep/pkill/pidwait. Use for: matching rules, `-f`, `-a`, `-P`.
- [lsof manual](https://lsof.readthedocs.io/en/stable/manpage/) and [options reference](https://lsof.readthedocs.io/en/stable/options/)
  Official lsof docs (4.99), covers Linux and macOS. Use for: filter semantics, `-a`, `+L1`, `-i`.

### Tracing

- [dtruss(1m) — macOS](https://keith.github.io/xcode-man-pages/dtruss.1m.html)
  Syscall tracing on macOS via DTrace; needs root. Use for: the strace-shaped view on a Mac.
- [dtrace(1) — macOS](https://keith.github.io/xcode-man-pages/dtrace.1.html) *(listed, not opened this session)*
- [Apple Developer Forums: DTrace and SIP](https://developer.apple.com/forums/thread/816501)
  What SIP blocks and the unsupported `csrutil enable --without dtrace` workaround. Use for: the macOS caveats box.
- [illumos Dynamic Tracing Guide](https://illumos.org/books/dtrace/chp-intro.html)
  The canonical DTrace book (dtrace.org/guide points here). Use for: the D language, providers, aggregations.
- [bpftrace docs](https://bpftrace.org/docs/latest), [language reference](https://bpftrace.org/docs/release_025/language), [one-liner tutorial](https://bpftrace.org/tutorial-one-liners)
  The Linux equivalent of dtrace. Use for: everything tracing on the Linux box.
- [Brendan Gregg — eBPF tracing tools](https://www.brendangregg.com/ebpf.html) and [bpftrace introduction](https://www.brendangregg.com/blog/2019-08-19/bpftrace.html)
  The person who wrote most of the tooling. Use for: the mental model and worked one-liners.
- [Brendan Gregg — DTrace](https://www.brendangregg.com/dtrace.html) *(not fetch-verified this session; robots timeout)*

### Disk

- [GNU du manual](https://www.gnu.org/software/coreutils/manual/html_node/du-invocation.html)
  Use for: `--max-depth`, `--apparent-size`, `--exclude`.
- [du(1) — macOS (BSD)](https://keith.github.io/xcode-man-pages/du.1.html)
  No `--max-depth`; use `-d`. Use for: cross-platform du.
- [GNU tar manual](https://www.gnu.org/software/tar/manual/tar.html)
  Use for: `-C`, `--strip-components`, compression flags.
- [bsdtar(1) — macOS](https://keith.github.io/xcode-man-pages/bsdtar.1.html)
  macOS tar is libarchive's bsdtar; auto-detects compression on read. Use for: Mac differences.
- [lsblk(8) — man7](https://man7.org/linux/man-pages/man8/lsblk.8.html)
  Linux only. Use for: `-f`, `-o` columns.

### Networking

- [curl manpage](https://curl.se/docs/manpage.html) and [Everything curl](https://everything.curl.dev/)
  The manpage for flags; Daniel Stenberg's free book for the why. Use for: `-w` timing variables, `--resolve`, TLS options.
- [ss(8) — man7](https://man7.org/linux/man-pages/man8/ss.8.html)
  Use for: filter syntax, `-tulpn`, state filters. Linux only (macOS: `netstat`/`lsof -i`).
- [BIND 9 manual pages — dig](https://bind9.readthedocs.io/en/latest/manpages.html#dig-dns-lookup-utility)
  Use for: `+short`, `+trace`, `@server`.
- [nc(1) — OpenBSD netcat (Debian copy)](https://manpages.debian.org/bookworm/netcat-openbsd/nc.1.en.html)
  The implementation both macOS and Debian ship. Use for: `-z`, `-l`, `-U`. (Canonical https://man.openbsd.org/nc.1 not reachable this session.)
- [tcpdump(1)](https://www.tcpdump.org/manpages/tcpdump.1.html) and [pcap-filter(7)](https://www.tcpdump.org/manpages/pcap-filter.7.html)
  The tool and its filter language. Use for: capture flags and BPF expressions.
- [openssl-s_client(1)](https://docs.openssl.org/3.0/man1/openssl-s_client/)
  Use for: `-servername`, `-showcerts`, `-starttls`.

## Wisdom (communities)

- [Unix & Linux Stack Exchange](https://unix.stackexchange.com)
  The canonical Q&A for shell and systems questions; answers cite man pages. Use for: "why does this flag behave like that". macOS specifics: [Ask Different](https://apple.stackexchange.com).
- [r/commandline](https://www.reddit.com/r/commandline/)
  CLI tools and workflows; rg/fd/jq threads are constant. Use for: showing off a workflow, tool discovery.
- [r/linuxadmin](https://www.reddit.com/r/linuxadmin/)
  Production troubleshooting — where ss/lsof/tcpdump/bpftrace questions live. Use for: real-world debugging stories.
- [Hacker News](https://news.ycombinator.com)
  Recurring "modern CLI tools" threads (e.g. [this one](https://news.ycombinator.com/item?id=35456128)). Discovery, not Q&A.

## Gaps

- No single trusted, current guide to DTrace on modern macOS with SIP. The Apple forum thread plus the illumos book is the best combination found.
- The man.openbsd.org nc page and brendangregg.com/dtrace.html should be re-verified from the Mac.
