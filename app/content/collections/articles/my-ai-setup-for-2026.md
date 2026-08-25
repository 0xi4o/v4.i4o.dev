---
title: My AI Setup for 2026
slug: my-ai-setup-for-2026
description: >-
  In this article, I talk about my current AI setup for 2026, how I think about
  AI use, and what I'm excited to learn.
tags:
  - journal
  - learning
  - productivity
  - workflow
status: published
createdAt: '2026-08-19'
updatedAt: '2026-08-25'
publishedAt: '2026-08-25'
---
AI has become so ubiquitous in 2026 that my dad has started talking to me about it. My mom spends a lot of time playing with image generation on ChatGPT. 

So naturally, as a software engineer, I have evolved my AI adoption from only chatting on a web interface to my current setup. But I’m not at an advanced level of adoption like some people are. I don’t have dedicated Mac Mini(s) running OpenClaw or Hermes 24/7 that I interact with via Telegram or WhatsApp. Neither do I use an orchestrator agent managing a ton of subagents doing different tasks. I’m squarely in the middle of the [different levels of AI adoption](https://every.to/guides/the-eight-levels-of-ai-adoption). 

My day job is at Workday, where we’re creating an agent builder platform. So I’m deep into the AI world but when it comes to personal AI adoption, I don’t follow the hype. I’m careful in how I adopt tools and workflows. You might even find my setup lacking and my workflow simpler than what a lot of people are doing with AI. I’m fine with that. It’s good to be skeptical about hype. Local models are getting better but they’re nowhere near cloud-based models in their capabilities, at least for everyday tasks. So anything I do with AI goes to the cloud, gets saved on a server somewhere, and is used to train next generation models. So I am evaluating tools and workflows that fit my requirements after carefully consideration about the models, platform, etc.

## My Setup

Like I mentioned earlier, I don’t have a dedicated machine running agents 24/7 in auto mode. So where I run AI is still very much where I work as well.

I’ve never used Windows for coding (because it sucks), so I’m used to running things in a Unix environment. This is important because, AI is really good at bash and other Unix tools. You’ll often find AI running `grep`, `find`, and `sed` commands if you’re using Claude Code or other terminal-based agents. Unless you’re running WSL2, this is not possible in Windows. I’ve never tried to run agents in Windows so I’m not sure how good (or bad) it is in Powershell.

Most of my work and where I run AI, as a result, happens in a Macbook. I have an M5 Macbook Pro that is plenty fast to run multiple agents in parallel.

### Harnesses for Agentic Coding

First let’s talk about the agent harnesses. I’ve tried a few popular ones - Claude Code, Amp, OpenCode, and Crush. Nowadays, I do most of my agentic coding in Claude Code. I’m on the Claude Max plan and I get a ton of usage. I haven’t seen a “You’ve reached the limits, wait for a few hours” message in ages. I can work without interruptions and don’t have to wait for my limits to reset. I also occasionally use Amp and OpenCode.

### Skills

I have a bunch of skills built by others that I use on a regular basis. Here are some of them:

1. [Matt Pocock’s Engineering Skills](https://github.com/mattpocock/skills)
2. [Impeccable Design Skills](https://impeccable.style/)
3. [Corey Haines’ Marketing Skills](https://github.com/coreyhaines31/marketingskills)

I want to draw special attention to Matt’s `teach` skill because I’ve been using it a ton to learn things. In fact, I forked his skills repo and created a new skill on top of his `teach` skill. Here’s what my changes do:

1. Generate lessons, references, and glossary in MDX instead of HTML.
2. Avoid generating scaffolding, layouts, or styles for lessons and instead let a renderer that I control to render lessons. This lets me set up my own personal learning platform where I can organize and view all the topics I’m learning. I’ll write a detailed article on this later, including my skill and the renderer I’ve set up.

Other skills I use frequently are the `grill-me` and `grill-me-with-docs` skills to brainstorm and plan a feature, `to-spec` and `to-ticket` to turn the plan into a spec and create tickets, and then `implement` to implement a ticket. There are many other skills in Matt’s skills repo that I want to try and evaluate for my workflow.

I’m still not writing my own skills yet. This is another area where I want to go deeper and write my own skills to solve my problems.

### Other AI Use-Cases

I used to use Perplexity heavily because it’s search, deep research, and labs modes were great. It was mainly because I got a year of Perplexity Pro for free. While I was evaluating if I should subscribe, I found that Claude was plenty enough for my work. I was on Claude Pro already and I decided to upgrade to Claude Max instead.

I use Claude Chat for looking stuff up. Recently, I’ve been spending a lot of time in Claude Cowork. A lot of my work, I’ve realized, happens locally on my machine. So it makes sense to let Claude work with me on what I’m already working on. I’ve also been changing some of my workflows to fit into this new way so Claude Cowork can take things off my plate. I’ve got a lot more to explore and adapt. Some of the things I’m currently using Claude Cowork for are: personal finance, brainstorming on project ideas, and learning new things.

### Tools and Software

This is a list of tools and software that I use to enhance my AI set up, in no particular order:

1. [Wispr Flow](https://wisprflow.ai/) for dictation and transcription. This is a game-changer, especially when you’re giving an agent a long prompt. It’s much faster to talk than to type. There are plenty of AI dictation tools but I like Wispr Flow so far. It’s not perfect, especially with my Indian accent, but it works most of the time. If you want an open-source, local option, try [Handy](https://handy.computer/). Wispr Flow is a cloud-based service so your voice and transcriptions live on servers somewhere. If you do not want that, go with Handy. It keeps everything local and uses a local model.
2. [Codeburn](https://codeburn.app/) for recording and analyzing my token usage across all of my agentic tools. It sits in my MacOS menubar and shows how much tokens I use everyday.
3. [Epic Statusline for Claude Code](https://github.com/dsebastien/claude-epic-status-line) for displaying extra information about token usage, usage refresh times, and model, context, and workspace info.
4. Good ol’ Tmux for managing sessions. I haven’t tried any of the agentic workspace and session manager tools like Herdr, etc. I was already using tmux before AI so I’ll continue using it. I do love using [smug](https://github.com/ivaaaan/smug) for generating tmux sessions, windows, and panes. I have a smug config for each of my projects so all I have to do is run `smug start`.

### Things I want to try or get better at

1. Writing my own skills for things I do often.
2. Create automations in Claude Cowork.
3. Explore more tools like Graphify, OpenWork, N8N, OpenClaw, etc.
4. Build my own custom agents in Go for different purposes.

---

So that’s my AI set up for 2026. It might look bare bones but I like it this way. It’s simpler to manage. My setup will continue to evolve as I evaluate new tools and adopt new workflows. But I will do it slowly, carefully, and with intention. There’s some stuff I’ve left out here for brevity. I want to write more on this topic, so I will turn this into a series soon.
