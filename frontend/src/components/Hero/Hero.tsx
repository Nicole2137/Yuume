import Image from 'next/image'
import styles from './Hero.module.scss'
import SpeechBubble from '@/components/SpeechBubble/SpeechBubble'
import HeroTagline from '@/components/HeroTagline/HeroTagline'
import MoodCard from '@/components/MoodCard/MoodCard'
import HeroInfoCard from '@/components/HeroInfoCard/HeroInfoCard'
import NewsletterCard from '@/components/NewsletterCard/NewsletterCard'
import { heroInfoCardItems } from '@/constants/heroInfoCard'
import cloudBackground from '@public/img/decorations/cloud-background.png'

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
					It's okay to feel alone sometimes.
					<br />
					But there is always a dream where someone understands.
				</p>
				<div className={styles.hero__btns}>
					<button className={styles.hero__btn}>
						<span className={styles['hero__btn-text']}>Begin Within</span>
						<img src='/img/decorations/btn-feather.svg' alt='' className={styles['hero__btn-icon']} />
					</button>
					<button className={`${styles.hero__btn} ${styles['hero__btn--white']}`}>
						<span className={styles['hero__btn-text']}>Explore Dreams</span>
						<img src='/img/decorations/btn-star.svg' alt='' className={styles['hero__btn-icon']} />
					</button>
				</div>
			</article>
			<figure className={styles.hero__figure}>
				<video autoPlay loop muted playsInline className={styles['hero__girl-animation']}>
					<source src='/video/girl-animation.webm' type='video/webm' />
					<source src='/video/girl-animation.mp4' type='video/mp4' />
					Videos are not supported by your browser.
				</video>
				<div className={styles['hero__cloud-speech-bubble']}>
					<img
						src='/img/decorations/cloud-speech-bubble.svg'
						alt=''
						className={styles['hero__cloud-speech-bubble-img']}
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
			<ul className={styles['hero__cards-list']}>
				{heroInfoCardItems.map(item => (
					<li key={item.imgSrc} className={styles['hero__card-item']}>
						<HeroInfoCard {...item} />
					</li>
				))}
			</ul>
			<NewsletterCard />
			<Image src={cloudBackground} alt='' className={styles['hero__cloud-background']} priority />
		</section>
	)
}
