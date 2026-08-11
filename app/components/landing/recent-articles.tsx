import { ArrowRightIcon } from 'lucide-react'
import { Link } from 'react-router'

import { ContentRow } from '~/components/content-row'
import type { CollectionEntry } from '~/lib/content'

export function RecentArticles({ recentArticles }: { recentArticles: CollectionEntry[] }) {
	return (
		<section id='blog' className='mb-12'>
			<div className='typeset mb-6 space-y-2'>
				<div className='flex items-center justify-between'>
					<p className='font-mono text-[13px] tracking-[0.4px] uppercase'>
						01 &middot; Writing
					</p>
					<span className='flex items-center gap-3.5'>
						<Link
							to='/articles'
							className='flex items-center gap-2 font-mono text-[12px] font-medium tracking-[1.2px] text-[var(--kami-brand)] uppercase transition-colors hover:text-[var(--kami-brand-light)]'
						>
							All Articles
							<ArrowRightIcon className='size-4' />
						</Link>
					</span>
				</div>
				<h2>
					<Link to='/articles'>Recent Articles</Link>
				</h2>
				<p className='text-muted-foreground mt-0'>
					Notes on durable systems, design tokens, and working calmly — an open notebook I
					keep in public.
				</p>
			</div>
			<ul className='typeset flex list-none flex-col gap-3.5'>
				{recentArticles.map((article) => (
					<ContentRow
						key={article.id}
						date={article.frontmatter.publishedAt}
						title={article.frontmatter.title}
						to={`/articles/${article.slug}`}
					/>
				))}
			</ul>
		</section>
	)
}
