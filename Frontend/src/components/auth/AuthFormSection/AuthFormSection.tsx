import styles from './AuthFormSection.module.scss'

interface AuthFormSectionProps {
	title: string
	children: React.ReactNode
}

export default function AuthFormSection({ title, children }: AuthFormSectionProps) {
	return (
		<section className={styles['auth-form-section']}>
			<header className={styles['auth-form-section__header']}>
				<span className={styles['auth-form-section__greeting']}>welcome back</span>
				<h2 className={styles['auth-form-section__title']}>{title}</h2>
				<span className={styles['auth-form-section__subtitle']}>a soft place for gentle souls</span>
			</header>
			{children}
		</section>
	)
}
