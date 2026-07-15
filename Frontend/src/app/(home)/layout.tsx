import PageTheme from '@/components/layout/PageTheme/PageTheme'

export default function HomeLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <PageTheme variant='home'>{children}</PageTheme>
}
