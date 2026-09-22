---
title: Homelabbing Part 1
slug: homelabbing-part-1
description: I wanted to start a homelab. So I bought 3 used Lenovo Thinkcentre
  mini PCs. This is the first in a series of articles where I talk about my
  homelabbing adventures.
tags:
  - side-projects
  - workflow
  - learning
createdAt: 2026-09-16T07:11:56.013Z
updatedAt: 2026-09-22T07:50:21.299Z
publishedAt: ""
status: draft
---
I’m not sure when it started but I’ve wanted to set up a homelab for a long time. I think I first heard the concept of a homelab from The Changelog podcast. I had no particular goal for it at the time, but I found it cool that you can do a lot of awesome stuff with a homelab. So I wanted one. 

As you would normally would, I started going down a rabbit hole on Youtube about homelabs. I watched Techno Tim, Raid Owl, Hardware Haven videos about how they’re building their homelabs, what they do with it, and how to build my own. Most of the homelabs they build are overkill for me. I don’t need a huge server rack with server-grade computers, network switches, network attached storages with tens of terabytes of storage in different raid configurations, and so on. 

I always figured I would start small, with something like a Raspberry Pi cluster. But in recent years, the price of the latest Raspberry Pi has climbed so high that it’s not a viable solution for me anymore. So I started looking elsewhere. 

## Mini PCs

Mini PCs are a great option for starting a homelab. They’re usually cheaper than a regular PC and laptop, if you don’t want the bleeding edge, high end stuff. That stuff is overkill, for now. But since I’m living in India, most of the leading mini PC manufacturers don’t ship to India. Even if they do, what I have to pay in customs duties would be too expensive. 

A lot of Hardware Haven’s videos feature used mini PCs from Lenovo, Dell, and HP. These are those little enterprise workstations. Due to rising RAM and storage costs, these mini PCs have gotten quite expensive, if you buy new. For example, new Lenovo Thinkcentre mini PCs start at 70k INR for mid-range specs. Refurbished ones on Amazon and Flipkart were more affordable but I always felt sketchy about the sellers.

Then I got an idea from a friend - Facebook Marketplace. And boy did I find a treasure trove of options. I started scouring listings of used Thinkcentre mini PCs and found a seller with good reviews and contacted him. He had a bunch of used but near-new condition Lenovo Thinkcentre M710Qs. 



Here are their specs:

- Intel Core i5 7th Gen
- 8GB DDR4
- 256GB SATA SSD

They also have a 1 Gbps NIC, 1 unused M.2 NVMe slot, 1 unused memory slot, 2 Display Ports, and multiple USB Type A ports. They also have Wifi but I haven’t checked what chip it is yet. I bought 3 units at 15k INR each, so 45k INR total. I’m planning to buy one more from him soon. 

Now the nodes have 8GB memory each which is fine if I wanted to run Ubuntu Servers, install Docker and Kubernetes on bare metal, and host some apps, etc. This is a perfectly fine beginner homelab set up. But I want to go further - set up Proxmox, manage k8s clusters, host a lot of apps, set up observability, and a lot more. Turns out, the memory and storage the M710Qs come with is not enough. So I’m adding additional memory - 32GB on two nodes, 16GB on the other two. I had a couple of spare 512GB M.2 NVMe SSDs lying around so two nodes also got a storage upgrade. 

Again, this is way overkill for a beginner homelab but I had the budget for this. And I want to do a lot of stuff without having to upgrade for a while.

## Network Switch

After some research, I bought an 8-port network switch from TP Link. It’s slightly overkill but I wanted some headroom for experiments I want to do in the near future. 

## Plans

So here’s some of the things I want to do:

- Get better at Docker
- Learn networking, Proxmox, virtualization, Kubernetes, etc
- Become a DevOps expert
- Self-host apps and services
- Build a 10-inch mini rack

---

I want to learn and do a lot of cool stuff with my new homelab. I think this will be an exciting new journey that has been a long time coming and I’m starting this new series of articles to document the things I’m doing.

Follow me on X for updates on this series.
