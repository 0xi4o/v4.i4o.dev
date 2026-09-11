import { useState } from 'react'
import type { ReactNode } from 'react'

import { palette } from './LessonLayout'

/**
 * Predict-then-run drill for CLI lessons. The learner writes the command they think answers the
 * task *before* revealing it, runs it, and self-marks. Retrieval practice with a tight loop.
 * State is in memory only.
 */

export interface DrillProps {
	/** Short task statement, e.g. "List every Go file, filenames only". */
	task: ReactNode
	/** The command (or one good answer). Shown on reveal. */
	answer: string
	/** Why this is the answer and what to notice in the output. */
	explanation: ReactNode
	/** Optional nudge shown before the full reveal. */
	hint?: ReactNode
}

export function Drill({ task, answer, explanation, hint }: DrillProps) {
	const [attempt, setAttempt] = useState('')
	const [showHint, setShowHint] = useState(false)
	const [revealed, setRevealed] = useState(false)
	const [result, setResult] = useState<'got' | 'missed' | null>(null)

	const mono = { fontFamily: 'JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, monospace' }

	return (
		<div
			style={{
				border: `1px solid ${palette.line}`,
				borderLeft: `3px solid ${palette.accent}`,
				borderRadius: '6px',
				padding: '1rem 1.25rem',
				margin: '1.5rem 0',
				background: '#fffdf8',
			}}
		>
			<p style={{ marginTop: 0 }}>
				<strong>Drill — </strong>
				{task}
			</p>
			<input
				value={attempt}
				onChange={(e) => setAttempt(e.target.value)}
				placeholder="Type the command you'd run, then run it for real"
				disabled={revealed}
				style={{
					...mono,
					width: '100%',
					boxSizing: 'border-box',
					padding: '0.5rem 0.65rem',
					fontSize: '0.92rem',
					border: `1px solid ${palette.line}`,
					borderRadius: '4px',
					background: revealed ? palette.codeBg : '#fff',
					color: palette.ink,
				}}
			/>
			<div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.6rem', flexWrap: 'wrap' }}>
				{hint && !showHint && !revealed && (
					<Button onClick={() => setShowHint(true)}>Hint</Button>
				)}
				{!revealed && <Button onClick={() => setRevealed(true)}>Reveal</Button>}
			</div>
			{showHint && !revealed && (
				<p style={{ color: palette.muted, fontSize: '0.95rem', marginBottom: 0 }}>{hint}</p>
			)}
			{revealed && (
				<div style={{ marginTop: '0.75rem' }}>
					<pre
						style={{
							...mono,
							background: palette.codeBg,
							padding: '0.6rem 0.8rem',
							borderRadius: '4px',
							fontSize: '0.9rem',
							overflowX: 'auto',
							margin: 0,
						}}
					>
						{answer}
					</pre>
					<p style={{ fontSize: '0.95rem', color: palette.muted }}>{explanation}</p>
					{result === null ? (
						<div style={{ display: 'flex', gap: '0.5rem' }}>
							<Button onClick={() => setResult('got')}>I had it</Button>
							<Button onClick={() => setResult('missed')}>I didn't</Button>
						</div>
					) : (
						<p
							style={{
								margin: 0,
								fontSize: '0.95rem',
								color: result === 'got' ? palette.good : palette.bad,
							}}
						>
							{result === 'got'
								? 'Good. Come back to this one in a few days without looking.'
								: 'Fine — that is the point of the drill. Run the answer, then close this and try again from memory.'}
						</p>
					)}
				</div>
			)}
		</div>
	)
}

function Button({ children, onClick }: { children: ReactNode; onClick: () => void }) {
	return (
		<button
			onClick={onClick}
			style={{
				font: 'inherit',
				fontSize: '0.9rem',
				padding: '0.35rem 0.8rem',
				borderRadius: '4px',
				border: `1px solid ${palette.accent}`,
				background: '#fff',
				color: palette.accent,
				cursor: 'pointer',
			}}
		>
			{children}
		</button>
	)
}
