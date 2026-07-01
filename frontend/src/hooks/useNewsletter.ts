import { useState, type SubmitEvent } from 'react'

export const useNewsletter = () => {
	const [email, setEmail] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()
		setStatus('loading')

		try {
			await new Promise(resolve => setTimeout(resolve, 1000))
			setStatus('success')
			setEmail('')
		} catch (error) {
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
