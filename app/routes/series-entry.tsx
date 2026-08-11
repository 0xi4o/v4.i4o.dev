import { ArrowLeftIcon, ListIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { ContentRow } from '~/components/content-row'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/series-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug } = params
	const entry = getContent(`collections/series/${slug}/index`)
	if (!entry) throw data(null, { status: 404 })
	const entries = getCollection(`collections/series/${slug}/*`)
		.filter((entry) => entry.slug !== 'index')
		.filter(
			// @ts-ignore
			(entry) => entry.frontmatter.status === 'published',
		)
	const publishedEntriesSorted = entries.sort(
		// @ts-ignore
		(a, b) => (a.frontmatter.order ?? 0) - (b.frontmatter.order ?? 0),
	)
	return {
		frontmatter: entry.frontmatter,
		entries: publishedEntriesSorted,
		slug,
	}
}

export function meta({ loaderData, location }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return pageMeta({
		title: `${loaderData.frontmatter.title} — ${profile.name}`,
		description: loaderData.frontmatter.description,
		pathname: location.pathname,
		ogTitle: loaderData.frontmatter.title,
	})
}

export default function SeriesEntry({ loaderData }: Route.ComponentProps) {
	const { frontmatter, entries, slug } = loaderData

	return (
		<>
			<Link
				to='/series'
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				Series
			</Link>
			<article className='typeset mt-8'>
				<h1>{frontmatter.title}</h1>
				<Content
					id={`collections/series/${slug}/index`}
					className='border-border mb-10 border-b pb-10'
				/>
				{entries && entries.length > 0 ? (
					<ul className='flex list-none flex-col gap-3.5 p-0'>
						{entries.map((entry, index) => (
							<ContentRow
								key={entry.id}
								date={entry.frontmatter.publishedAt}
								title={`${index + 1}. ${entry.frontmatter.title}`}
								to={`/series/${slug}/${entry.slug}`}
							/>
						))}
					</ul>
				) : (
					<Empty className='border-border col-span-3 border'>
						<EmptyHeader>
							<EmptyMedia variant='icon'>
								<ListIcon className='size-4' />
							</EmptyMedia>
							<EmptyTitle>Nothing here yet</EmptyTitle>
							<EmptyDescription>
								When I publish an entry, it'll show up here.
							</EmptyDescription>
						</EmptyHeader>
					</Empty>
				)}
			</article>
		</>
	)
}
