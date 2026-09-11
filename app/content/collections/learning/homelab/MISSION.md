# Mission: A three-node homelab I can run and reason about

## Why

Ilango dropped Hetzner in September 2026 for a 10-inch rack of three ThinkCentre
M710q Tinys and a TL-SG2008 switch, so that the infra strand of his tech-lead
plan (Kubernetes, Terraform, networking, storage) is learned on metal he owns
and can break. The reference roles (Sourcegraph Code Plane, Railway
Scalability) expect someone who understands what sits under the cloud
abstractions. Self-hosted apps — reachable at home and on the go — are the
payoff that keeps the rack switched on.

## Success looks like

- Rebuild any node from bare metal to "back in the cluster" in under an hour,
  from notes he wrote, without a search.
- Explain the rack's network on a whiteboard: every IP, why it has it, what
  the switch is doing, how traffic gets in from outside and why nothing is
  port-forwarded.
- Run a Kubernetes cluster across the three nodes, create and destroy the VMs
  under it with Terraform, and know what breaks when one node is unplugged.
- Self-host at least three services he uses weekly, reachable via Tailscale
  and, where public, Cloudflare Tunnel, with backups that have been restored
  at least once.
- Write up each stage as a blog post or short video without embellishing.

## Constraints

- One hands-on evening a week (~2 h). Every lesson ends with something changed
  on the real hardware, and a note in the rack's own runbook.
- Hardware as it is: 3 × M710q (i-series 7th gen, 8 GB RAM, 256 GB SATA SSD;
  two also have 512 GB NVMe), one gigabit NIC each, TL-SG2008 (gigabit L2+,
  no PoE), ISP TP-Link router in the living room that cannot move, one long
  cable to the office. No NAS yet. Budget for small upgrades (RAM) is fine;
  no new switches or routers for now.
- Runs 24/7; keep the rack simple and add things as understanding grows.
- Follow `About Me/writing-rules.md`: plain English, British spelling, no
  padding. Lessons cite primary docs; nothing from memory.

## Out of scope

- Enterprise-grade HA, Ceph, and multi-cluster topologies — three nodes is a
  lab, not a data centre.
- Home networking beyond the rack (Wi-Fi, IoT VLANs for the house) until the
  rack itself is solid.
- NAS selection and ZFS pools — revisit when the NAS is bought.
- GPU passthrough, media transcoding, and anything that needs hardware the
  M710q lacks.
