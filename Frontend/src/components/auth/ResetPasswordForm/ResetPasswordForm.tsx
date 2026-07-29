'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import { usePasswordReset } from '@/hooks/usePasswordReset'

export default function ResetPasswordForm() {
	const { register, errors, isSubmitting, handleSubmit } = usePasswordReset()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			isSubmitting={isSubmitting}
			submitText='Send reset link'
			dividerText='or continue with'
			footerText='Remember your password?'
			footerLinkText='Log in'
			footerHref='/login'>
			<input
				placeholder='Email'
				{...register('email')}
				disabled={isSubmitting}
				type='email'
				aria-label='Email address'
				autoComplete='email'
				required
				className={styles['auth-form__input']}
			/>
		</AuthForm>
	)
}
