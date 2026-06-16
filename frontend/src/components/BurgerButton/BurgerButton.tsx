import styles from './BurgerButton.module.scss'

interface BurgerButtonInterface {
	className?: string
	isOpen: boolean
	onClick: () => void
}

export default function BurgerButton({ onClick, className = '', isOpen }: BurgerButtonInterface) {
	return (
		<button
			onClick={onClick}
			aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
			type='button'
			className={`${styles['burger-btn']} ${isOpen ? styles['burger-btn--active'] : ''} ${className}`}>
			<span />
			<span />
			<span />
		</button>
	)
}
