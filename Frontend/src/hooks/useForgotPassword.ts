import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgotPasswordSchema, type ForgotPasswordFields } from '@/schemas/auth/forgotPasswordSchema'

export const useForgotPassword = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ForgotPasswordFields>({ resolver: zodResolver(forgotPasswordSchema) })

	const onSubmit = async (data: ForgotPasswordFields) => {
		try {
			const response = await fetch('/api/forgot-password', {
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
