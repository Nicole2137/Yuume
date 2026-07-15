import Nav from '@/components/layout/Nav/Nav'

import { type NavVariant, navVariants } from '@/constants/nav'

interface PageThemeProps {
	variant: NavVariant
	children: React.ReactNode
}

export default function PageTheme({ variant, children }: PageThemeProps) {
	return (
		<div className='page-theme' data-theme={variant}>
			<Nav variant={variant} {...navVariants[variant]} />
			{children}
		</div>
	)
}
