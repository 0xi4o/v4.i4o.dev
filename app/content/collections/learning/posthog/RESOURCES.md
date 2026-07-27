# PostHog Resources

## Knowledge

- [Docs: Getting HogPilled — winning with PostHog](https://posthog.com/docs/new-to-posthog/getting-hogpilled)
  PostHog's own starting path: pick a north star metric, draw the metrics tree beneath it, then decide what to capture. Use for: deciding _what_ to measure before touching code. **Primary source for Lesson 1.**
- [Docs: Events](https://posthog.com/docs/data/events)
  The data model. An event is "the core unit of data in PostHog"; name, distinct ID, timestamp, properties. Use for: any claim about what an event is or contains.
- [Docs: Persons](https://posthog.com/docs/data/persons)
  Distinct IDs, anonymous vs identified events, what `identify` does, person properties. Use for: linking a visitor's pre-signup activity to their account.
- [Docs: Product analytics overview](https://posthog.com/docs/product-analytics)
  Index of every insight type — trends, funnels, paths, stickiness, retention, lifecycle, correlation, group analytics, dashboards. Use for: "which chart answers this question?"
- [Docs: Web analytics, and how it differs from product analytics](https://posthog.com/docs/web-analytics/web-vs-product-analytics)
  The two products compared directly: pre-built dashboard on fixed events vs custom insights on any event. Use for: knowing which half of PostHog to open.
- [Docs: Product analytics best practices](https://posthog.com/docs/product-analytics/best-practices)
  Event naming conventions (snake case, present-tense verbs, `category:object_action`), property naming, and the mistakes that poison a dataset. Use for: writing the tracking plan.
- [Docs: Autocapture](https://posthog.com/docs/product-analytics/autocapture)
  What gets recorded without you asking — clicks, pageviews, form submissions — and what deliberately does not. Use for: knowing where the free data stops.
- [Docs: Activation](https://posthog.com/docs/new-to-posthog/activation)
  Defining the moment a user first gets value, with worked examples (Dropbox, Uber, Pinterest). Use for: choosing the event that actually matters for Kobun.
- [Docs: Funnels](https://posthog.com/docs/product-analytics/funnels)
  Step ordering, conversion calculation, exclusion steps, breakdowns. Use for: building and reading drop-off analysis.
- [Docs: Install PostHog](https://posthog.com/docs/getting-started/install)
  Snippet, SDKs, framework guides, the `npx @posthog/wizard` installer, US vs EU region. Use for: the hands-on setup lesson.
- [Tutorial: Complete guide to event tracking](https://posthog.com/tutorials/event-tracking-guide)
  Long-form walkthrough from zero to a working tracking setup. Use for: a second pass over the same ground in more depth.

## Wisdom (Communities)

- [PostHog forums](https://posthog.com/questions)
  Public Q&A with PostHog staff answering. Use for: "is this the right event design?" — the kind of question docs cannot answer.
- [PostHog community handbook](https://posthog.com/handbook/community)
  PostHog runs its own forum rather than a Discord or Slack — this explains where questions actually go and how they get answered. Use for: knowing which door to knock on. (Note: `posthog.com/slack` is the Slack _integration_, not a community workspace.)
- [Founder's Hub](https://posthog.com/founders)
  Advice from founders in the community, plus PostHog's own path to product-market fit. Use for: the judgement calls analytics can inform but not make — what to measure, when a number means act.

## Gaps

- A strong non-vendor text on analytics as a discipline — choosing metrics, avoiding vanity numbers, statistical literacy for small samples. Every source above is PostHog's own; read them knowing that. Needed before the lessons on interpreting results.
- Independent write-ups of PostHog in production by indie founders (what they regretted instrumenting). Needed before locking Kobun's tracking plan.
