import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import ResetPasswordForm from '@/components/auth/ResetPasswordForm/ResetPasswordForm'

export default function ResetPasswordPage() {
	return (
		<AuthFormSection
			greeting='welcome back'
			title='Reset your password'
			subtitle='no worries, we’ve all been here'
			description='Enter your email address and we’ll send you a link to reset your password.'>
			<ResetPasswordForm />
		</AuthFormSection>
	)
}
