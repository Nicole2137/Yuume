import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import LoginForm from '@/components/auth/LoginForm/LoginForm'

export default function LoginPage() {
	return (
		<AuthFormSection greeting='welcome back' title='Log in to your dreams' subtitle='a soft place for gentle souls'>
			<LoginForm />
		</AuthFormSection>
	)
}
