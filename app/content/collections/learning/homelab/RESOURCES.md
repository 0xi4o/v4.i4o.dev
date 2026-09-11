# Homelab resources

Verified 2026-09-10. Vendor documentation and primary sources first; blog
posts only where they add hardware-specific detail the docs lack.

## Knowledge

### Networking fundamentals

- [What is a subnet? — Cloudflare Learning Center](https://www.cloudflare.com/learning/network-layer/what-is-a-subnet/)
  "A network inside a network"; subnet masks with a worked example. Use for:
  lesson 1, and whenever a `/24` needs explaining again.
- [What is a router? — Cloudflare Learning Center](https://www.cloudflare.com/learning/network-layer/what-is-a-router/)
  A router connects two or more networks; how home routers share one
  connection. Use for: the gateway idea.
- [DHCP basics — Microsoft Learn](https://learn.microsoft.com/en-us/windows-server/troubleshoot/dynamic-host-configuration-protocol-basics)
  The definition, the discover/offer/request/ack sequence, and leases.
  Vendor-neutral despite the host. Use for: why addresses change and how
  to stop them.
- [What is DNS? — Cloudflare Learning Center](https://www.cloudflare.com/learning/dns/what-is-dns/)
  "The phonebook of the Internet". Use for: names for the rack.
- [NAT — MDN Web Docs glossary](https://developer.mozilla.org/en-US/docs/Glossary/NAT)
  One paragraph on how a house shares one public address. Use for: why
  nothing outside can reach the rack unless you let it.
- [RFC 1918 — Address Allocation for Private Internets](https://www.rfc-editor.org/rfc/rfc1918)
  The three private ranges. Use for: why every home is `192.168.x.x`.
- [RFC 8375 — Special-Use Domain 'home.arpa.'](https://www.rfc-editor.org/rfc/rfc8375)
  The reserved domain for home networks. Use for: naming the nodes.

### Proxmox VE (the hypervisor)

- [Proxmox VE Administration Guide](https://pve.proxmox.com/pve-docs/pve-admin-guide.html)
  The reference for everything: system requirements, installer walkthrough,
  storage models, networking, clustering. Current: PVE 9.2 on Debian 13
  (trixie). Use for: any "how does Proxmox do X" question. Read the
  Installation chapter before lesson 1.
- [Proxmox VE 9.2 ISO installer](https://www.proxmox.com/en/downloads/proxmox-virtual-environment/iso/proxmox-ve-9-2-iso-installer)
  ISO 9.2-1 (21 May 2026, 1.71 GB) with SHA256. Use for: the download and
  the checksum to verify before writing the USB.
- [Cluster Manager](https://pve.proxmox.com/wiki/Cluster_Manager)
  Requirements (latency under 5 ms, UDP 5405–5412, same version on all
  nodes), the "hostname and IP cannot change after joining" rule, quorum (one
  vote per node, read-only on loss, three nodes for reliable quorum). Use for:
  lesson 3, and for why the IP plan matters in lesson 1.
- [Package Repositories](https://pve.proxmox.com/wiki/Package_Repositories)
  The no-subscription repo and the deb822 `proxmox.sources` file for PVE 9;
  how to silence the enterprise repo without a key. Use for: first boot after
  install.

### The hardware

- [ThinkCentre M710 Tiny platform specifications (Lenovo PSREF)](https://psref.lenovo.com/syspool/Sys/PDF/ThinkCentre/ThinkCentre_M710_Tiny/ThinkCentre_M710_Tiny_Spec.pdf)
  B250 chipset, two DDR4-2400 SO-DIMM slots (32 GB max), one 2.5" SATA bay,
  one M.2 PCIe 3.0 ×4 NVMe slot, Intel I219-V gigabit NIC with Wake-on-LAN,
  65 W adapter. Use for: what can and cannot be upgraded.
- [M710q User Guide (Lenovo)](https://download.lenovo.com/pccbbs/thinkcentre_pdf/m710q_10yc_ug_en.pdf)
  Opening the case, replacing memory and drives, BIOS entry. Use for: the RAM
  upgrade and drive swaps.
- [Lenovo ThinkCentre M710q Tiny guide — ServeTheHome](https://www.servethehome.com/lenovo-thinkcentre-m710q-tiny-guide-and-ce-review/)
  Teardown with photos; confirms the second M.2 slot is unpopulated and there
  is no vPro. Use for: knowing what's inside before opening it.
- [TL-SG2008 support page (Omada Networks)](https://support.omadanetworks.com/uk/product/tl-sg2008/)
  Firmware, user guide and CLI guide for the switch, plus VLAN configuration
  guides. Current hardware V4.6. Use for: anything switch-side.
- [TL-SG2008 installation guide (PDF)](https://static.tp-link.com/res/down/doc/TL-SG2008_V1_QIG.pdf)
  Default management address `192.168.0.1`, login `admin`/`admin`, and the
  "put your PC on 192.168.0.x first" step. Use for: first login in lesson 2.

### Kubernetes on the nodes

- [K3s documentation](https://docs.k3s.io/)
  Lightweight, fully conformant Kubernetes in one binary. Use for: the
  cluster that runs inside the Proxmox VMs.
- [K3s requirements](https://docs.k3s.io/installation/requirements)
  Server: 2 cores, 2 GB; agent: 1 core, 512 MB; SSD recommended; the inbound
  port table (6443, 2379–2380, 8472/udp, 10250). Use for: sizing VMs and
  writing firewall rules.

### Infrastructure as code

- [bpg/terraform-provider-proxmox](https://github.com/bpg/terraform-provider-proxmox)
  The maintained Terraform/OpenTofu provider for Proxmox VE 9.x; manages VMs,
  containers, storage, users; authenticates with an API token (plus SSH for a
  few operations). Use for: the Terraform lessons.

### Remote access

- [Tailscale subnet routers](https://tailscale.com/kb/1019/subnets)
  When to install Tailscale per device versus advertise the rack's subnet from
  one machine; the Linux steps (IP forwarding, `--advertise-routes`, approve in
  the admin console). Use for: reaching the rack from the laptop and phone.
- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/)
  `cloudflared` makes outbound-only connections, so no inbound ports on the
  ISP router. Use for: the services that should be public.

## Wisdom (communities)

- [Proxmox Support Forum](https://forum.proxmox.com/)
  Staff answer threads; search before posting. Use for: installer, storage and
  cluster questions specific to Proxmox.
- [ServeTheHome forums](https://forums.servethehome.com/)
  The home of the "TinyMiniMicro" project the M710q belongs to; hardware
  questions get answered by people who have opened the same box.
- [r/homelab](https://www.reddit.com/r/homelab/) and [r/selfhosted](https://www.reddit.com/r/selfhosted/)
  Large and uneven, but the wikis and "what's everyone running" threads are
  useful for choosing services. Use for: ideas, not for facts.
- [Home Operations Discord](https://discord.gg/home-operations)
  The GitOps-on-Kubernetes-at-home crowd (Flux, Talos, k3s). Use for: once
  the cluster exists and the question is "how do people run this properly".

## Gaps

- No primary source found yet for the TL-SG2008 V4 standalone web UI VLAN
  walkthrough (the guides on the support page are mostly Omada-controller
  flavoured). Check the V4 user guide PDF before lesson 2.
- Nothing yet on backups (Proxmox Backup Server vs `vzdump` to the NAS); wait
  for the NAS decision.
