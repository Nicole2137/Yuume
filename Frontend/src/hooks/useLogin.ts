import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema, type LoginFields } from '@/schemas/auth/loginSchema'

export const useLogin = () => {
	const {
		register,
		handleSubmit,
		reset,
		setError,
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
				const message = await response.text()

				setError('root.server', {
					type: 'server',
					message,
				})

				return
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
