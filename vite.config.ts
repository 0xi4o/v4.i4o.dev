import { cloudflare } from '@cloudflare/vite-plugin'
import mdx from '@mdx-js/rollup'
import { reactRouter } from '@react-router/dev/vite'
import tailwindcss from '@tailwindcss/vite'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import { defineConfig, lazyPlugins } from 'vite-plus'

// Shiki dual-theme highlighting. Runs at MDX compile time (build), so the
// highlighted markup is baked into the compiled component — no runtime Shiki
// cost in the Worker. The `.dark` class flips which theme's CSS vars apply.
const rehypePrettyCodeOptions = {
	theme: { light: 'github-light', dark: 'github-dark' },
	keepBackground: false,
}

export default defineConfig({
	fmt: {
		// Content markdown is CMS-owned, not hand-authored source. Its frontmatter is written by
		// gray-matter (the writer Kobun uses), and oxfmt reformats frontmatter YAML on its own terms
		// — 4-space sequences, double-quoted scalars. Letting both write the same bytes means every
		// CMS save reflows the whole block, and the `staged` hook below would re-mangle it on every
		// commit. Formatting a whole file is all-or-nothing, so the content tree opts out entirely.
		ignorePatterns: ['app/content/**'],
		jsdoc: true,
		jsxSingleQuote: true,
		quoteProps: 'consistent',
		semi: false,
		singleQuote: true,
		sortImports: true,
		sortTailwindcss: true,
		tabWidth: 4,
		trailingComma: 'all',
		useTabs: true,
	},
	lint: {
		jsPlugins: [{ name: 'vite-plus', specifier: 'vite-plus/oxlint-plugin' }],
		rules: { 'vite-plus/prefer-vite-plus-imports': 'error' },
		options: { typeAware: true, typeCheck: true },
	},
	plugins: lazyPlugins(() => [
		cloudflare({ viteEnvironment: { name: 'ssr' } }),
		tailwindcss(),
		// MDX compiles both `.md` and `.mdx` to React components. Must run before
		// `reactRouter()` (hence `enforce: 'pre'`) so React Router's transform sees
		// compiled JSX, not raw markdown.
		{
			enforce: 'pre',
			...mdx({
				remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
				rehypePlugins: [
					rehypeSlug,
					rehypeAutolinkHeadings,
					[rehypePrettyCode, rehypePrettyCodeOptions],
				],
				// Content picks up the styled component map from `<MDXProvider>`.
				providerImportSource: '@mdx-js/react',
			}),
		},
		reactRouter(),
	]),
	resolve: {
		tsconfigPaths: true,
	},
	server: {
		port: 3000,
	},
	staged: {
		'*': 'vp check --fix',
	},
})
