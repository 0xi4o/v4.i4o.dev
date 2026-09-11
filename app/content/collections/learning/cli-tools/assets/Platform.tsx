import type { ReactNode } from 'react'

import { palette } from './LessonLayout'

/**
 * Side-by-side macOS / Linux note. Use whenever a command or flag differs between the two
 * machines the learner uses. Keep both cells short.
 */
export function Platform({ mac, linux }: { mac: ReactNode; linux: ReactNode }) {
	const cell = {
		flex: 1,
		minWidth: '14rem',
		padding: '0.6rem 0.9rem',
		fontSize: '0.93rem',
	}
	return (
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				border: `1px solid ${palette.line}`,
				borderRadius: '6px',
				margin: '1.25rem 0',
				background: '#fffdf8',
			}}
		>
			<div style={{ ...cell, borderRight: `1px solid ${palette.line}` }}>
				<strong style={{ color: palette.accent }}>macOS</strong>
				<div>{mac}</div>
			</div>
			<div style={cell}>
				<strong style={{ color: palette.accent }}>Linux</strong>
				<div>{linux}</div>
			</div>
		</div>
	)
}
