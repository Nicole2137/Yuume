import styles from './AuthAboutSection.module.scss'

export default function AuthAboutSection() {
	return (
		<section className={styles['auth-about-section']}>
			<h2 className={styles['auth-about-section__header']}>About us</h2>
			<div className={styles['auth-about-section__text-container']}>
				<span className={styles['auth-about-section__text']}>Yume connects kindred spirits in a shared dream.</span>
				<span className={styles['auth-about-section__text']}>
					Together, you enter a world that grows from what you both love.{' '}
				</span>
				<span className={styles['auth-about-section__text']}>
					It’s more than a chat — it’s a place to speak, create, and simply be, side by side.
				</span>
			</div>
		</section>
	)
}
