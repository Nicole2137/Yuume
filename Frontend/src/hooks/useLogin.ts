import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFields } from '@/schemas/auth/loginSchema'

export const useLogin = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<LoginFields>({ resolver: zodResolver(loginSchema) })

	const onSubmit = async (data: LoginFields) => {
		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email, password: data.password, rememberMe: data.rememberMe }),
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
		errors,
		isSubmitting,
		handleSubmit: handleSubmit(onSubmit),
	}
}
