import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import ResetPasswordForm from '@/components/auth/RegisterForm/RegisterForm'

export default function ResetPasswordPage() {
    return (
        <AuthFormSection title='Reset your password'>
            <ResetPasswordForm />
        </AuthFormSection>
    )
}
