'use client'

import AuthFormSection from '@/components/auth/AuthFormSection/AuthFormSection'
import styles from '@/components/auth/AuthFormSection/AuthFormSection.module.scss'
import { type ConfirmEmailPageProps, useEmailConfirmation } from '@/hooks/useEmailConfirmation'

export default function ConfirmEmailPage({ searchParams }: ConfirmEmailPageProps) {
	const { hasError } = useEmailConfirmation({ searchParams })

	return (
		<AuthFormSection
			greeting='almost there'
			title='Check your email'
			description='We sent you a confirmation link. Open your inbox and click it to activate your account.'>
			<p className={styles['auth-form-section__status']}>
				{hasError && 'This confirmation link is invalid or has expired.'}
			</p>
		</AuthFormSection>
	)
}
