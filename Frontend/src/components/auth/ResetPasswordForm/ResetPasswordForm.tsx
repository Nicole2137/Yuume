import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'

export default function ResetPasswordForm() {
	return (
		<AuthForm
			submitText='Send reset link'
			dividerText='or continue with'
			footerText='Remember your password?'
			footerLinkText='Log in'
			footerHref='/login'>
			<input
				placeholder='Email'
				type='email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>
		</AuthForm>
	)
}
