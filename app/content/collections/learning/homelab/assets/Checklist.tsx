import { useState } from 'react'

import { palette } from './LessonLayout'

/**
 * Self-review checklist. Each item is a yes/no question the learner asks of a document they have
 * just written. Ticks are per-session state; the point is the act of checking, not persistence.
 */

export interface ChecklistItem {
	/** The question, phrased so that "yes" is the good answer. */
	question: string
	/** Shown under the question when it is expanded — why this matters, or what to do if the answer is no. */
	why?: string
}

export function Checklist({ title, items }: { title: string; items: ChecklistItem[] }) {
	const [ticked, setTicked] = useState<boolean[]>(() => items.map(() => false))
	const done = ticked.filter(Boolean).length

	function toggle(i: number) {
		setTicked((prev) => prev.map((v, j) => (j === i ? !v : v)))
	}

	return (
		<section
			style={{
				border: `1px solid ${palette.line}`,
				borderRadius: '6px',
				padding: '1rem 1.25rem',
				margin: '2rem 0',
				background: '#fffdf8',
			}}
		>
			<p style={{ marginTop: 0, display: 'flex', justifyContent: 'space-between' }}>
				<strong style={{ color: palette.accent }}>{title}</strong>
				<span style={{ color: done === items.length ? palette.good : palette.muted, fontSize: '0.95rem' }}>
					{done} of {items.length}
				</span>
			</p>
			{items.map((item, i) => (
				<label
					key={i}
					style={{
						display: 'block',
						padding: '0.4rem 0',
						borderTop: `1px solid ${palette.line}`,
						cursor: 'pointer',
					}}
				>
					<input
						type="checkbox"
						checked={ticked[i]}
						onChange={() => toggle(i)}
						style={{ marginRight: '0.6rem' }}
					/>
					<span style={{ textDecoration: ticked[i] ? 'line-through' : 'none' }}>{item.question}</span>
					{item.why && (
						<span
							style={{
								display: 'block',
								color: palette.muted,
								fontSize: '0.9rem',
								marginLeft: '1.7rem',
							}}
						>
							{item.why}
						</span>
					)}
				</label>
			))}
		</section>
	)
}
