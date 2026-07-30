import styles from './FormErrorMessage.module.scss'
import { CircleAlert } from 'lucide-react'

interface FormErrorMessageProps {
	errorMessage?: string
}

export default function FormErrorMessage({ errorMessage }: FormErrorMessageProps) {
	if (!errorMessage) return null

	return (
		<div role='alert' className={styles['form-error-message']}>
			<CircleAlert className={styles['form-error-message__icon']} />
			<span className={styles['form-error-message__text']}>{errorMessage}</span>
		</div>
	)
}
