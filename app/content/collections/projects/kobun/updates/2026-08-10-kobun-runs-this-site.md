---
title: This site's articles now run on Kobun
createdAt: 2026-08-10
---

The articles collection here is the first thing Kobun manages end to end. Its 71 markdown files moved to Kobun's frontmatter shape — `slug`, `status`, and a `createdAt`/`updatedAt`/`publishedAt` trio — and a `.kobun.json` at the repo root now declares the collection: where the files live, what each field is, and which editor control it gets.

That config file is the whole integration. Point [Kobun](https://kobun.io) at the repo and the same files this site builds from become editable in a browser, with every save landing as a commit.
