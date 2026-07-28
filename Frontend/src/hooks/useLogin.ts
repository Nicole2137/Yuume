import { type SubmitEvent, useState } from 'react'

export const useLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()

		setStatus('loading')

		try {
			const response = await fetch('/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			if (!response.ok) {
				throw new Error(`Login request failed with status ${response.status}.`)
			}

			setEmail('')
			setPassword('')
			setStatus('success')
		} catch (error) {
			console.error(error)
			setStatus('error')
		}
	}

	return { email, setEmail, password, setPassword, status, handleSubmit }
}
