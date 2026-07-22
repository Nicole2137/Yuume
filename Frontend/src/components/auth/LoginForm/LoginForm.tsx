import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
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
					autoComplete='current-password'
					required
					className={styles['auth-form__input']}
				/>

				<img src='' alt='' aria-hidden='true' className={styles['auth-form__input-icon']} />
			</div>

			<div className={styles['auth-form__options']}>
				<label className={styles['auth-form__checkbox-options']}>
					<input type='checkbox' className={styles['auth-form__checkbox']} />
					<span className={styles['auth-form__text']}>Remember me</span>
				</label>

				<Link href='/reset-password' className={styles['auth-form__text']}>
					Forgot password?
				</Link>
			</div>
		</AuthForm>
	)
}
