import { useState } from 'react'

import { palette } from './LessonLayout'

/**
 * Retrieval-practice quiz. Immediate feedback, no formatting clues — authors must keep all options
 * the same word count per question.
 */

export interface QuizQuestion {
	prompt: string
	options: string[]
	answerIndex: number
	explanation: string
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
	return (
		<section style={{ margin: '2rem 0' }}>
			{questions.map((q, i) => (
				<QuizItem key={i} number={i + 1} question={q} />
			))}
		</section>
	)
}

function QuizItem({ number, question }: { number: number; question: QuizQuestion }) {
	const [picked, setPicked] = useState<number | null>(null)
	const answered = picked !== null
	const correct = picked === question.answerIndex

	return (
		<div
			style={{
				border: `1px solid ${palette.line}`,
				borderRadius: '6px',
				padding: '1rem 1.25rem',
				marginBottom: '1rem',
				background: '#fffdf8',
			}}
		>
			<p style={{ marginTop: 0 }}>
				<strong>
					Q{number}. {question.prompt}
				</strong>
			</p>
			{question.options.map((opt, i) => (
				<button
					key={i}
					onClick={() => !answered && setPicked(i)}
					disabled={answered}
					style={{
						display: 'block',
						width: '100%',
						textAlign: 'left',
						margin: '0.35rem 0',
						padding: '0.5rem 0.75rem',
						borderRadius: '4px',
						border: `1px solid ${
							answered && i === question.answerIndex
								? palette.good
								: answered && i === picked
									? palette.bad
									: palette.line
						}`,
						background: answered && i === question.answerIndex ? '#e7f2ec' : '#fff',
						cursor: answered ? 'default' : 'pointer',
						font: 'inherit',
						fontSize: '0.95rem',
					}}
				>
					{opt}
				</button>
			))}
			{answered && (
				<p
					style={{
						color: correct ? palette.good : palette.bad,
						fontSize: '0.95rem',
						marginBottom: 0,
					}}
				>
					{correct ? 'Correct. ' : 'Not quite. '}
					<span style={{ color: palette.muted }}>{question.explanation}</span>
				</p>
			)}
		</div>
	)
}
