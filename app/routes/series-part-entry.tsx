import { ArrowLeftIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { MdxProvider } from '~/components/mdx-provider'
import { profile } from '~/data/portfolio'
import { getContent } from '~/lib/content'
import { formatDate, pageMeta } from '~/lib/site'

import type { Route } from './+types/series-part-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug, part } = params
	const series = getContent(`collections/series/${slug}/index`)
	if (!series) throw data(null, { status: 404 })
	const entry = getContent(`collections/series/${slug}/${part}`)
	if (!entry) throw data(null, { status: 404 })
	return {
		series: series.frontmatter,
		frontmatter: entry.frontmatter,
		slug,
		part,
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

export default function SeriesPartEntry({ loaderData }: Route.ComponentProps) {
	const { series, slug, part } = loaderData
	const entry = getContent(`collections/series/${slug}/${part}`)
	if (!entry) return null
	const { Component, frontmatter } = entry
	const publishedAt = formatDate(frontmatter.publishedAt)

	return (
		<>
			<Link
				to={`/series/${slug}`}
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				{series.title}
			</Link>
			<article className='typeset mt-8'>
				<header className='mb-8 flex flex-col gap-2'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' · ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					{publishedAt && (
						<p className='mt-0 font-mono text-[12px] text-[var(--kami-stone)] uppercase'>
							{publishedAt}
						</p>
					)}
				</header>
				<MdxProvider>
					<Component />
				</MdxProvider>
			</article>
		</>
	)
}
