import type { Metadata } from 'next'
import '@/styles/globals.scss'

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
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
