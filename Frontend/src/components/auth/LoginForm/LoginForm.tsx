'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
import Link from 'next/link'

export default function LoginForm() {
	return (
		<AuthForm
			submitText='Log in'
			dividerText='or continue with'
			footerText='Don’t have an account?'
			footerHref='/register'
			footerLinkText='Sign up'>
			<input
				type='email'
				placeholder='Email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>

			<PasswordInput placeholder='Password' autoComplete='current-password' />

			<div className={styles['auth-form__options']}>
				<label className={styles['auth-form__checkbox-options']}>
					<input type='checkbox' className={styles['auth-form__checkbox']} />
					<span className={`${styles['auth-form__text']} ${styles['auth-form__text--focus']}`}>Remember me</span>
				</label>

				<Link href='/reset-password' className={`${styles['auth-form__text']} ${styles['auth-form__text--focus']}`}>
					Forgot password?
				</Link>
			</div>
		</AuthForm>
	)
}
