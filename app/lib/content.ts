import type { ComponentType } from 'react'

/**
 * Frontmatter contract shared by every content file. `remark-mdx-frontmatter` exposes a file's YAML
 * frontmatter as its `frontmatter` named export at build time; this type is the JSON shape loaders
 * return for listings and `meta()`. Singletons may omit frontmatter entirely.
 */
export type Frontmatter = {
	title: string
	/**
	 * URL slug, pinned explicitly so the CMS round-trips it instead of deriving it from the title.
	 * Distinct from `CollectionEntry.slug`, which is derived from the file path; for articles the
	 * two are equal by construction and routing keeps using the derived one.
	 */
	slug?: string
	description?: string
	tags?: string[]
	/** ISO date string, e.g. `2026-07-17`. Used for sorting collections. */
	date?: string
	/** Learning-topic progress. `current` = actively learning, `completed` = wrapped up. */
	progress?: 'current' | 'completed'
	/** Publication state for articles/series. Only `published` entries are listed/fed. */
	status?: 'draft' | 'published'
	/**
	 * ISO dates used across collections (articles/series use `publishedAt`; learning uses
	 * `createdAt`).
	 */
	createdAt?: string
	publishedAt?: string
	updatedAt?: string
	/** Projects use `launchedAt` as their ship date. */
	launchedAt?: string
	/** Series-part ordering within a series. */
	order?: number
	/** Series grouping id. */
	series_id?: string
	/** Project links. */
	site?: string
	github?: string
}

/** A compiled content module: the rendered component + its frontmatter. */
export type ContentModule = {
	default: ComponentType
	frontmatter: Frontmatter
}

/** Listing item — frontmatter only, safe to return from a loader as JSON. */
export type CollectionEntry = {
	/** Full id (path under `app/content`, no extension), e.g. `learning/golang`. */
	id: string
	/** Id relative to the collection dir, e.g. `golang` (or `2026/hello` when nested). */
	slug: string
	frontmatter: Frontmatter
}

/** A resolved entry including the compiled component (NOT loader-serializable). */
export type ContentEntry = {
	id: string
	frontmatter: Frontmatter
	Component: ComponentType
}

/*
 * Build-time globs. Vite inlines these at build time, so at runtime the Worker only holds JS
 * modules — it never reads the filesystem. `frontmatters` pulls only the frontmatter export (cheap,
 * for listings); `modules` holds the full compiled components (for rendering a single entry). The
 * pattern is intentionally deep (`**`) so any folder structure the CMS produces is picked up.
 */
const frontmatters = import.meta.glob<Frontmatter>('/app/content/**/*.{md,mdx}', {
	eager: true,
	import: 'frontmatter',
})
const modules = import.meta.glob<ContentModule>('/app/content/**/*.{md,mdx}', {
	eager: true,
})

/** `/app/content/pages/about.md` → `pages/about` (path under content root, no extension). */
function idFromPath(path: string): string {
	return path.replace(/^\/app\/content\//, '').replace(/\.mdx?$/, '')
}

/** Escape a literal string for safe interpolation into a `RegExp` source. */
function escapeRegExp(s: string): string {
	return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

/**
 * Compile a `*`/`**` glob (over slash-separated content ids) to an anchored regex that captures
 * each wildcard's match. `*` matches within one path segment (`[^/]*`); `**` matches across
 * segments (`.*`). e.g. `collections/learning/**` + `/index` →
 * `^collections/learning/(.*)/index$`.
 */
function globToRegExp(glob: string): RegExp {
	const source = glob
		.split('**')
		.map((part) => part.split('*').map(escapeRegExp).join('([^/]*)'))
		.join('(.*)')
	return new RegExp(`^${source}$`)
}

/**
 * Resolve a single content file by id (its path under `app/content`, without extension) to its
 * frontmatter and compiled component. Prefers `.mdx` over `.md` when both exist. Returns `null`
 * when the id does not exist. Cheap object lookup, safe to call in both loaders and components.
 *
 * Use for singletons (`getContent('pages/about')`) and inside collection routes
 * (`getContent(`learning/${slug}`)`).
 */
export function getContent(id: string): ContentEntry | null {
	const mod = modules[`/app/content/${id}.mdx`] ?? modules[`/app/content/${id}.md`]
	if (!mod) return null
	return { id, frontmatter: mod.frontmatter, Component: mod.default }
}

/**
 * All entries matching a collection selector, newest first. The selector is either a plain
 * directory (`getCollection('collections/articles')` → every file beneath it, nested included) or a
 * glob with `*`/`**` wildcards — e.g. a selector of `collections/learning` followed by a
 * single-star segment and `index` picks each topic's `index`. For a glob, the `slug` is the text
 * the wildcards matched (`golang`); for a plain dir it's the id relative to the dir (`hello-2024`,
 * or `2026/hello` when nested). Returns frontmatter only, so it's safe to return from a loader.
 */
export function getCollection(selector: string): CollectionEntry[] {
	const matcher = selector.includes('*') ? globToRegExp(selector) : null
	const prefix = `${selector}/`
	const entries: CollectionEntry[] = []
	for (const [path, frontmatter] of Object.entries(frontmatters)) {
		if (!frontmatter) continue
		const id = idFromPath(path)
		if (matcher) {
			const m = matcher.exec(id)
			if (m) entries.push({ id, slug: m.slice(1).filter(Boolean).join('/'), frontmatter })
		} else if (id.startsWith(prefix)) {
			entries.push({ id, slug: id.slice(prefix.length), frontmatter })
		}
	}
	return entries.sort((a, b) => {
		const byDate = (b.frontmatter.date ?? '').localeCompare(a.frontmatter.date ?? '')
		if (byDate !== 0) return byDate
		return (a.frontmatter.title ?? '').localeCompare(b.frontmatter.title ?? '')
	})
}
