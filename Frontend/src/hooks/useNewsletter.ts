import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { newsletterSchema, type NewsletterFields } from '@/schemas/home/newsletterSchema'

export const useNewsletter = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<NewsletterFields>({ resolver: zodResolver(newsletterSchema) })

	const onSubmit = async (data: NewsletterFields) => {
		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email: data.email }),
			})

			if (!response.ok) {
				throw new Error(`Newsletter request failed with status ${response.status}.`)
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
