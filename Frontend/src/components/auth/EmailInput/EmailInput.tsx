import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import { type UseFormRegisterReturn } from 'react-hook-form'
import FormErrorMessage from '@/components/layout/FormErrorMessage/FormErrorMessage'

interface EmailInputProps {
	registration: UseFormRegisterReturn
	errorMessage?: string
	disabled: boolean
}

export default function EmailInput({ registration, errorMessage, disabled }: EmailInputProps) {
	return (
		<div className={styles['auth-form__input-field']}>
			<input
				type='email'
				{...registration}
				disabled={disabled}
				placeholder='Email'
				aria-label='Email address'
				autoComplete='email'
				className={styles['auth-form__input']}
			/>
			<FormErrorMessage errorMessage={errorMessage} />
		</div>
	)
}
