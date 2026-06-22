import styles from './Footer.module.scss'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<img className={styles.footer__img} src='/img/decorations/footer-cloud.svg' alt='' />
			<div className={styles.footer__content}>
				<img
					src='/img/footer-logo.svg'
					alt='Logo of yuume portraying a company name with stars'
					className={styles['footer__logo']}
				/>
				<span className={`${styles.footer__text} ${styles['footer__text--desktop']}`}>
					a soft little place that stays close to you
				</span>

				<span className={`${styles.footer__text} ${styles['footer__text--mobile']}`}>your dreams</span>

				<img src='/img/decorations/tagline-star2.svg' alt='' className={styles.footer__decoration} />
			</div>
		</footer>
	)
}
