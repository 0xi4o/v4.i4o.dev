---
title: Introducing Kobun
slug: introducing-kobun
description: Say hello to Kobun — a git-based CMS for developers with a great writing experience.
tags:
  - side-projects
status: draft
createdAt: 2026-10-01T07:59:13.653Z
updatedAt: 2026-10-06T07:55:28.859Z
publishedAt: ""
---
I write — somewhat infrequently, I must admit — on my blog. But whenever I do, I always have to jump through a few hoops to get my posts published. Here are a few issues I face every time I want to write and publish an article:

- I hate writing in my code editor. I want a proper writing experience that gets out of my way
- I don’t want to write in markdown in my IDE. I want to write in a rich-text editor but want to save my writings as markdown so I can render it on my blog.
- I want my workflow to be as smooth as possible — from drafts to published work, I want the process to be easy
- When I publish, I want my site to automatically pick up those changes and deploy a new version. This is most probably set up for your site if you’re hosting with Vercel, Netlify, or Cloudflare.
- I want to keep all the files as markdown in a git repository that I own. I want to own all my writing.
- I want to have some rich elements in it. Things like images, videos, code syntax highlighting, and some interactive components. 
- I want a great writing experience.
- I want the content I write work across all sorts of frameworks and static site generators.
- I want to enjoy this whole process, I want little to no friction so I can write more and publish more.

I’ve tried various content management systems (CMS) over the years. I’ve never found a suitable one that works the way I want to. I always ran into some friction somewhere. I've built a writing app before. So I decided to build one for developers running blogs and content sites.

## Introducing Kobun

Say hello to Kobun — a git-based CMS for developers with a great writing experience. Git-based CMS's are nothing new. There are already a few options on the market. Some are quite good too.

I’ve always felt that the editing and workflow experience from the tools that I tried, to be lacking. I figured I’d build a better solution. Kobun is free and fair-source licensed. You can self-host it for your own use, even for commercial purposes.

The highlight of Kobun will be it’s editor. I have built writing apps in the past and I brought that experience to build this new editor. I rebuilt it from scratch and put a lot of work in it to create a simple but pleasant writing experience. I’ve always felt that a lot of apps do too much in the writing part. 

Since Kobun is based on git, everything you write in Kobun will be saved to your GitHub repository. If you already have content on GitHub, Kobun will detect it. All you have to do is create a .kobun.json configuration file.

Besides a nice writing experience, Kobun also brings a few nice-to-have, difficult-to-manage-on-your-own features:

- Kobun automatically manages timestamps in your frontmatter. You no longer have to manage createdAt, updatedAt, and publishedAt fields.
- Kobun also comes with a draft/publish workflow so you don’t have to manually edit a status field
- Drafts auto-save to our database when you’re writing. When you’re done writing, you can do one of these. Exit the editor (Kobun saves your work), save your progress to GitHub, or publish your writing to your site. When you “Save to GitHub” or “Publish”, Kobun deletes that data from the database. 

### Fair but not open?

Yes. I won’t call Kobun open source. Because it’s technically not because the code comes with a restrictive license. So, not open source but fair source, for lack of a better term.

Kobun doesn’t come with a proper open-source license like Apache, MIT, etc. It comes with an FSL-1.1-MIT license. Here's what that means: 

- You’re free to use the hosted version
- Self-host it
- Change the source code to fit your use case, even for commercial purposes

What you can’t do, is provide a competing hosted version. Every version I release, becomes MIT after two years.

There’s also one more restriction on the source code.

You can view, fork, and edit the code. You can request features and submit issues. But I’ve disabled pull requests.

I chose these restrictions for a few reasons:

- I have ideas that I want to build, that could turn Kobun into a paid product down the line. I want to protect my business interests with a restrictive license.
- Today, with AI, producing code is cheap and producing bad code is so easy. I’ve certainly used AI to build some parts of Kobun. I'm not ready to let others add code since I lack the time and energy to review.

## Final Thoughts

I’m excited to finally launch this. Kobun is still in early access and there’s a lot of tweaks to do and bugs to fix. I also have some ideas that will make Kobun a great place to write, for developers. While in early access, you can use Kobun as much as you want. Bring all your existing content into Kobun and see how it feels to write here. Feel free to open bug reports and feature requests on GitHub Issues. 

I’m looking forward to hearing your thoughts on Kobun. Happy writing!
