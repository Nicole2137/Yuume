import PageTheme from '@/components/layout/PageTheme/PageTheme'
import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import AuthAboutSection from '@/components/auth/AuthAboutSection/AuthAboutSection'
import { singleDay } from '@/constants/fonts'

export default function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PageTheme variant='auth' className={`${singleDay.variable}`}>
			<main>
				<AuthFormSection>{children}</AuthFormSection>
				<AuthAboutSection />
			</main>
		</PageTheme>
	)
}
