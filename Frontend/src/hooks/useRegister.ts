import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema, type RegisterFields } from '@/schemas/auth/registerSchema'

export const useRegister = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isSubmitting },
	} = useForm<RegisterFields>({ resolver: zodResolver(registerSchema) })

	const router = useRouter()

	const onSubmit = async (data: RegisterFields) => {
		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email, password: data.password, acceptedTerms: data.acceptedTerms }),
			})

			if (!response.ok) {
				const message = await response.text()

				setError('root.server', {
					type: 'server',
					message,
				})

				return
			}

			router.push('/confirm-email')
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
