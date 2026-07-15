import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { plusJakartaSans, cormorantGaramond, quickSand } from '@/constants/fonts'

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
				{children}
			</body>
		</html>
	)
}
