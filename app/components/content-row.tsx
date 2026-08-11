import type { ReactNode } from 'react'
import { Link } from 'react-router'

import { formatDate } from '~/lib/site'

type ContentRowProps = {
	/**
	 * Row label. Any numbering prefix (`${index + 1}. `) belongs to the caller — some listings are
	 * ordered sequences and some aren't, which is a real difference rather than drift.
	 */
	title: string
	/**
	 * Raw ISO date straight from frontmatter — `publishedAt` for articles/series, `createdAt` for
	 * learning lessons and project updates. Deliberately unformatted: see below.
	 *
	 * Doubles as the `<time datetime>` attribute, which is stricter than the display path:
	 * `formatDate` renders anything `new Date()` parses, but `datetime` needs a valid HTML date
	 * string. Every date under `app/content` is `YYYY-MM-DD`; keep it that way and both stay
	 * correct.
	 */
	date?: string
	/**
	 * Destination. Omit for rows with no route (project updates); the layout is the same either
	 * way.
	 */
	to?: string
	/**
	 * Block content rendered beneath the row, inside the same `<li>`. For listings whose entries
	 * have no page of their own — project updates — where the body has nowhere else to go. Omit it
	 * and the `<li>` is exactly the row, which is what every other listing wants.
	 *
	 * Renders as a sibling _after_ the row, never inside the `<Link>`: the link target is the row,
	 * not the prose. Pass `<Content typeset={false}>` — see that prop's note on nesting.
	 */
	children?: ReactNode
}

/**
 * One row of a content listing: title on the left, date on the right, and — for entries with no
 * page of their own — an optional body beneath it. Used by every listing on the site: articles,
 * series, series parts, learning lessons, project updates.
 *
 * Takes the _raw_ date string and calls `formatDate` (`~/lib/site`) itself rather than asking
 * callers to format first. `formatDate` returns `null` for a missing or unparseable value, so the
 * guard below is what keeps a dateless entry from rendering an empty `<time>` — and keeping both
 * the call and the guard in here means a new call site cannot forget either one. That forgetting is
 * exactly how the unguarded `format(new Date(…))` in #7 reached nine sites, only three of which the
 * issue had spotted.
 *
 * Renders its own `<li>`, so callers put `key` there and nowhere else.
 */
export function ContentRow({ title, date, to, children }: ContentRowProps) {
	const formatted = formatDate(date)
	const rowClassName = 'flex items-baseline justify-between gap-4'
	const cells = (
		<>
			<span className='text-base leading-[1.5]'>{title}</span>
			{formatted && (
				<time className='text-sm' dateTime={date}>
					{formatted}
				</time>
			)}
		</>
	)
	return (
		<li className='p-0'>
			{to ? (
				<Link className={rowClassName} to={to}>
					{cells}
				</Link>
			) : (
				<div className={rowClassName}>{cells}</div>
			)}
			{children}
		</li>
	)
}
