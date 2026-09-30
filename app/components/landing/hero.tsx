import { Content } from '~/components/content'
import { icons, profile } from '~/data/portfolio'

export default function Hero({ title }: { title: string }) {
	return (
		<article className='typeset border-border mb-10 border-b pb-10'>
			<h1>{title}</h1>

			<Content id='singletons/home' className='mb-8 max-w-[820px]' />

			<span className='flex items-center gap-3.5'>
				{profile.socials.map((social) => {
					const Icon = icons[social.label]
					return (
						<a
							key={social.label}
							href={social.url}
							target='_blank'
							rel='noopener'
							aria-label={social.label}
							className='flex items-center text-[var(--kami-brand)] transition-colors hover:text-[var(--kami-brand-light)]'
						>
							{Icon ?? social.label}
						</a>
					)
				})}
			</span>
		</article>
	)
}
