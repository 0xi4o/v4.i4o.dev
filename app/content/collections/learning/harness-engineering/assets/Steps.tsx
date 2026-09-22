import { useState, type ReactNode } from 'react'

import { palette } from './LessonLayout'

/**
 * Hands-on procedure: numbered steps done on real hardware, each with a tick, an optional
 * "how you know it worked" check, and an optional command block. State is per-session; the tick
 * is there to make the learner confirm the check, not to persist progress.
 */

export interface Step {
	/** Imperative, one line. */
	title: string
	/** What to do. May contain inline code and links. */
	body: ReactNode
	/** Shell commands to run, shown verbatim in a monospace block. */
	commands?: string[]
	/** The observable result that proves the step worked. */
	check?: string
}

export function Steps({ title, steps }: { title: string; steps: Step[] }) {
	const [done, setDone] = useState<boolean[]>(() => steps.map(() => false))
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
			<p style={{ marginTop: 0, display: 'flex', justifyContent: 'space-between' }}>
				<strong style={{ color: palette.accent }}>{title}</strong>
				<span style={{ color: count === steps.length ? palette.good : palette.muted, fontSize: '0.95rem' }}>
					{count} of {steps.length}
				</span>
			</p>
			<ol style={{ paddingLeft: '1.5rem', margin: 0 }}>
				{steps.map((s, i) => (
					<li
						key={i}
						style={{
							padding: '0.6rem 0',
							borderTop: `1px solid ${palette.line}`,
							opacity: done[i] ? 0.6 : 1,
						}}
					>
						<label style={{ cursor: 'pointer', display: 'block' }}>
							<input
								type="checkbox"
								checked={done[i]}
								onChange={() => toggle(i)}
								style={{ marginRight: '0.6rem' }}
							/>
							<strong>{s.title}</strong>
						</label>
						<div style={{ marginLeft: '1.7rem', fontSize: '0.97rem' }}>
							<div>{s.body}</div>
							{s.commands && (
								<pre
									style={{
										background: palette.codeBg,
										padding: '0.6rem 0.8rem',
										borderRadius: '4px',
										overflowX: 'auto',
										fontFamily: '"JetBrains Mono", ui-monospace, monospace',
										fontSize: '0.85rem',
										margin: '0.5rem 0',
									}}
								>
									{s.commands.join('\n')}
								</pre>
							)}
							{s.check && (
								<p style={{ color: palette.muted, fontSize: '0.9rem', margin: '0.3rem 0 0' }}>
									<em>Done when:</em> {s.check}
								</p>
							)}
						</div>
					</li>
				))}
			</ol>
		</section>
	)
}
