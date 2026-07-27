import React from 'react'

/**
 * Shared layout + typography for every lesson and reference doc in this course. Wrap lesson content
 * in <LessonLayout> so the course reads as one consistent thing. Palette follows Ilango's umbrella
 * brand: parchment, ivory, ink-blue, near-black; Charter serif with JetBrains Mono for code.
 */

export const theme = {
	parchment: '#f6f1e7',
	ivory: '#fbf8f1',
	inkBlue: '#1f3a5f',
	nearBlack: '#181613',
	muted: '#6b6357',
	rule: '#d9d0bf',
	serif: "'Charter', 'Georgia', serif",
	mono: "'JetBrains Mono', 'SFMono-Regular', monospace",
} as const

interface LessonLayoutProps {
	children: React.ReactNode
}

export function LessonLayout({ children }: LessonLayoutProps): React.ReactElement {
	return (
		<article
			style={{
				maxWidth: '42rem',
				margin: '0 auto',
				padding: '3rem 1.5rem',
				background: theme.ivory,
				color: theme.nearBlack,
				fontFamily: theme.serif,
				fontSize: '1.0625rem',
				lineHeight: 1.65,
			}}
		>
			{children}
		</article>
	)
}

interface CalloutProps {
	label?: string
	children: React.ReactNode
}

/** A quiet aside box — for tasks, reminders, and "try this now" blocks. */
export function Callout({ label, children }: CalloutProps): React.ReactElement {
	return (
		<aside
			style={{
				margin: '1.75rem 0',
				padding: '1rem 1.25rem',
				background: theme.parchment,
				borderLeft: `3px solid ${theme.inkBlue}`,
				borderRadius: '0 4px 4px 0',
			}}
		>
			{label ? (
				<p
					style={{
						margin: '0 0 0.5rem',
						fontFamily: theme.mono,
						fontSize: '0.75rem',
						letterSpacing: '0.08em',
						textTransform: 'uppercase',
						color: theme.inkBlue,
					}}
				>
					{label}
				</p>
			) : null}
			<div>{children}</div>
		</aside>
	)
}

interface TermProps {
	word: string
	plain: string
}

/** Inline jargon translator: renders the term with its plain-English gloss. */
export function Term({ word, plain }: TermProps): React.ReactElement {
	return (
		<span>
			<strong style={{ color: theme.inkBlue }}>{word}</strong>
			<span style={{ color: theme.muted }}> ({plain})</span>
		</span>
	)
}
