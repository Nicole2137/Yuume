'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'

export default function RegisterForm() {
	return (
		<AuthForm
			submitText='Sign up'
			dividerText='or sign up with'
			footerText='Already have an account?'
			footerHref='/login'
			footerLinkText='Log in'>
			<input
				type='email'
				placeholder='Email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>

			<PasswordInput placeholder='Password' autoComplete='new-password' />

			<PasswordInput placeholder='Confirm password' autoComplete='new-password' />

			<div className={`${styles['auth-form__options']} ${styles['auth-form__options--register']}`}>
				<label className={styles['auth-form__checkbox-options']}>
					<input type='checkbox' className={styles['auth-form__checkbox']} />
					<span className={styles['auth-form__text']}>I agree to the</span>
				</label>

				<button type='button' className={styles['auth-form__modal-btn']}>
					Terms of Service
				</button>
			</div>
		</AuthForm>
	)
}
