import { ArrowLeftIcon, ConstructionIcon, GlobeIcon, InfoIcon, RocketIcon } from 'lucide-react'
import { data, Link } from 'react-router'

import { Content } from '~/components/content'
import { ContentRow } from '~/components/content-row'
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyMedia } from '~/components/ui/empty'
import { getCollection, getContent } from '~/lib/content'
import { formatDate, pageMeta } from '~/lib/site'

import type { Route } from './+types/project-entry'

export function loader({ params }: Route.LoaderArgs) {
	const { slug } = params
	const entry = getContent(`collections/projects/${slug}/index`)
	if (!entry) throw data(null, { status: 404 })
	const updates = getCollection(`collections/projects/${slug}/updates`)
	return { frontmatter: entry.frontmatter, slug, updates }
}

export function meta({ loaderData, location }: Route.MetaArgs) {
	if (!loaderData) return [{ title: 'Not found' }]
	return pageMeta({
		title: loaderData.frontmatter.title,
		description: loaderData.frontmatter.description,
		pathname: location.pathname,
	})
}

export default function ProjectEntry({ loaderData }: Route.ComponentProps) {
	const { frontmatter, slug, updates } = loaderData
	const createdAt = formatDate(frontmatter.createdAt)
	const launchedAt = formatDate(frontmatter.launchedAt)

	return (
		<>
			<Link
				to='/projects'
				className='text-primary flex items-center gap-2 font-mono text-[12px] font-medium tracking-[0.4px] uppercase'
			>
				<ArrowLeftIcon className='size-4' />
				Projects
			</Link>
			<article className='typeset mt-8'>
				<header className='border-border mb-10 border-b pb-10'>
					{frontmatter.tags && frontmatter.tags.length > 0 && (
						<p className='mb-2 font-mono text-[13px] tracking-[0.4px] uppercase'>
							{frontmatter.tags.join(' \u00B7 ')}
						</p>
					)}
					<h1 className='mt-0'>{frontmatter.title}</h1>
					<Content id={`collections/projects/${slug}/index`} />
					{frontmatter.progress || frontmatter.site || createdAt || launchedAt ? (
						<div className='mt-4.5 flex items-center gap-5'>
							{frontmatter.site && (
								<a
									href={frontmatter.site}
									rel='noopener noreferrer'
									target='_blank'
								>
									<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
										<GlobeIcon className='size-4' />
										{frontmatter.site.replace('https://', '')}
									</span>
								</a>
							)}
							{createdAt && (
								<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
									<ConstructionIcon className='size-4' />
									{createdAt}
								</span>
							)}
							{launchedAt && (
								<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
									<RocketIcon className='size-4' />
									{launchedAt}
								</span>
							)}
							{frontmatter.progress && (
								<span className='flex items-center gap-1.5 font-mono text-[13px] text-[var(--kami-stone)] uppercase'>
									<InfoIcon className='size-4' />
									{frontmatter.progress}
								</span>
							)}
						</div>
					) : null}
				</header>

				<section className='typeset'>
					<h2>Updates</h2>
					{updates && updates.length > 0 ? (
						/*
						 * Updates are a dated stream, not a numbered sequence: unlike the other two ordered
						 * listings, which sort on an ordinal the file itself declares (`lessonNumber` in
						 * `learning-entry`, `order` in `series-entry`), these arrive newest-first from
						 * `getCollection` and nothing re-sorts them here. An `index + 1` prefix would label
						 * the newest one "1." and renumber every older one each time a new update lands, so
						 * titles carry the row alone.
						 *
						 * Bodies render inline because updates have no route of their own — there is no
						 * `projects/:slug/updates/:update` in `app/routes.ts`, so this is the only place the
						 * prose can appear. `typeset={false}` because the ancestors above already style every
						 * descendant; a third `.typeset` would only stack another 1.125x mobile size step on
						 * the two this page already nests.
						 */
						<ul className='flex list-none flex-col gap-8 p-0'>
							{updates.map((update) => (
								<ContentRow
									key={update.id}
									date={update.frontmatter.createdAt}
									title={update.frontmatter.title}
								>
									<Content id={update.id} typeset={false} />
								</ContentRow>
							))}
						</ul>
					) : (
						<Empty className='border-border col-span-3 border'>
							<EmptyHeader>
								<EmptyMedia variant='icon'>
									<ConstructionIcon className='size-4' />
								</EmptyMedia>
								<EmptyTitle>Nothing here yet</EmptyTitle>
								<EmptyDescription>
									When I publish an update, it'll show up here.
								</EmptyDescription>
							</EmptyHeader>
						</Empty>
					)}
				</section>
			</article>
		</>
	)
}
