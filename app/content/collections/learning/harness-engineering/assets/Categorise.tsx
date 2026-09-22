import { useState } from 'react'

import { palette } from './LessonLayout'

/**
 * Sorting drill: each item is assigned to one of a small set of categories, with immediate
 * feedback and a running score. Reusable for any "which kind of thing is this?" skill —
 * goal vs design choice, decision vs consequence, context vs opinion.
 */

export interface CategoriseItem {
	text: string
	/** Index into `categories`. */
	answer: number
	/** Shown after answering — why it belongs there. */
	note: string
}

export function Categorise({
	title,
	categories,
	items,
}: {
	title: string
	categories: string[]
	items: CategoriseItem[]
}) {
	const [picked, setPicked] = useState<(number | null)[]>(() => items.map(() => null))
	const answered = picked.filter((p) => p !== null).length
	const correct = picked.filter((p, i) => p === items[i].answer).length

	function pick(i: number, c: number) {
		setPicked((prev) => (prev[i] === null ? prev.map((v, j) => (j === i ? c : v)) : prev))
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
				<span style={{ color: palette.muted, fontSize: '0.95rem' }}>
					{answered === items.length ? `${correct} of ${items.length} right` : `${answered} of ${items.length}`}
				</span>
			</p>
			{items.map((item, i) => {
				const p = picked[i]
				const done = p !== null
				const right = p === item.answer
				return (
					<div key={i} style={{ borderTop: `1px solid ${palette.line}`, padding: '0.6rem 0' }}>
						<p style={{ margin: '0 0 0.4rem' }}>{item.text}</p>
						<div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
							{categories.map((c, ci) => {
								const isAnswer = ci === item.answer
								const isPicked = ci === p
								const border = done && isAnswer ? palette.good : done && isPicked ? palette.bad : palette.line
								return (
									<button
										key={ci}
										onClick={() => pick(i, ci)}
										disabled={done}
										style={{
											padding: '0.3rem 0.7rem',
											borderRadius: '4px',
											border: `1px solid ${border}`,
											background: done && isAnswer ? '#e7f2ec' : '#fff',
											cursor: done ? 'default' : 'pointer',
											font: 'inherit',
											fontSize: '0.9rem',
										}}
									>
										{c}
									</button>
								)
							})}
						</div>
						{done && (
							<p style={{ margin: '0.4rem 0 0', fontSize: '0.9rem', color: right ? palette.good : palette.bad }}>
								{right ? 'Yes. ' : 'No — '}
								<span style={{ color: palette.muted }}>{item.note}</span>
							</p>
						)}
					</div>
				)
			})}
		</section>
	)
}
