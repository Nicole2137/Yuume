import { type SubmitEvent, useState } from 'react'

export const usePasswordReset = () => {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()

		setStatus('loading')

		try {
			const response = await fetch('/api/reset-password', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email }),
			})

			if (!response.ok) {
				throw new Error(`Password reset request failed with status ${response.status}`)
			}

			setStatus('success')

			setEmail('')
		} catch (error) {
			console.error(error)
			setStatus('error')
		}
	}

	return { email, setEmail, status, handleSubmit }
}
