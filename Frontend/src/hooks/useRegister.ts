import { type SubmitEvent, useState } from 'react'

export const useRegister = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [repeatedPassword, setRepeatedPassword] = useState('')
	const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

	const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
		event.preventDefault()

		setStatus('loading')

		if (password === repeatedPassword) {
			throw new Error(`Passwords are not the same.`)
		}

		try {
			const response = await fetch('/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			if (!response.ok) {
				throw new Error(`Register request failed with status ${response.status}.`)
			}

			setStatus('success')

			setEmail('')
			setPassword('')
			setRepeatedPassword('')
		} catch (error) {
			console.error(error)
			setStatus('error')
		}
	}

	return { email, setEmail, password, setPassword, repeatedPassword, setRepeatedPassword, status, handleSubmit }
}
