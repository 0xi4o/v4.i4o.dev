import { existsSync, readdirSync } from 'node:fs'
import { join, relative, sep } from 'node:path'

import type { Config } from '@react-router/dev/config'

const CONTENT_ROOT = 'app/content'

/** Escape a literal string for safe interpolation into a `RegExp` source. */
function escapeRegExp(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Compile a `*`/`**` glob (over slash-separated content ids) to an anchored, capturing regex. `*`
 * matches within one path segment (`[^/]*`); `**` matches across segments (`.*`). Mirrors
 * `globToRegExp` in `app/lib/content.ts` — kept as a local copy because this config runs in Node at
 * build time and can't import the Vite app graph (which relies on `import.meta.glob`).
 */
function globToRegExp(glob: string): RegExp {
	const source = glob
		.split('**')
		.map((part) => part.split('*').map(escapeRegExp).join('([^/]*)'))
		.join('(.*)')
	return new RegExp(`^${source}$`)
}

/**
 * Ordered rules mapping a content id (path under `app/content`, no extension) to its prerendered
 * URL. First matching rule wins, so order is load-bearing: the series-landing rule must stay ahead
 * of the series-parts rule, which would otherwise claim a series' own `index` file and prerender it
 * as a part. Files matching no rule are intentionally NOT prerendered — internal notes
 * (`MISSION`/`NOTES`/`RESOURCES`), reference docs, learning records, and vendored code samples live
 * under content but have no route. Keep these in sync with the dynamic routes in `app/routes.ts`.
 *
 * There is intentionally no rule for project detail pages (`collections/projects/<slug>/index`):
 * there's no `projects/:slug` route (it's commented out in `routes.ts`), so they aren't
 * prerendered. Add a rule here if/when that route is enabled.
 */
const PRERENDER_RULES: {
	glob: string
	url: (caps: string[]) => string
}[] = [
	{
		glob: 'collections/articles/*',
		url: ([s]) => `/articles/${s}`,
	},
	{
		glob: 'collections/learning/*/index',
		url: ([topic]) => `/learning/${topic}`,
	},
	{
		glob: 'collections/learning/*/lessons/*',
		url: ([topic, lesson]) => `/learning/${topic}/lessons/${lesson}`,
	},
	{
		glob: 'collections/projects/*/index',
		url: ([slug]) => `/projects/${slug}`,
	},
	{
		glob: 'collections/series/*/index',
		url: ([slug]) => `/series/${slug}`,
	},
	{
		glob: 'collections/series/*/*',
		url: ([slug, part]) => `/series/${slug}/${part}`,
	},
]
const COMPILED_RULES = PRERENDER_RULES.map((rule) => ({
	re: globToRegExp(rule.glob),
	url: rule.url,
}))

/** Static, param-less routes (home + collection landing pages + singletons). */
const STATIC_ROUTES = [
	'/',
	'/articles',
	'/learning',
	'/projects',
	'/series',
	'/now',
	'/uses',
	'/rss.xml',
	'/sitemap.xml',
]

/**
 * Walk `app/content` once and turn every `.md`/`.mdx` file whose id matches a prerender rule into
 * its URL. Runs in Node at build time — it reads the filesystem directly rather than using
 * `import.meta.glob` (that only exists in the Vite app graph). Runtime code in the Worker never
 * touches the filesystem; that path uses `import.meta.glob` instead (see `app/lib/content.ts`).
 */
function contentUrls(): string[] {
	if (!existsSync(CONTENT_ROOT)) return []
	const urls = new Set<string>()
	const walk = (dir: string) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const full = join(dir, entry.name)
			if (entry.isDirectory()) {
				walk(full)
				continue
			}
			if (!/\.mdx?$/.test(entry.name)) continue
			const id = relative(CONTENT_ROOT, full)
				.replace(/\.mdx?$/, '')
				.split(sep)
				.join('/')
			for (const { re, url } of COMPILED_RULES) {
				const match = re.exec(id)
				if (!match) continue
				urls.add(url(match.slice(1)))
				break
			}
		}
	}
	walk(CONTENT_ROOT)
	return [...urls]
}

export default {
	// Server-side render by default, to enable SPA mode set this to `false`
	ssr: true,
	// Prerender static + content routes to HTML at build time. The Cloudflare plugin serves these as
	// static assets and only invokes the Worker for genuinely dynamic routes. Content is read at
	// build time, never at runtime.
	async prerender() {
		return [...STATIC_ROUTES, ...contentUrls()]
	},
} satisfies Config
