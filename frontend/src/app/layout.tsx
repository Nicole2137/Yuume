import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { plusJakartaSans, cormorantGaramond, quickSand } from '@/constants/fonts'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'

export const metadata: Metadata = {
	title: 'Yuume',
	description: 'The world shaped by your thoughts.',
	authors: [{ name: 'Nicole' }],
	creator: 'Nicole',
	publisher: 'Nicole Studio',
	keywords: ['Yuume', 'dreams', 'connection', 'yume nikki'],
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className={`${plusJakartaSans.variable} ${cormorantGaramond.variable} ${quickSand.variable}`}>
			<body>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
