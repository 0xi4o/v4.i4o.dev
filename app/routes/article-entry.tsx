import { ArrowLeftIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { MdxProvider } from '~/components/mdx-provider'
import { getContent } from '~/lib/content'
import { formatDate, pageMeta } from '~/lib/site'

import type { Route } from './+types/article-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug } = params
	const entry = getContent(`collections/articles/${slug}`)
	if (!entry) throw data(null, { status: 404 })
	return { slug, frontmatter: entry.frontmatter }
}

export function meta({ loaderData, location }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return pageMeta({
		title: loaderData.frontmatter.title,
		description: loaderData.frontmatter.description,
		pathname: location.pathname,
	})
}

export default function LearningEntry({ loaderData }: Route.ComponentProps) {
	const entry = getContent(`collections/articles/${loaderData.slug}`)
	if (!entry) return null
	const { Component, frontmatter } = entry
	const publishedAt = formatDate(frontmatter.publishedAt)

	return (
		<>
			<Link
				to='/articles'
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				Articles
			</Link>
			<article className='typeset mt-8'>
				<header className='mb-8 flex flex-col gap-2'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' \u00B7 ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					{publishedAt && (
						<p className='mt-0 font-mono text-[12px] text-[var(--kami-stone)] uppercase'>
							{publishedAt}
							{/* &middot; 6 min read */}
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
