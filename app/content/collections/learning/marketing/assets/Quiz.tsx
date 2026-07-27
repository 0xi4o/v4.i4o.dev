import React, { useState } from 'react'

import { theme } from './LessonLayout'

/**
 * Retrieval-practice quiz. One question at a time, immediate feedback, explanation shown after
 * answering. Options are shuffled per question by the lesson author (write them pre-shuffled); keep
 * answer options the same length so formatting gives nothing away.
 */

export interface QuizQuestion {
	prompt: string
	options: string[]
	correctIndex: number
	explanation: string
}

interface QuizProps {
	title?: string
	questions: QuizQuestion[]
}

export function Quiz({ title = 'Check yourself', questions }: QuizProps): React.ReactElement {
	const [current, setCurrent] = useState<number>(0)
	const [selected, setSelected] = useState<number | null>(null)
	const [score, setScore] = useState<number>(0)
	const [done, setDone] = useState<boolean>(false)

	const q = questions[current]
	const answered = selected !== null

	function choose(i: number): void {
		if (answered) return
		setSelected(i)
		if (i === q.correctIndex) setScore((s) => s + 1)
	}

	function next(): void {
		if (current + 1 >= questions.length) {
			setDone(true)
		} else {
			setCurrent((c) => c + 1)
			setSelected(null)
		}
	}

	function restart(): void {
		setCurrent(0)
		setSelected(null)
		setScore(0)
		setDone(false)
	}

	const baseButton: React.CSSProperties = {
		display: 'block',
		width: '100%',
		textAlign: 'left',
		padding: '0.65rem 0.9rem',
		marginBottom: '0.5rem',
		border: `1px solid ${theme.rule}`,
		borderRadius: 4,
		background: theme.ivory,
		fontFamily: theme.serif,
		fontSize: '1rem',
		cursor: answered ? 'default' : 'pointer',
	}

	return (
		<section
			style={{
				margin: '2rem 0',
				padding: '1.25rem 1.5rem',
				background: theme.parchment,
				border: `1px solid ${theme.rule}`,
				borderRadius: 6,
				fontFamily: theme.serif,
				color: theme.nearBlack,
			}}
		>
			<p
				style={{
					margin: '0 0 1rem',
					fontFamily: theme.mono,
					fontSize: '0.75rem',
					letterSpacing: '0.08em',
					textTransform: 'uppercase',
					color: theme.inkBlue,
				}}
			>
				{title} · {done ? 'done' : `${current + 1} of ${questions.length}`}
			</p>

			{done ? (
				<div>
					<p style={{ margin: '0 0 1rem' }}>
						{score} of {questions.length} right.{' '}
						{score === questions.length
							? 'Solid — move on to the task.'
							: 'Reread the section the misses came from, then retake it.'}
					</p>
					<button
						onClick={restart}
						style={{ ...baseButton, width: 'auto', cursor: 'pointer' }}
					>
						Retake
					</button>
				</div>
			) : (
				<div>
					<p style={{ margin: '0 0 1rem', fontWeight: 600 }}>{q.prompt}</p>
					{q.options.map((opt, i) => {
						let border = `1px solid ${theme.rule}`
						if (answered && i === q.correctIndex) border = `2px solid ${theme.inkBlue}`
						if (answered && i === selected && i !== q.correctIndex)
							border = `2px solid #a4433a`
						return (
							<button
								key={i}
								onClick={() => choose(i)}
								style={{ ...baseButton, border }}
							>
								{opt}
							</button>
						)
					})}
					{answered ? (
						<div style={{ marginTop: '0.75rem' }}>
							<p style={{ margin: '0 0 0.75rem', color: theme.muted }}>
								{q.explanation}
							</p>
							<button
								onClick={next}
								style={{ ...baseButton, width: 'auto', cursor: 'pointer' }}
							>
								{current + 1 >= questions.length ? 'Finish' : 'Next'}
							</button>
						</div>
					) : null}
				</div>
			)}
		</section>
	)
}
