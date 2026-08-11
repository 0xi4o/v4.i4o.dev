import { ArrowLeftIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { MdxProvider } from '~/components/mdx-provider'
import { getContent } from '~/lib/content'
import { formatDate, pageMeta } from '~/lib/site'

import type { Route } from './+types/lesson-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug, lesson_slug } = params
	const entry = getContent(`collections/learning/${slug}/index`)
	if (!entry) throw data(null, { status: 404 })
	const lesson = getContent(`collections/learning/${slug}/lessons/${lesson_slug}`)
	return { frontmatter: entry.frontmatter, lesson, lesson_slug, slug }
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
	const { frontmatter: learningFrontmatter, lesson_slug, slug } = loaderData
	const entry = getContent(`collections/learning/${slug}/lessons/${lesson_slug}`)
	if (!entry) return null
	const { Component, frontmatter } = entry
	const createdAt = formatDate(frontmatter.createdAt)

	return (
		<>
			<Link
				to={`/learning/${slug}`}
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				{learningFrontmatter.title}
			</Link>
			<article className='typeset mt-8'>
				<header className='mb-8 flex flex-col gap-2'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' \u00B7 ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					{createdAt && (
						<p className='mt-0 font-mono text-[12px] text-[var(--kami-stone)] uppercase'>
							{createdAt}
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
