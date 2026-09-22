import { useState, type ReactNode } from 'react'

import { palette } from './LessonLayout'

/**
 * Build exercise: a spec to implement in the learner's own repo, the command that gives the
 * feedback (usually `go test`), a done-when list to tick, and hints that stay hidden until asked
 * for — one at a time, so the learner takes the smallest hint that unblocks them.
 */

export interface CodeTaskProps {
	title: string
	/** What to build. Prose, may contain inline code and links. */
	children: ReactNode
	/** The command whose output is the feedback loop. */
	run: string
	/** Observable conditions that mean the task is finished. */
	doneWhen: string[]
	/** Ordered from gentlest to most revealing. */
	hints?: string[]
}

export function CodeTask({ title, children, run, doneWhen, hints = [] }: CodeTaskProps) {
	const [done, setDone] = useState<boolean[]>(() => doneWhen.map(() => false))
	const [shown, setShown] = useState(0)
	const count = done.filter(Boolean).length

	function toggle(i: number) {
		setDone((prev) => prev.map((v, j) => (j === i ? !v : v)))
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
			<p style={{ marginTop: 0 }}>
				<strong style={{ color: palette.accent }}>Build — </strong>
				<strong>{title}</strong>
			</p>
			<div>{children}</div>
			<pre
				style={{
					background: palette.codeBg,
					padding: '0.6rem 0.8rem',
					borderRadius: '4px',
					fontFamily: '"JetBrains Mono", ui-monospace, monospace',
					fontSize: '0.85rem',
					overflowX: 'auto',
				}}
			>
				{run}
			</pre>
			<p style={{ marginBottom: '0.25rem', color: palette.muted, fontSize: '0.95rem' }}>
				Done when ({count}/{doneWhen.length}):
			</p>
			{doneWhen.map((item, i) => (
				<label
					key={i}
					style={{ display: 'block', margin: '0.3rem 0', fontSize: '0.95rem', cursor: 'pointer' }}
				>
					<input
						type="checkbox"
						checked={done[i]}
						onChange={() => toggle(i)}
						style={{ marginRight: '0.5rem' }}
					/>
					{item}
				</label>
			))}
			{hints.length > 0 && (
				<div style={{ marginTop: '0.9rem' }}>
					{hints.slice(0, shown).map((hint, i) => (
						<p key={i} style={{ color: palette.muted, fontSize: '0.95rem', margin: '0.4rem 0' }}>
							<strong>Hint {i + 1}.</strong> {hint}
						</p>
					))}
					{shown < hints.length && (
						<button
							onClick={() => setShown((n) => n + 1)}
							style={{
								font: 'inherit',
								fontSize: '0.9rem',
								padding: '0.35rem 0.7rem',
								borderRadius: '4px',
								border: `1px solid ${palette.line}`,
								background: '#fff',
								cursor: 'pointer',
							}}
						>
							Show hint {shown + 1} of {hints.length}
						</button>
					)}
				</div>
			)}
		</section>
	)
}
