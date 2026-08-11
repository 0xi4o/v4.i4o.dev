import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { formatDate, pageMeta } from '~/lib/site'

import type { Route } from './+types/articles'

export function loader() {
	const entry = getContent('singletons/articles')
	if (!entry) throw data(null, { status: 404 })
	const articles = getCollection('collections/articles')
	const publishedArticles = articles.filter(
		// @ts-ignore
		(article) => article.frontmatter.status === 'published',
	)
	return { articles: publishedArticles, frontmatter: entry.frontmatter }
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

export default function Articles({ loaderData }: Route.ComponentProps) {
	const { articles, frontmatter } = loaderData

	return (
		<article className='typeset'>
			<h1>{frontmatter.title}</h1>
			<Content id='singletons/articles' className='border-border mb-10 border-b pb-10' />
			<ul className='flex list-none flex-col gap-3.5 p-0'>
				{articles.map((article) => {
					const publishedAt = formatDate(article.frontmatter.publishedAt)
					return (
						<li className='p-0' key={article.id}>
							<Link
								className='flex items-baseline justify-between gap-4'
								key={article.id}
								to={`/articles/${article.slug}`}
							>
								<span className='text-base leading-[1.5]'>
									{article.frontmatter.title}
								</span>
								{publishedAt && <time className='text-sm'>{publishedAt}</time>}
							</Link>
						</li>
					)
				})}
			</ul>
		</article>
	)
}
