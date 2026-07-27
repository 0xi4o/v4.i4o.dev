import React, { useState } from 'react'

import { colors, fonts, rounded, spacing } from './styles'

/**
 * Reusable retrieval-practice quiz for course lessons.
 *
 * Design rules (from the course's teaching approach): - Immediate feedback on every answer — the
 * feedback loop is the point. - Answer options for a question should all have the same word count,
 * so formatting gives no clues. Enforce this when authoring, not here. - Each option carries its
 * own explanation, shown after selection, so a wrong pick still teaches.
 */

export interface QuizOption {
	text: string
	correct?: boolean
	/** Shown after the user picks this option. Explain _why_, briefly. */
	explanation: string
}

export interface QuizQuestion {
	prompt: string
	options: QuizOption[]
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: spacing.lg }}>
			{questions.map((q, i) => (
				<Question key={i} number={i + 1} question={q} />
			))}
		</div>
	)
}

function Question({ number, question }: { number: number; question: QuizQuestion }) {
	const [picked, setPicked] = useState<number | null>(null)

	return (
		<div
			style={{
				background: colors.paper,
				border: `1px solid ${colors.outline}`,
				borderRadius: rounded.lg,
				padding: spacing.lg,
			}}
		>
			<div
				style={{
					fontFamily: fonts.heading,
					fontSize: 11,
					fontWeight: 600,
					letterSpacing: '0.08em',
					textTransform: 'uppercase',
					color: colors.onSurfaceVariant,
					marginBottom: spacing.sm,
				}}
			>
				Question {number}
			</div>
			<p style={{ fontFamily: fonts.body, fontSize: 16, lineHeight: 1.6, marginTop: 0 }}>
				{question.prompt}
			</p>
			<div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
				{question.options.map((opt, i) => {
					const isPicked = picked === i
					const answered = picked !== null
					const borderColor = isPicked
						? opt.correct
							? colors.tertiary
							: colors.error
						: colors.outline
					return (
						<button
							key={i}
							onClick={() => setPicked(i)}
							disabled={answered}
							style={{
								textAlign: 'left',
								fontFamily: fonts.body,
								fontSize: 15,
								lineHeight: 1.5,
								background: isPicked ? colors.lightGray : colors.paper,
								color: colors.ink,
								border: `2px solid ${borderColor}`,
								borderRadius: rounded.md,
								padding: `${spacing.sm}px ${spacing.md}px`,
								cursor: answered ? 'default' : 'pointer',
								opacity: answered && !isPicked ? 0.6 : 1,
							}}
						>
							{opt.text}
							{isPicked && (
								<span
									style={{
										display: 'block',
										marginTop: spacing.xs,
										fontSize: 13,
										color: opt.correct ? colors.tertiary : colors.error,
									}}
								>
									{opt.correct ? '✓ Correct. ' : '✗ Not quite. '}
									{opt.explanation}
								</span>
							)}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default Quiz
