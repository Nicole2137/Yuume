'use client'

import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import AuthForm from '@/components/auth/AuthForm/AuthForm'
import EmailInput from '@/components/auth/EmailInput/EmailInput'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
import Link from 'next/link'
import { useLogin } from '@/hooks/useLogin'

export default function LoginForm() {
	const { register, errors, isSubmitting, handleSubmit } = useLogin()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			isSubmitting={isSubmitting}
			submitText='Log in'
			dividerText='or continue with'
			footerText='Don’t have an account?'
			footerHref='/register'
			footerLinkText='Sign up'>
			<EmailInput
				registration={register('email')}
				errorMessage={errors.email?.message}
				disabled={isSubmitting}
			/>

			<PasswordInput
				registration={register('password')}
				errorMessage={errors.password?.message}
				disabled={isSubmitting}
				placeholder='Password'
				autoComplete='current-password'
			/>

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
