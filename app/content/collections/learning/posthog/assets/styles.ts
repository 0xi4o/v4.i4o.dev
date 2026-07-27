/**
 * Shared design tokens for all PostHog course lessons.
 *
 * Derived from the "Anthropic Learning" DESIGN.md in the attached Learning project: warm neutrals,
 * a single earthy-orange accent, Poppins for headings/UI, Lora for body, JetBrains Mono for code.
 *
 * Every lesson and asset should import from here rather than hard-coding values, so the course
 * reads as one consistent system.
 */

export const colors = {
	primary: '#d97757', // orange — key highlights, the one important thing per view
	secondary: '#6a9bcc', // blue — informational, second chart series
	tertiary: '#788c5d', // green — success states, correct answers
	neutral: '#b0aea5', // captions, borders, metadata
	error: '#b8422e', // errors, incorrect answers

	ink: '#141413',
	paper: '#faf9f5',
	lightGray: '#e8e6dc',

	onSurfaceVariant: '#57564f', // muted text on light
	outline: '#d4d2c8', // hairline borders on light
} as const

export const fonts = {
	heading: "'Poppins', Arial, sans-serif",
	body: "'Lora', Georgia, serif",
	code: "'JetBrains Mono', ui-monospace, monospace",
} as const

export const spacing = {
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 40,
	xxl: 64,
	readingMax: 680, // max width for long-form reading columns
} as const

export const rounded = {
	sm: 4,
	md: 8,
	lg: 16,
	full: 9999,
} as const

/** Reusable style objects for common lesson elements. */
export const styles = {
	card: {
		background: colors.paper,
		color: colors.ink,
		border: `1px solid ${colors.outline}`,
		borderRadius: rounded.lg,
		padding: spacing.lg,
	},
	raisedCard: {
		background: colors.lightGray,
		color: colors.ink,
		borderRadius: rounded.lg,
		padding: spacing.lg,
	},
	eyebrow: {
		fontFamily: fonts.heading,
		fontSize: 11,
		fontWeight: 600,
		letterSpacing: '0.08em',
		textTransform: 'uppercase' as const,
		color: colors.onSurfaceVariant,
	},
	body: {
		fontFamily: fonts.body,
		fontSize: 16,
		lineHeight: 1.6,
		color: colors.ink,
	},
	codeBlock: {
		fontFamily: fonts.code,
		fontSize: 14,
		lineHeight: 1.5,
		background: colors.ink,
		color: colors.paper,
		borderRadius: rounded.md,
		padding: spacing.md,
		overflowX: 'auto' as const,
	},
} as const
