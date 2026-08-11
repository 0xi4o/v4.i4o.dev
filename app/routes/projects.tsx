import { BookOpenIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/projects'

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
	const entry = getContent('singletons/projects')
	if (!entry) throw data(null, { status: 404 })
	const projects = getCollection('collections/projects/*/index')
	const currentProjects = projects.filter((project) => project.frontmatter.progress === 'current')
	const pastProjects = projects.filter((project) => project.frontmatter.progress === 'completed')
	return {
		frontmatter: entry.frontmatter,
		currentProjects,
		pastProjects,
	}
}

export default function Learning({ loaderData }: Route.ComponentProps) {
	const { frontmatter, currentProjects, pastProjects } = loaderData
	return (
		<article className='typeset flex flex-col gap-10'>
			<header>
				<h1>{frontmatter.title}</h1>
				<Content id='singletons/projects' className='border-border border-b pb-10' />
			</header>

			<section className='typeset'>
				<h2>Current Projects</h2>

				<ul className='flex list-none flex-col gap-3.5 p-0'>
					{currentProjects && currentProjects.length > 0 ? (
						<>
							{currentProjects.map(({ slug, frontmatter }) => (
								<li
									// @ts-ignore
									key={slug}
									className='p-0'
								>
									<Link
										className='flex items-center justify-between'
										// @ts-ignore
										to={`/projects/${slug}`}
									>
										<span className='text-primary text-base leading-[1.5] font-medium'>
											{
												// @ts-ignore
												frontmatter.title
											}
											<Content
												// @ts-ignore
												id={`collections/projects/${slug}/index`}
												className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'
											/>
										</span>
										{
											// @ts-ignore
											frontmatter.tags &&
												// @ts-ignore
												frontmatter.tags.length > 0 && (
													<p className='text-secondary-foreground text-sm leading-[1.55] capitalize'>
														{
															// @ts-ignore
															frontmatter.tags.join(' \u00B7 ')
														}
													</p>
												)
										}
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
									Once I publish notes on the things I'm building, they'll show up
									here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</ul>
			</section>

			{pastProjects && pastProjects.length > 0 && (
				<section className='typeset'>
					<h2>Past Projects</h2>

					<ul className='flex list-none flex-col gap-3.5 p-0'>
						{pastProjects.map(({ slug, frontmatter }) => (
							<li
								// @ts-ignore
								key={slug}
								className='p-0'
							>
								<Link
									className='flex items-center justify-between'
									// @ts-ignore
									to={`/projects/${slug}`}
								>
									<span className='text-primary text-base leading-[1.5] font-medium'>
										{
											// @ts-ignore
											frontmatter.title
										}
										<Content
											// @ts-ignore
											id={`collections/projects/${slug}/index`}
											className='text-muted-foreground mt-1 block text-[13px] leading-[1.4] font-normal italic'
										/>
									</span>
									{
										// @ts-ignore
										frontmatter.tags &&
											// @ts-ignore
											frontmatter.tags.length > 0 && (
												<p className='text-secondary-foreground text-sm leading-[1.55] capitalize'>
													{
														// @ts-ignore
														frontmatter.tags.join(' \u00B7 ')
													}
												</p>
											)
									}
								</Link>
							</li>
						))}
					</ul>
				</section>
			)}
		</article>
	)
}
