import { useForm } from 'react-hook-form'

interface LoginFields {
	email: string
	password: string
}

export const useLogin = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<LoginFields>()

	const onSubmit = async (data: LoginFields) => {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email, password: data.password }),
			})

			if (!response.ok) {
				throw new Error(`Login request failed with status ${response.status}.`)
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
