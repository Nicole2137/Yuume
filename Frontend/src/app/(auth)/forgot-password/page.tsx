import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import ForgotPasswordForm from '@/components/auth/ForgotPasswordForm/ForgotPasswordForm'

export default function ForgotPasswordPage() {
	return (
		<AuthFormSection
			greeting='welcome back'
			title='Forgot your password?'
			subtitle='no worries, we’ve all been here'
			description='Enter your email address and we’ll send you a link to reset your password.'>
			<ForgotPasswordForm />
		</AuthFormSection>
	)
}
