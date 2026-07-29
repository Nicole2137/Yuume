'use client'

import styles from './HomeNewsletterCard.module.scss'
import { useNewsletter } from '@/hooks/useNewsletter'

export default function HomeNewsletterCard() {
	const { register, errors, isSubmitting, handleSubmit } = useNewsletter()

	return (
		<article className={styles['home-newsletter-card']}>
			<div className={styles['home-newsletter-card__text-content']}>
				<span className={styles['home-newsletter-card__title']}>Follow Yuume’s growth</span>
				<p className={styles['home-newsletter-card__text']}>
					Receive updates about new features
					<br />
					and the world we’re building together.
				</p>
			</div>
			<form noValidate onSubmit={handleSubmit} className={styles['home-newsletter-card__form']}>
				<input
					type='email'
					{...register('email')}
					disabled={isSubmitting}
					placeholder='Enter your email address'
					aria-label='Email address'
					autoComplete='email'
					className={styles['home-newsletter-card__input']}
				/>
				<button
					aria-label='Subscribe to newsletter'
					disabled={isSubmitting}
					className={styles['home-newsletter-card__btn']}>
					<img
						src='/img/icons/home/send.svg'
						alt=''
						aria-hidden='true'
						className={styles['home-newsletter-card__img']}
					/>
				</button>
			</form>
		</article>
	)
}
