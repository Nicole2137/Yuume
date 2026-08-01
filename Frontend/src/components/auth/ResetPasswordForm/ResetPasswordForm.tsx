'use client'

import AuthForm from '@/components/auth/AuthForm/AuthForm'
import PasswordInput from '@/components/auth/PasswordInput/PasswordInput'
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
			<PasswordInput
				registration={register('password')}
				errorMessage={errors.password?.message}
				disabled={isSubmitting}
				placeholder='Password'
				autoComplete='new-password'
			/>
			<PasswordInput
				registration={register('repeatedPassword')}
				errorMessage={errors.repeatedPassword?.message}
				disabled={isSubmitting}
				placeholder='Confirm password'
				autoComplete='new-password'
			/>
		</AuthForm>
	)
}
