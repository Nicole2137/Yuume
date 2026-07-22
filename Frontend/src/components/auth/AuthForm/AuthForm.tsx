import styles from './AuthForm.module.scss'
import type { ReactNode } from 'react'
import Link from 'next/link'

interface AuthFormProps {
	children: ReactNode
	submitText: string
	dividerText: string
	footerText: string
	footerHref: string
	footerLinkText: string
}

export default function AuthForm({
	children,
	submitText,
	dividerText,
	footerText,
	footerHref,
	footerLinkText,
}: AuthFormProps) {
	return (
		<form className={styles['auth-form']}>
			{children}
			<button className={styles['auth-form__btn']}>
				<span>{submitText}</span>
				<img src='' alt='' aria-hidden='true' className={styles['auth-form__btn-icon']} />
			</button>
			<div className={styles['auth-form__socials-divider']}>
				<span className={styles['auth-form__socials-icon']} />
				<span className={styles['auth-form__text']}>{dividerText}</span>
				<span className={styles['auth-form__socials-icon']} />
			</div>
			<div className={styles['auth-form__socials']}>
				<button type='button' className={styles['auth-form__social-btn']}>
					<img src='/img/icons/auth/google.svg' alt='Google logo' className={styles['auth-form__social-img']} />
				</button>
				<button type='button' className={styles['auth-form__social-btn']}>
					<img src='/img/icons/auth/discord.svg' alt='Discord logo' className={styles['auth-form__social-img']} />
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
