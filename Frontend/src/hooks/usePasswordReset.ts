import { useForm } from 'react-hook-form'

interface PasswordResetFields {
	email: string
}

export const usePasswordReset = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<PasswordResetFields>()

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
		isSubmitting,
		handleSubmit: handleSubmit(onSubmit),
	}
}
