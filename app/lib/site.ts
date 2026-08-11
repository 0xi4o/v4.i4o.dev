import { hero, profile } from '~/data/portfolio'
import { getCollection } from '~/lib/content'

/**
 * Canonical site identity. `url` is the production origin with no trailing slash, so `abs()` can
 * concatenate a leading-slash path directly. Reuses `profile`/`hero` as the single source of truth
 * for author/title/description.
 */
export const SITE = {
	url: 'https://i4o.dev',
	title: hero.title,
	description: profile.tagline,
	author: hero.title,
	email: profile.email,
	/** Og:site_name — the brand shown above the title in Discord/Slack/iMessage cards. */
	name: hero.title,
	/** `@handle` for twitter:site / twitter:creator, from the X social entry. */
	twitter: `@${profile.socials.find((s) => s.label === 'X')?.handle ?? '0xi4o'}`,
	/**
	 * Static 1200×630 social card, served from `public/og.png`. Used site-wide for og/twitter
	 * image.
	 */
	image: '/og.png',
}

/** Absolute URL for a site-relative path (which must start with `/`). */
export function abs(path: string): string {
	return `${SITE.url}${path}`
}

/** A React Router v7 meta descriptor (title / named / property / link forms). */
type MetaDescriptor =
	| { title: string }
	| { name: string; content: string }
	| { property: string; content: string }
	| { tagName: 'link'; rel: string; href: string }

/**
 * Full per-page meta for a route's `meta()` export: `<title>`, description, canonical link, and the
 * Open Graph + Twitter tags. The og/twitter image defaults to the shared static card
 * (`SITE.image`); pass `image` (a site-relative path) to override it per page. Invariant tags that
 * never change per page (og:site_name, og:type, twitter:card, twitter:site) live statically in
 * `app/root.tsx`'s `<head>` instead, so nothing here duplicates them.
 */
export function pageMeta({
	title,
	description,
	pathname,
	ogTitle,
	image,
}: {
	title: string
	description?: string
	pathname: string
	ogTitle?: string
	image?: string
}): MetaDescriptor[] {
	const desc = description || SITE.description
	const socialTitle = ogTitle ?? title
	const img = abs(image ?? SITE.image)
	const url = abs(pathname)
	return [
		{ title },
		{ name: 'description', content: desc },
		{ property: 'og:title', content: socialTitle },
		{ property: 'og:description', content: desc },
		{ property: 'og:url', content: url },
		{ property: 'og:image', content: img },
		{ property: 'og:image:width', content: '1200' },
		{ property: 'og:image:height', content: '630' },
		{ name: 'twitter:title', content: socialTitle },
		{ name: 'twitter:description', content: desc },
		{ name: 'twitter:image', content: img },
		{ tagName: 'link', rel: 'canonical', href: url },
	]
}

/** Escape a string for safe inclusion in XML text/attribute content. */
export function escapeXml(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;')
}

/** A single RSS entry: absolute link + display metadata. */
export type FeedItem = {
	url: string
	title: string
	description?: string
	date: string
}

/**
 * Published Articles + Series, newest first, as absolute-URL feed items. Mirrors the published
 * filter that `routes/articles.tsx` and `routes/series.tsx` apply. The trailing sort is not
 * redundant with `getCollection`'s: this merges two separately-sorted collections and has to
 * re-order the combined list.
 */
export function getFeedItems(): FeedItem[] {
	const articles = getCollection('collections/articles')
		.filter((e) => e.frontmatter.status === 'published')
		.map((e) => ({
			url: abs(`/articles/${e.slug}`),
			title: e.frontmatter.title,
			description: e.frontmatter.description,
			date: e.frontmatter.publishedAt ?? e.frontmatter.createdAt ?? '',
		}))

	const series = getCollection('collections/series/*/index')
		.filter((e) => e.frontmatter.status === 'published')
		.map((e) => ({
			url: abs(`/series/${e.slug}`),
			title: e.frontmatter.title,
			description: e.frontmatter.description,
			date: e.frontmatter.publishedAt ?? e.frontmatter.createdAt ?? '',
		}))

	return [...articles, ...series].sort((a, b) => b.date.localeCompare(a.date))
}

/** A single sitemap URL. `lastmod` is a `YYYY-MM-DD` date when known. */
export type SitemapUrl = { loc: string; lastmod?: string }

/**
 * Best-known modification date for a content entry, trimmed to `YYYY-MM-DD`. Deliberately leads
 * with `updatedAt`, unlike `publicationDateOf` in `~/lib/content`, which excludes it: this answers
 * "when did this last change" (sitemap `lastmod`), that one answers "when did this go public"
 * (listing order). Keep the two chains apart.
 */
function lastmodOf(fm: {
	updatedAt?: string
	publishedAt?: string
	createdAt?: string
	launchedAt?: string
}): string | undefined {
	const raw = fm.updatedAt ?? fm.publishedAt ?? fm.createdAt ?? fm.launchedAt
	return raw ? raw.slice(0, 10) : undefined
}

/** Param-less routes that always exist (home + collection landings + singletons). */
const STATIC_ROUTES = ['/', '/articles', '/learning', '/projects', '/series', '/now', '/uses']

/**
 * Every public URL for the sitemap: the static routes plus every content URL. Published-only for
 * articles/series (matching the site's listings); learning and projects include all entries. Kept
 * in sync with the prerender rules in `react-router.config.ts`.
 */
export function getSitemapUrls(): SitemapUrl[] {
	const urls: SitemapUrl[] = STATIC_ROUTES.map((loc) => ({ loc: abs(loc) }))

	for (const e of getCollection('collections/articles')) {
		if (e.frontmatter.status !== 'published') continue
		urls.push({ loc: abs(`/articles/${e.slug}`), lastmod: lastmodOf(e.frontmatter) })
	}

	for (const topic of getCollection('collections/series/*/index')) {
		if (topic.frontmatter.status !== 'published') continue
		urls.push({ loc: abs(`/series/${topic.slug}`), lastmod: lastmodOf(topic.frontmatter) })
		for (const part of getCollection(`collections/series/${topic.slug}/*`)) {
			if (part.slug === 'index' || part.frontmatter.status !== 'published') continue
			urls.push({
				loc: abs(`/series/${topic.slug}/${part.slug}`),
				lastmod: lastmodOf(part.frontmatter),
			})
		}
	}

	for (const topic of getCollection('collections/learning/*/index')) {
		urls.push({ loc: abs(`/learning/${topic.slug}`), lastmod: lastmodOf(topic.frontmatter) })
		for (const lesson of getCollection(`collections/learning/${topic.slug}/lessons`)) {
			urls.push({
				loc: abs(`/learning/${topic.slug}/lessons/${lesson.slug}`),
				lastmod: lastmodOf(lesson.frontmatter),
			})
		}
	}

	for (const e of getCollection('collections/projects/*/index')) {
		urls.push({ loc: abs(`/projects/${e.slug}`), lastmod: lastmodOf(e.frontmatter) })
	}

	return urls
}
