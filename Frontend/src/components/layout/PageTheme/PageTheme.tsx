import Nav from '@/components/layout/Nav/Nav'
import { type PageThemeVariant, navVariants } from '@/constants/nav'
import clsx from 'clsx'

interface PageThemeProps {
	variant: PageThemeVariant
	className?: string
	children: React.ReactNode
}

export default function PageTheme({ variant, className, children }: PageThemeProps) {
	return (
		<div data-theme={variant} className={clsx('page-theme', className)}>
			<Nav {...navVariants[variant]} />
			{children}
		</div>
	)
}
