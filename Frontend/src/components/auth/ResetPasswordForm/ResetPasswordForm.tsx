import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import { usePasswordReset } from '@/hooks/usePasswordReset'

export default function ResetPasswordForm() {
	const { email, setEmail, status, handleSubmit } = usePasswordReset()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			submitText='Send reset link'
			dividerText='or continue with'
			footerText='Remember your password?'
			footerLinkText='Log in'
			footerHref='/login'>
			<input
				placeholder='Email'
				value={email}
				onChange={event => setEmail(event.target.value)}
				disabled={status === 'loading'}
				type='email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>
		</AuthForm>
	)
}
