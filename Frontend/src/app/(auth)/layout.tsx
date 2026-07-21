import PageTheme from '@/components/layout/PageTheme/PageTheme'
import AuthAboutSection from '@/components/auth/AuthAboutSection/AuthAboutSection'
import { singleDay, gaegu } from '@/constants/fonts'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PageTheme variant='auth' className={`${singleDay.variable} ${gaegu.variable}`}>
			<main>
				{children}
				<AuthAboutSection />
			</main>
		</PageTheme>
	)
}
