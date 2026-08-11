import { data } from 'react-router'

import { CurrentProjects } from '~/components/landing/current-projects'
import Hero from '~/components/landing/hero'
import { RecentArticles } from '~/components/landing/recent-articles'
import { profile } from '~/data/portfolio'
import { getCollection, getContent } from '~/lib/content'
import { pageMeta } from '~/lib/site'

import type { Route } from './+types/home'

export function loader() {
	const about = getContent(`singletons/about`)
	if (!about) throw data(null, { status: 404 })
	const articles = getCollection('collections/articles')
	const publishedArticles = articles.filter(
		// @ts-ignore
		(article) => article.frontmatter.status === 'published',
	)
	const recentArticles = publishedArticles.slice(0, 3)
	const projects = getCollection('collections/projects/*/index')
	const currentProjects = projects.filter((project) => project.frontmatter.progress === 'current')
	return {
		currentProjects,
		frontmatter: about.frontmatter,
		recentArticles,
	}
}

export function meta({ location }: Route.MetaArgs) {
	return pageMeta({
		title: `${profile.name} · ${profile.role} building calm, durable software`,
		ogTitle: `${profile.name} · ${profile.role}`,
		description: profile.tagline,
		pathname: location.pathname,
	})
}

export default function Home({ loaderData }: Route.ComponentProps) {
	const { currentProjects, frontmatter, recentArticles } = loaderData

	return (
		<>
			<Hero title={frontmatter.title} />
			<RecentArticles recentArticles={recentArticles} />
			<CurrentProjects currentProjects={currentProjects} />
		</>
	)
}
