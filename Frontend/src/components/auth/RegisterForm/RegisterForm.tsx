'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
import { useRegister } from '@/hooks/useRegister'

export default function RegisterForm() {
	const { email, setEmail, password, setPassword, repeatedPassword, setRepeatedPassword, status, handleSubmit } =
		useRegister()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			status={status}
			submitText='Sign up'
			dividerText='or sign up with'
			footerText='Already have an account?'
			footerHref='/login'
			footerLinkText='Log in'>
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
				autoComplete='new-password'
			/>

			<PasswordInput
				value={repeatedPassword}
				onChange={event => setRepeatedPassword(event.target.value)}
				disabled={status === 'loading'}
				placeholder='Confirm password'
				autoComplete='new-password'
			/>

			<div className={`${styles['auth-form__options']} ${styles['auth-form__options--register']}`}>
				<label className={styles['auth-form__checkbox-options']}>
					<input type='checkbox' required className={styles['auth-form__checkbox']} />
					<span className={styles['auth-form__text']}>I agree to the</span>
				</label>

				<button type='button' disabled={status === 'loading'} className={styles['auth-form__modal-btn']}>
					Terms of Service
				</button>
			</div>
		</AuthForm>
	)
}
