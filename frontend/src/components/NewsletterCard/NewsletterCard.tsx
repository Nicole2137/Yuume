import styles from './NewsletterCard.module.scss'

export default function NewsletterCard() {
	return (
		<article className={styles['newsletter-card']}>
			<div className={styles['newsletter-card__text-content']}>
				<span className={styles['newsletter-card__title']}>Follow Yuume’s growth</span>
				<p className={styles['newsletter-card__text']}>
					Receive updates about new features
					<br />
					and the world we’re building together.
				</p>
			</div>
			<form action='' className={styles['newsletter-card__form']}>
				<input
					placeholder='Enter your email address'
					type='email'
					aria-label='Email address'
					className={styles['newsletter-card__input']}
					required
				/>
				<button className={styles['newsletter-card__btn']} aria-label='Sign to newsletter'>
					<img src='/img/decorations/send-icon.svg' alt='' className={styles['newsletter-card__img']} />
				</button>
			</form>
		</article>
	)
}
