---
title: Introducing Kobun
slug: introducing-kobun
description: ""
tags: []
status: draft
createdAt: 2026-10-01T07:59:13.653Z
updatedAt: 2026-10-01T07:59:13.653Z
publishedAt: ""
---
I write, somewhat infrequently I admit, on my blog. But whenever I do, I always jump through a few hoops to get my posts published. Here are a few issues I face every time I want to write and publish an article:

- I hate writing in my code editor. I want a proper writing experience that gets out of my way.
- I don’t want to write in markdown. I want to write in a rich-text editor but want my writing to be saved as markdown so I can render it on my blog.
- I want my workflow to be as smooth as possible - from drafts to published work, I want the process to be easy.
- When I publish, I want my site to automatically pick up those changes.
- I want to keep all of the files as markdown in a git repository that I own. I want to own all of my writing.
- I want to have some rich elements in it - images, videos, syntax highlighting, interactive components - all with a great writing experience and works across all sorts of frameworks and static site generators.
- I want to enjoy this whole process, I want little to no friction so I can write more and publish more.

I’ve tried various content management systems (CMS) over the years. I’ve never found a suitable one that works the way I want to. I always ran into some friction somewhere. Having built a writing app before, I decided to build another one for developers like myself who are running blogs and content sites from their Github repositories. 

## Introducing Kobun

Say hello to Kobun - a git-based CMS for developers with a great writing experience. Git-based CMSes are nothing new. There are already a few options on the market. Some are quite good too. 

I’ve always felt that the editing and workflow experience from the tools that I tried, to be lacking. I figured I’d build a better solution. A free, fair-source licensed, CMS that you can self-host for your own use, even for commercial purposes.

The highlight of Kobun will be it’s editor. I have built writing apps in the past and I brought that experience to build this new editor. I rebuilt it from scratch and put a lot of work in it to create a simple but pleasant writing experience. I’ve always felt that a lot of apps do too much in the writing part. Since Kobun is git-based, everything you write in Kobun will be saved to your Github repository. If you already have your content in a Github repo, Kobun can detect that after you’ve created a `.kobun.json` config file. 

In addition to a nice writing experience, Kobun also brings a few nice-to-have, difficult-to-manage-on-your-own features:

- Kobun automatically manages timestamps in your frontmatter - createdAt, updatedAt, publishedAt fields come for free
- Kobun also comes with a draft/publish workflow so you don’t have to manually edit a status field
- Drafts auto-save to our database when you’re writing. When you’re done for the session, you can either: exit the editor knowing that we’ve saved your work, save your progress to Github, or publish your writing to your site. If you already have CI/CD set up for your site, then that’s all you have to do to get your writing to your readers.

### Fair but not open?

Yes. I won’t call Kobun open source. Because if I do, there are people who will argue that it’s not. So, not open source but fair source, for lack of a better term. 

Kobun doesn’t come with a proper open-source license like Apache, MIT, etc. It comes with a FSL-1.1-MIT license. What that means is that you’re free to use the hosted version, self-host it, modify the source code to fit your use case, even for commercial purposes. What you can’t do, is provide a competing hosted version. Every version I release, becomes MIT after two years.

There’s also one more restriction on the source code.

You can view, fork, and edit the code on Github. You can request features and submit issues. But I’ve disabled pull requests.

I chose these restrictions for a few reasons:

- I have ideas that I want to build, that could turn Kobun into a paid product down the line. I want to protect my business interests with a restrictive license.
- In this day and age, with AI, producing code is cheap and producing bad code is so easy. I’ve certainly used AI to build some parts of Kobun. Some of that code, I didn’t read with a fine-toothed comb. Yet. I’m a cautiously optimistic AI user. I use it everyday but sometimes I find its output sub-par. But I think I have a pretty good workflow where I can get pretty good output from AI agents. Allowing outside pull requests means I have to put in additional effort to detect slop.
- 

Eve

