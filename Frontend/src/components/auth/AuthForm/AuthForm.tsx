import styles from './AuthForm.module.scss'
import { SubmitEventHandler, type ReactNode, type SubmitEvent } from 'react'
import Link from 'next/link'

interface AuthFormProps {
	children: ReactNode
	onSubmit: SubmitEventHandler<HTMLFormElement>
	status: string
	submitText: string
	dividerText: string
	footerText: string
	footerHref: string
	footerLinkText: string
}

export default function AuthForm({
	children,
	onSubmit,
	status,
	submitText,
	dividerText,
	footerText,
	footerHref,
	footerLinkText,
}: AuthFormProps) {
	return (
		<form onSubmit={onSubmit} className={styles['auth-form']}>
			{children}
			<button disabled={status === 'loading'} className={styles['auth-form__btn']}>
				<span>{submitText}</span>
			</button>
			<div className={styles['auth-form__socials-divider']}>
				<span className={styles['auth-form__socials-icon']} />
				<span className={styles['auth-form__text']}>{dividerText}</span>
				<span className={styles['auth-form__socials-icon']} />
			</div>
			<div className={styles['auth-form__socials']}>
				<button type='button' aria-label='Continue with Google' className={styles['auth-form__social-btn']}>
					<span
						aria-hidden='true'
						className={`${styles['auth-form__social-icon']} ${styles['auth-form__social-icon--google']}`}
					/>
				</button>

				<button type='button' aria-label='Continue with Discord' className={styles['auth-form__social-btn']}>
					<span
						aria-hidden='true'
						className={`${styles['auth-form__social-icon']} ${styles['auth-form__social-icon--discord']}`}
					/>
				</button>
			</div>
			<div className={styles['auth-form__footer']}>
				<span className={styles['auth-form__text']}>{footerText}</span>
				<Link href={footerHref} className={styles['auth-form__link']}>
					{footerLinkText}
				</Link>
			</div>
		</form>
	)
}
