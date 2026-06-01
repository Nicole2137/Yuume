import styles from './HeroTagline.module.scss'
import Image from 'next/image'
import star1 from '@/../public/img/decorations/tagline-star1.svg'
import star2 from '@/../public/img/decorations/tagline-star2.svg'

export default function HeroTagline() {
	return (
		<div className={styles['hero-tagline']}>
			<Image className={styles['hero-tagline__img']} src={star1} alt='' priority />
			<span className={styles['hero-tagline__dashed-line']}>- - - -</span>
			<span className={styles['hero-tagline__text']}>soft thoughts, beautiful days.</span>
			<span className={styles['hero-tagline__dashed-line']}>- - - -</span>
			<Image className={styles['hero-tagline__img']} src={star2} alt='' priority />
		</div>
	)
}
