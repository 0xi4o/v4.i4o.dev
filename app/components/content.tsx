import { MdxProvider } from '~/components/mdx-provider'
import { getContent } from '~/lib/content'
import { cn } from '~/lib/utils'

type ContentProps = {
	/** Content id — the file's path under `app/content`, without extension (e.g. `pages/about`). */
	id: string
	/**
	 * Wrap in the `.typeset` prose styles. Defaults to `true`. Disable for tight inline snippets,
	 * and whenever a `.typeset` ancestor is already in play: the class styles every descendant, so
	 * nesting it adds nothing but another 1.125x mobile size step (`app/typeset.css`).
	 */
	typeset?: boolean
	className?: string
}

/**
 * Render a Markdown/MDX file inline anywhere — inside a route or a component. The file is compiled
 * to a React component at build time (no `dangerouslySetInnerHTML`, no runtime fetch); this just
 * looks it up by id and renders it with the Kami component map.
 *
 * Collections that are their own pages use the dynamic route instead; use `<Content>` for
 * singletons and embedded blurbs.
 */
export function Content({ id, typeset = true, className }: ContentProps) {
	const entry = getContent(id)
	if (!entry) {
		if (import.meta.env.DEV) {
			console.warn(`<Content>: no content file found for id "${id}"`)
		}
		return null
	}
	const { Component } = entry
	return (
		<div className={cn(typeset && 'typeset', className)}>
			<MdxProvider>
				<Component />
			</MdxProvider>
		</div>
	)
}
