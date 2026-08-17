import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router'

import { SITE } from '~/lib/site'

import type { Route } from './+types/root'

import './app.css'

export const links: Route.LinksFunction = () => []

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				{/* Invariant social tags. Per-page og and twitter values come from each route's
				    meta() via <Meta /> below (see pageMeta in ~/lib/site). */}
				<meta property='og:site_name' content={SITE.name} />
				<meta property='og:type' content='website' />
				<meta property='og:locale' content='en_US' />
				<meta name='twitter:card' content='summary_large_image' />
				<meta name='twitter:site' content={SITE.twitter} />
				<meta name='twitter:creator' content={SITE.twitter} />
				<link
					rel='alternate'
					type='application/rss+xml'
					title='Ilango Rajagopal'
					href='/rss.xml'
				/>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<script
					defer
					src='https://x.i4o.dev/script.js'
					data-website-id='6fe2c807-c6e2-4ddb-bac8-ba5a8c8049ef'
				/>
			</body>
		</html>
	)
}

export default function App() {
	return <Outlet />
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Oops!'
	let details = 'An unexpected error occurred.'
	let stack: string | undefined

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error'
		details =
			error.status === 404
				? 'The requested page could not be found.'
				: error.statusText || details
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message
		stack = error.stack
	}

	return (
		<main className='container mx-auto p-4 pt-16'>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack && (
				<pre className='w-full overflow-x-auto p-4'>
					<code>{stack}</code>
				</pre>
			)}
		</main>
	)
}
