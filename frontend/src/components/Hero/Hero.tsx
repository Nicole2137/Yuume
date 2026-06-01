import styles from './Hero.module.scss'
import SpeechBubble from '@/components/SpeechBubble/SpeechBubble'
import HeroTagline from '@/components/HeroTagline/HeroTagline'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<article className={styles.hero__article}>
				<SpeechBubble />
				<h1 className={styles.hero__heading}>
					How to Create <br />
					<span>Gentle</span> Dreams.
				</h1>
				<HeroTagline />
				<p className={styles.hero__description}>
					A little place where gentle feelings gather.
					<br />
					We share illustrations, stories, and everyday sparkles.
				</p>
				<div className={styles.hero__btns}>
					<button className={styles.hero__btn}>Explore the World</button>
					<button className={styles.hero__btn}>View Gallery</button>
				</div>
			</article>
			<figure className={styles.hero__figure}></figure>
		</section>
	)
}
