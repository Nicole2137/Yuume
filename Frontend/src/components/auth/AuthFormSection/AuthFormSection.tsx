import styles from './AuthFormSection.module.scss'

interface AuthFormSectionProps {
	greeting: string
	title: string
	subtitle: string
	description?: string
	children: React.ReactNode
}

export default function AuthFormSection({ greeting, title, subtitle, description, children }: AuthFormSectionProps) {
	return (
		<section className={styles['auth-form-section']}>
			<header className={styles['auth-form-section__header']}>
				<span className={styles['auth-form-section__greeting']}>{greeting}</span>
				<h2 className={styles['auth-form-section__title']}>{title}</h2>
				<span className={styles['auth-form-section__subtitle']}>{subtitle}</span>
				{description && (
					<p className={styles['auth-form-section__description']}>
						{description}
					</p>
				)}
			</header>
			{children}
		</section>
	)
}
