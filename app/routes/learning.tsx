import { format } from 'date-fns'
import { BookOpenIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { Badge } from '~/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/learning'

export function meta({ loaderData, location }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return pageMeta({
		title: `${loaderData.frontmatter.title} — ${profile.name}`,
		description: loaderData.frontmatter.description,
		pathname: location.pathname,
		ogTitle: loaderData.frontmatter.title,
	})
}

export function loader() {
	const entry = getContent('singletons/learning')
	if (!entry) throw data(null, { status: 404 })
	const topics = getCollection('collections/learning/*/index')
	const currentTopics = topics.filter((topic) => topic.frontmatter.progress === 'current')
	const pastTopics = topics.filter((topic) => topic.frontmatter.progress === 'completed')
	return {
		frontmatter: entry.frontmatter,
		currentTopics,
		pastTopics,
	}
}

export default function Learning({ loaderData }: Route.ComponentProps) {
	const { frontmatter, currentTopics, pastTopics } = loaderData
	return (
		<article className='typeset flex flex-col gap-10'>
			<header>
				<h1>{frontmatter.title}</h1>
				<Content id='singletons/learning' className='border-border border-b pb-10' />
			</header>

			<section className='typeset'>
				<h2>Currently Learning</h2>

				<ul className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px] p-0'>
					{currentTopics && currentTopics.length > 0 ? (
						<>
							{currentTopics.map(({ slug, frontmatter }) => (
								<li key={slug} className='flex p-0'>
									<Link to={`/learning/${slug}`} className='flex flex-1'>
										<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
											<CardHeader>
												<CardTitle className='text-[15px] font-medium'>
													{frontmatter.title}
												</CardTitle>
												{
													// @ts-ignore
													frontmatter.createdAt && (
														<CardDescription className='text-[12px]'>
															{format(
																// @ts-ignore
																new Date(frontmatter.createdAt),
																'MMMM dd, yyyy',
															)}
														</CardDescription>
													)
												}
											</CardHeader>
											<CardContent className='flex flex-1 flex-col gap-4'>
												<Content
													id={`collections/learning/${slug}/index`}
													className='text-muted-foreground text-[12px] leading-[1.4]'
												/>
												<div className='mt-auto flex flex-wrap gap-1.5'>
													{frontmatter.tags?.map((tag) => (
														<Badge key={tag} variant='secondary'>
															{tag}
														</Badge>
													))}
												</div>
											</CardContent>
										</Card>
									</Link>
								</li>
							))}
						</>
					) : (
						<Empty className='border-border col-span-3 border'>
							<EmptyHeader>
								<EmptyMedia variant='icon'>
									<BookOpenIcon className='size-4' />
								</EmptyMedia>
								<EmptyTitle>Nothing here yet</EmptyTitle>
								<EmptyDescription>
									Once I publish notes on the things I'm learning, they'll show up
									here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</ul>
			</section>

			{pastTopics && pastTopics.length > 0 && (
				<section className='typeset'>
					<h2>Past Learnings</h2>

					<ul className='grid grid-cols-[repeat(auto-fill,minmax(240px,1fr))] gap-[18px] p-0'>
						{pastTopics.map(({ slug, frontmatter }) => (
							<li key={slug} className='flex p-0'>
								<Link to={`/learning/${slug}`} className='flex flex-1'>
									<Card className='border-border flex-1 rounded-lg border ring-0 transition-shadow hover:shadow-[0_4px_24px_rgba(0,0,0,0.05)]'>
										<CardHeader>
											<CardTitle className='text-[15px] font-medium'>
												{frontmatter.title}
											</CardTitle>
											{
												// @ts-ignore
												frontmatter.createdAt && (
													<CardDescription className='text-[12px]'>
														{format(
															// @ts-ignore
															new Date(frontmatter.createdAt),
															'MMMM dd, yyyy',
														)}
													</CardDescription>
												)
											}
										</CardHeader>
										<CardContent className='flex flex-1 flex-col gap-4'>
											<Content
												id={`collections/learning/${slug}/index`}
												className='text-muted-foreground text-[12px] leading-[1.4]'
											/>
											<div className='mt-auto flex flex-wrap gap-1.5'>
												{frontmatter.tags?.map((tag) => (
													<Badge key={tag} variant='secondary'>
														{tag}
													</Badge>
												))}
											</div>
										</CardContent>
									</Card>
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</article>
	)
}
