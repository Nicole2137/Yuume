'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
import Link from 'next/link'
import { useLogin } from '@/hooks/useLogin'

export default function LoginForm() {
	const { email, setEmail, password, setPassword, status, handleSubmit } = useLogin()
	return (
		<AuthForm
			onSubmit={handleSubmit}
			submitText='Log in'
			dividerText='or continue with'
			footerText='Don’t have an account?'
			footerHref='/register'
			footerLinkText='Sign up'>
			<input
				type='email'
				value={email}
				onChange={event => setEmail(event.target.value)}
				disabled={status === 'loading'}
				placeholder='Email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>

			<PasswordInput
				value={password}
				onChange={event => setPassword(event.target.value)}
				disabled={status === 'loading'}
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
