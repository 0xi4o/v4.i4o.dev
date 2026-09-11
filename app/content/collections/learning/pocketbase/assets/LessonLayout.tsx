import type { ReactNode } from 'react'

/**
 * Shared layout + styling for every lesson and reference doc in this course. Tufte-ish: generous
 * measure, quiet palette, serif body. Self-contained — no external CSS required.
 */

export const palette = {
	paper: '#faf7f0',
	ink: '#1a1a1a',
	accent: '#1e3a5f', // ink-blue
	muted: '#6b6b6b',
	line: '#d9d2c3',
	codeBg: '#f0ece1',
	good: '#2d6a4f',
	bad: '#9d2b2b',
} as const

export function LessonLayout({ children }: { children: ReactNode }) {
	return (
		<article
			style={{
				maxWidth: '42rem',
				margin: '0 auto',
				padding: '2rem 1.25rem 4rem',
				background: palette.paper,
				color: palette.ink,
				fontFamily: 'Charter, Georgia, serif',
				fontSize: '1.06rem',
				lineHeight: 1.65,
			}}
		>
			{children}
		</article>
	)
}

export function Aside({ children }: { children: ReactNode }) {
	return (
		<aside
			style={{
				borderLeft: `3px solid ${palette.accent}`,
				padding: '0.5rem 1rem',
				margin: '1.5rem 0',
				color: palette.muted,
				fontSize: '0.95rem',
			}}
		>
			{children}
		</aside>
	)
}

export function KeyIdea({ children }: { children: ReactNode }) {
	return (
		<div
			style={{
				border: `1px solid ${palette.line}`,
				borderRadius: '6px',
				padding: '1rem 1.25rem',
				margin: '1.5rem 0',
				background: '#fffdf8',
			}}
		>
			<strong style={{ color: palette.accent }}>Key idea — </strong>
			{children}
		</div>
	)
}
