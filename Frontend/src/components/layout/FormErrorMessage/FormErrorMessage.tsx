import styles from './FormErrorMessage.module.scss'
import { CircleAlert } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

interface FormErrorMessageProps {
	errorMessage?: string
}

export default function FormErrorMessage({ errorMessage }: FormErrorMessageProps) {
	return (
		<AnimatePresence>
			{errorMessage && (
				<motion.div
					role='alert'
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -10 }}
					transition={{ duration: 0.2 }}
					className={styles['form-error-message']}>
					<CircleAlert className={styles['form-error-message__icon']} />
					<span className={styles['form-error-message__text']}>{errorMessage}</span>
				</motion.div>
			)}
		</AnimatePresence>
	)
}
