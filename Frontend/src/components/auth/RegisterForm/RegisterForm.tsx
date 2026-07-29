'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
import { useRegister } from '@/hooks/useRegister'

export default function RegisterForm() {
	const { register, errors, isSubmitting, handleSubmit } = useRegister()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			submitText='Sign up'
			isSubmitting={isSubmitting}
			dividerText='or sign up with'
			footerText='Already have an account?'
			footerHref='/login'
			footerLinkText='Log in'>
			<input
				type='email'
				{...register('email')}
				disabled={isSubmitting}
				placeholder='Email'
				aria-label='Email address'
				autoComplete='email'
				className={styles['auth-form__input']}
			/>

			<PasswordInput
				registration={register('password')}
				disabled={isSubmitting}
				placeholder='Password'
				autoComplete='new-password'
			/>

			<PasswordInput
				registration={register('repeatedPassword')}
				disabled={isSubmitting}
				placeholder='Confirm password'
				autoComplete='new-password'
			/>

			<div className={`${styles['auth-form__options']} ${styles['auth-form__options--register']}`}>
				<label className={styles['auth-form__checkbox-options']}>
					<input type='checkbox' {...register('acceptedTerms')} className={styles['auth-form__checkbox']} />
					<span className={styles['auth-form__text']}>I agree to the</span>
				</label>

				<button type='button' disabled={isSubmitting} className={styles['auth-form__modal-btn']}>
					Terms of Service
				</button>
			</div>
		</AuthForm>
	)
}
