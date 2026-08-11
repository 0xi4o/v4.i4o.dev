import { ListIcon } from 'lucide-react'
import { data } from 'react-router'

import { Content } from '~/components/content'
import { ContentRow } from '~/components/content-row'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/series'

export function loader() {
	const entry = getContent('singletons/series')
	if (!entry) throw data(null, { status: 404 })
	const series = getCollection('collections/series/*/index')
	const publishedSeries = series.filter(
		// @ts-ignore
		(series) => series.frontmatter.status === 'published',
	)
	return { frontmatter: entry.frontmatter, series: publishedSeries }
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

export default function Series({ loaderData }: Route.ComponentProps) {
	const { frontmatter, series } = loaderData

	return (
		<article className='typeset'>
			<h1>{frontmatter.title}</h1>
			<Content id='singletons/series' className='border-border mb-10 border-b pb-10' />
			{series && series.length > 0 ? (
				<ul className='flex list-none flex-col gap-3.5 p-0'>
					{series.map((item) => (
						<ContentRow
							key={item.id}
							date={item.frontmatter.publishedAt}
							title={item.frontmatter.title}
							to={`/series/${item.slug}`}
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
							When I publish a series, it'll show up here.
						</EmptyDescription>
					</EmptyHeader>
				</Empty>
			)}
		</article>
	)
}
