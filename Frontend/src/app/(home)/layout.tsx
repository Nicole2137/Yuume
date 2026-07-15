import PageTheme from '@/components/layout/PageTheme/PageTheme'
import { plusJakartaSans, cormorantGaramond, quickSand } from '@/constants/fonts'

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<PageTheme
			variant='home'
			className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${quickSand.variable}`}>
			{children}
		</PageTheme>
	)
}
