import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { passwordResetSchema, type PasswordResetFields } from '@/schemas/auth/passwordResetSchema'

export const usePasswordReset = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<PasswordResetFields>({ resolver: zodResolver(passwordResetSchema) })

    const onSubmit = async (data: PasswordResetFields) => {
        try {
            const response = await fetch('/api/password-reset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({password: data.password}),
            })

            if (!response.ok) {
                throw new Error(`Password reset request failed with status ${response.status}.`)
            }

            reset()
        } catch (error) {
            console.error(error)
        }
    }

    return {
        register,
        errors,
        isSubmitting,
        handleSubmit: handleSubmit(onSubmit),
    }
}
