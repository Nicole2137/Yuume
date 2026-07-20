import styles from './AuthFormSection.module.scss'

export default function AuthFormSection({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <section className={styles['auth-form-section']}>{children}</section>
}
