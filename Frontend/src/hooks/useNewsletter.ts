import { error } from 'console'
import { useState, type SubmitEvent } from 'react'

export const useNewsletter = () => {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()
		setStatus('loading')

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})

			if (!response.ok) {
				throw new Error(`Newsletter request failed with status ${response.status}`)
			}

			setStatus('success')
			setEmail('')
		} catch (error) {
			console.error(error)
			setStatus('error')
		}
	}

	return {
		email,
		setEmail,
		status,
		handleSubmit,
	}
}
