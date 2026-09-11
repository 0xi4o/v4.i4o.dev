# Notes

Working notes and teaching preferences for this workspace.

- Ilango: ten years' full-stack (Go, TypeScript, React), comfortable on the
  Linux CLI and with Terraform + AWS at work. Wants infra first, apps as
  payoff, one hands-on evening a week (~2 h). Every lesson must end with a
  change on the real rack (or, for lesson 1, on paper).
- **First principles, always.** He said so explicitly on 10 Sep after the
  first draft of lesson 1 opened with "choose a hypervisor": he knows "a
  little" about homelabs, networking, Proxmox, DHCP, VLANs and wants each
  fundamental explained as if coming in blind. Rule for every lesson: a
  concept section that earns each new term with a concrete test he can run,
  then hands-on that uses only earned terms. Never lean on vocabulary a
  previous lesson has not covered. Tech-savvy, so no hand-holding on the
  shell — the gap is concepts, not tools.
- Hardware (10 Sep 2026): 3 × M710q, 8 GB RAM each, 256 GB SATA SSD in all
  three, 512 GB NVMe in two. TL-SG2008 V4 (gigabit, L2+, no PoE). ISP TP-Link
  router in the living room, one long run to the office. Has a USB stick,
  monitor and keyboard for installs. WoL works.
- 8 GB is the pinch point. Proxmox itself wants ~2 GB; a k3s server VM wants
  2 GB minimum. Recommend a second 8 GB DDR4 SO-DIMM per node early (cheap,
  two slots, 32 GB max). Don't block lesson 1 on it.
- Decision made in lesson 1: Proxmox on all three, k3s inside VMs. Reasoning
  is in the lesson and `reference/stack-decision.mdx`. Bare Ubuntu + k3s was
  the honest alternative; it lost on "reset button" (VM snapshots and
  Terraform-driven rebuilds are the whole point of the infra strand).
- Storage layout per node: Proxmox on the 256 GB SATA SSD (ext4/LVM, keep it
  boring); the 512 GB NVMe where present becomes a separate VM-disk storage.
  Node 3 has only SATA — fine, it just holds fewer VMs.
- IP plan: nodes get static addresses outside the ISP router's DHCP pool,
  in the router's own subnet (no VLANs yet). The router's actual subnet and
  DHCP range are confirmed in lesson 1 step 1. Placeholder in docs:
  `192.168.1.0/24`, router `.1`, nodes `.11–.13`, switch `.10`. Correct
  once known.
- Naming: `pve1`, `pve2`, `pve3` for the hosts. Cluster name decided in
  lesson 3. Hostnames and IPs cannot change after clustering — say so in
  lesson 1.
- Planned order: (1) how the home network works — MAC vs IP, subnet, router
  and gateway, DHCP and leases, DNS, what a switch does; map the real network,
  place the rack on paper; (2) the switch — frames vs packets, what "managed"
  means, why a switch has an IP, VLANs as an idea (not applied yet); first
  login, firmware, static management IP; (3) what a hypervisor is — process
  → container → VM, what Proxmox adds; the Proxmox vs bare Ubuntu decision;
  install node 1 (existing draft 0003, needs a first-principles rewrite of
  section 1 before use); (4) install nodes 2–3, what a cluster is and why
  quorum, form it, pull a cable; (5) first VM by hand — what cloud-init is,
  a template; (6) Terraform: the bpg provider, VMs from code, destroy and
  recreate; (7) what Kubernetes actually is (control plane, nodes, pods) and
  k3s across three VMs; (8) Tailscale — what a VPN/overlay is, subnet router,
  access from phone; (9) first self-hosted service with persistent storage;
  (10) Cloudflare Tunnel and why not port-forwarding; (11) backups and a
  restore drill; (12) monitoring; (13) the "unplug a node" chaos evening and
  write-up. Interleave retrieval from earlier lessons in each quiz.
- The rack runbook: ask him to keep `RUNBOOK.md` in his Obsidian vault or
  this folder — every lesson adds the commands actually run. It is the
  artefact "rebuild a node in under an hour" tests against.
- British spelling; `About Me/writing-rules.md` applies. Sentence-case
  headings. Lessons import from `../assets/`; `LessonLayout`, `Quiz`,
  `Checklist`, `Categorise` and `BeforeAfter` copied from `../planning/assets/`
  so the courses look alike. `Steps` is new here (numbered hands-on steps
  with a done-tick per step).
- Progress: workspace set up 2026-09-10. First-draft install lesson parked as
  0003. Lesson 1 (home network) written the same day, not yet done. Next:
  lesson 2 (the switch), written against whatever his map shows.
