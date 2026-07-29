import { useForm } from 'react-hook-form'

interface RegisterFields {
	email: string
	password: string
	repeatedPassword: string
}

export const useRegister = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<RegisterFields>()

	const onSubmit = async (data: RegisterFields) => {
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email, password: data.password }),
			})

			if (!response.ok) {
				throw new Error(`Register request failed with status ${response.status}.`)
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
