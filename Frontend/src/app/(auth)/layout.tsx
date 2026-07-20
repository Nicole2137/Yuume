import PageTheme from '@/components/layout/PageTheme/PageTheme'
import { singleDay } from '@/constants/fonts'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PageTheme variant='auth' className={`${singleDay.variable}`}>
			{children}
		</PageTheme>
	)
}
