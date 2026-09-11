import type { ReactNode } from 'react'

import { palette } from './LessonLayout'

/**
 * Side-by-side (stacked on narrow screens) rewrite: a weak passage and the same passage done well,
 * with an optional one-line note on what changed. Reused wherever a lesson teaches by contrast.
 */

export function BeforeAfter({
	before,
	after,
	note,
	beforeLabel = 'Before',
	afterLabel = 'After',
}: {
	before: ReactNode
	after: ReactNode
	note?: ReactNode
	beforeLabel?: string
	afterLabel?: string
}) {
	return (
		<figure style={{ margin: '1.5rem 0' }}>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(16rem, 1fr))',
					gap: '1rem',
				}}
			>
				<Panel label={beforeLabel} colour={palette.bad}>
					{before}
				</Panel>
				<Panel label={afterLabel} colour={palette.good}>
					{after}
				</Panel>
			</div>
			{note && (
				<figcaption style={{ color: palette.muted, fontSize: '0.9rem', marginTop: '0.5rem' }}>
					{note}
				</figcaption>
			)}
		</figure>
	)
}

function Panel({ label, colour, children }: { label: string; colour: string; children: ReactNode }) {
	return (
		<div
			style={{
				border: `1px solid ${palette.line}`,
				borderTop: `3px solid ${colour}`,
				borderRadius: '6px',
				padding: '0.75rem 1rem',
				background: '#fffdf8',
				fontSize: '0.95rem',
			}}
		>
			<div
				style={{
					fontFamily: 'JetBrains Mono, ui-monospace, monospace',
					fontSize: '0.75rem',
					letterSpacing: '0.05em',
					textTransform: 'uppercase',
					color: colour,
					marginBottom: '0.4rem',
				}}
			>
				{label}
			</div>
			{children}
		</div>
	)
}
