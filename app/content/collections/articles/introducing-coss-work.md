---
title: Introducing coss.work
slug: introducing-coss-work
description: ""
tags: []
createdAt: 2026-10-10T08:07:18.246Z
updatedAt: 2026-10-10T15:16:00.888Z
publishedAt: ""
status: draft
---
I built a job board. Yes, say hello to yet another job board. But this one is for a very specific niche — software engineering jobs at commercial open-source companies. 

## What is coss.work?

[coss.work](http://coss.work) is a job board to help software engineers find jobs at commercial open-source companies. The site will feature only companies whose core product is open-source. That means, only companies that build software you can self-host or build from source but also have a hosted cloud and/or paid license/features/support.

[coss.work](http://coss.work) will also only feature engineering jobs. No engineering-adjacent roles like DevRel, GTM Engineer, Sales Engineer, etc. Some portion of the job must involve working on the open-source portion of the product. 

The site is purely for software engineers who want to work on open-source software and get paid for it.

## Why build a job board?

Years ago, when I was looking for a job, I stumbled upon a site called [fossfox.com](http://fossfox.com) — a job board for software engineering jobs at open-source companies. I found it interesting that there was a website serving this niche.

I eventually joined FlowiseAI, a commercial open-source company. Even though, I didn’t get that job via fossfox, I still bookmarked the site. I was curious to see what sort of companies were featured there. I used to occasionally go back and check the latest listings, not for applying but just to discover new open-source companies/software.

I forget when, but sometime ago I found that the site was shutdown. FossFox’s source code was also open source so I forked, with plans to revive it under a new name but with the same purpose — connect engineers interested in working on open-source software to commercial open-source companies looking for engineering talent.

## How does it work?

Like I mentioned earlier, fossfox’s source code was open source. And the way to submit job openings was…. through pull requests! So I shamelessly copied it because it’s perfect. I don’t have to maintain a database or set up authentication. 

I or companies open pull requests about job openings. The job openings are represented in JSON using a provided JSON schema. Some data like job title, type, level, and location are already pre-populated and available as JSON files for use within the job openings.

Here’s the criteria for a pull request that will be accepted:

- Company’s core product should be open-source. Not SDKs, not libraries (unless libraries are the core product).
- It should be a software engineering role. No DevRel, GTM Engineers, FDEs, Sales Engineers, etc.
- Some portion of the role must involve working on the open-source part of the product.

For every PR, I vet the company and the position. If it meets the above mentioned criteria, I accept the PR and the site updates automatically.

---

So that’s coss.work. It’s something that I thought should exist, so I built it. If you find open-source jobs or you work at an open-source company that’s hiring, consider opening a PR. It doesn’t get much traffic yet, but I’ve started marketing activities and will soon reach great engineering talent.
