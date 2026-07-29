import { useForm } from 'react-hook-form'

interface NewsletterFields {
	email: string
}

export const useNewsletter = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting },
	} = useForm<NewsletterFields>()

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
		isSubmitting,
		handleSubmit: handleSubmit(onSubmit),
	}
}
