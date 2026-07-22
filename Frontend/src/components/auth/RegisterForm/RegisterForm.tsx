import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'

export default function RegisterForm() {
	return (
		<AuthForm
			submitText='Sign up'
			dividerText='or sign up with'
			footerText='Already have an account?'
			footerHref='/login'
			footerLinkText='Log in'>
			<input
				placeholder='Email'
				type='email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>

			<div className={styles['auth-form__input-field']}>
				<input
					placeholder='Password'
					type='password'
					aria-label='Password'
					autoComplete='new-password'
					required
					className={styles['auth-form__input']}
				/>

				<img src='' alt='' aria-hidden='true' className={styles['auth-form__input-icon']} />
			</div>

			<div className={styles['auth-form__input-field']}>
				<input
					placeholder='Confirm password'
					type='password'
					aria-label='Confirm password'
					autoComplete='new-password'
					required
					className={styles['auth-form__input']}
				/>

				<img src='' alt='' aria-hidden='true' className={styles['auth-form__input-icon']} />
			</div>

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
