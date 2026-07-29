'use client'

import styles from '@/components/auth/AuthForm/AuthForm.module.scss'
import { useState } from 'react'
import { type UseFormRegisterReturn } from 'react-hook-form'
import FormErrorMessage from '@/components/layout/FormErrorMessage/FormErrorMessage'

interface PasswordInputProps {
	registration: UseFormRegisterReturn
	errorMessage?: string
	disabled: boolean
	placeholder: string
	autoComplete: 'current-password' | 'new-password'
}

export default function PasswordInput({
	registration,
	errorMessage,
	disabled,
	placeholder,
	autoComplete,
}: PasswordInputProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	return (
		<div className={styles['auth-form__input-field']}>
			<input
				type={isPasswordVisible ? 'text' : 'password'}
				{...registration}
				disabled={disabled}
				placeholder={placeholder}
				aria-label={placeholder}
				autoComplete={autoComplete}
				className={`${styles['auth-form__input']} ${styles['auth-form__input--password']}`}
			/>
			<button
				type='button'
				onClick={() => setIsPasswordVisible(visible => !visible)}
				aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
				className={styles['auth-form__input-btn']}>
				<img
					src={isPasswordVisible ? '/img/icons/auth/password-visible.svg' : '/img/icons/auth/password-hidden.svg'}
					alt=''
					aria-hidden='true'
					className={styles['auth-form__input-icon']}
				/>
			</button>
			<FormErrorMessage errorMessage={errorMessage} />
		</div>
	)
}
