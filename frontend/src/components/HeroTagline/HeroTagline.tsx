import styles from './HeroTagline.module.scss'

export default function HeroTagline() {
	return (
		<div className={styles['hero-tagline']}>
			<img src='/img/decorations/tagline-star1.svg' alt='' aria-hidden='true' className={styles['hero-tagline__img']} />
			<span className={styles['hero-tagline__dashed-line']}>- - - -</span>
			<span className={styles['hero-tagline__text']}>soft thoughts, beautiful days.</span>
			<span className={styles['hero-tagline__dashed-line']}>- - - -</span>
			<img src='/img/decorations/tagline-star2.svg' alt='' aria-hidden='true' className={styles['hero-tagline__img']} />
		</div>
	)
}
