import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema, type PasswordResetFields } from '@/schemas/auth/resetPasswordSchema'

export const usePasswordReset = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<PasswordResetFields>({ resolver: zodResolver(resetPasswordSchema) })

	const onSubmit = async (data: PasswordResetFields) => {
		try {
			const response = await fetch('/api/reset-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email }),
			})

			if (!response.ok) {
				throw new Error(`Password reset request failed with status ${response.status}`)
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
