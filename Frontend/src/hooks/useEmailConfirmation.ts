import { use, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export interface ConfirmEmailPageProps {
	searchParams: Promise<{
		userId?: string
		token?: string
	}>
}

export const useEmailConfirmation = ({ searchParams }: ConfirmEmailPageProps) => {
	const { userId, token } = use(searchParams)
	const [hasError, setHasError] = useState(false)
	const router = useRouter()

	useEffect(() => {
		if (!userId || !token) return

		const confirmEmail = async () => {
			try {
				const response = await fetch('/api/confirm-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ userId, token }),
				})

				if (!response.ok) {
					throw new Error(`Confirm email request failed with status ${response.status}.`)
				}

				router.replace('/login')
			} catch (error) {
				console.error(error)
				setHasError(true)
			}
		}

		void confirmEmail()
	}, [userId, token, router])

	return { hasError }
}
