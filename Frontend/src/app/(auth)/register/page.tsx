import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import RegisterForm from '@/components/auth/RegisterForm/RegisterForm'

export default function RegisterPage() {
	return (
		<AuthFormSection
			greeting='welcome, dreamer'
			title='Create your account'
			subtitle='join Yuume and begin your journey'>
			<RegisterForm />
		</AuthFormSection>
	)
}
