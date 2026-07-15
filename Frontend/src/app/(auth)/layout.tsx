import PageTheme from '@/components/layout/PageTheme/PageTheme'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <PageTheme variant='auth'>{children}</PageTheme>
}
