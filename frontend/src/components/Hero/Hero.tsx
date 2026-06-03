import Image from 'next/image'
import styles from './Hero.module.scss'
import SpeechBubble from '@/components/SpeechBubble/SpeechBubble'
import HeroTagline from '@/components/HeroTagline/HeroTagline'
import cloudSpeechBubble from '@/../public/img/decorations/cloud-speech-bubble.png'
import MoodCard from '@/components/MoodCard/MoodCard'

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
					<button className={styles.hero__btn}>Enter your dream</button>
					<button className={`${styles.hero__btn} ${styles['hero__btn--white']}`}>How it works</button>
				</div>
			</article>
			<figure className={styles.hero__figure}>
				<video autoPlay loop muted playsInline className={styles['hero__girl-animation']}>
					<source src='/img/girl-loop.webm' type='video/webm' />
					<source src='/img/girl-loop.mp4' type='video/mp4' />
					Videos are not supported by your browser.
				</video>

				<div className={styles['hero__cloud-speech-bubble']}>
					<Image
						src={cloudSpeechBubble}
						alt='Decorative cloud speech bubble'
						className={styles['hero__cloud-speech-bubble-img']}
						priority
					/>
					<p className={styles['hero__cloud-speech-bubble-text']}>
						You don't <br />
						have to <br />
						know yet...
						<br />
						It's okay to <br />
						feel a little <br />
						shy.
					</p>
				</div>

				<MoodCard />
			</figure>
		</section>
	)
}
