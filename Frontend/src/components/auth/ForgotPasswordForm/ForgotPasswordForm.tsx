'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import EmailInput from '@/components/auth/EmailInput/EmailInput'
import { useForgotPassword } from '@/hooks/useForgotPassword'

export default function ForgotPasswordForm() {
	const { register, errors, isSubmitting, handleSubmit } = useForgotPassword()

	return (
		<AuthForm
			onSubmit={handleSubmit}
			isSubmitting={isSubmitting}
			submitText='Send reset link'
			dividerText='or continue with'
			footerText='Remember your password?'
			footerLinkText='Log in'
			footerHref='/login'>
			<EmailInput
				registration={register('email')}
				errorMessage={errors.email?.message}
				disabled={isSubmitting}
			/>
		</AuthForm>
	)
}
