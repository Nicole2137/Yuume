import Image from 'next/image'
import Link from 'next/link'
import styles from './HomeHero.module.scss'
import { homeInfoCardItems } from '@/constants/homeInfoCard'
import cloudBackground from '@public/img/decorations/clouds/cloud-background.png'
import { Heart } from 'lucide-react'
import HomeSpeechBubble from '@/components/home/HomeSpeechBubble/HomeSpeechBubble'
import HomeHeroTagline from '@/components/home/HomeHeroTagline/HomeHeroTagline'
import HomeMoodCard from '@/components/home/HomeMoodCard/HomeMoodCard'
import HomeInfoCard from '@/components/home/HomeInfoCard/HomeInfoCard'
import HomeNewsletterCard from '@/components/home/HomeNewsletterCard/HomeNewsletterCard'

export default function HomeHero() {
	return (
		<section className={styles['home-hero']}>
			<div className={styles['home-hero__main']}>
				<article className={styles['home-hero__article']}>
					<div className={styles['home-hero__heading-wrapper']}>
						<HomeSpeechBubble text='welcome to yuume' Icon={Heart} />
						<h1 className={styles['home-hero__heading-text']}>
							How to Create <br />
							<span>Gentle</span> Dreams.
						</h1>
					</div>

					<HomeHeroTagline />
					<p className={styles['home-hero__description']}>
						It’s okay to feel alone sometimes.
						<br />
						But there is always a dream where someone understands.
					</p>
					<div className={styles['home-hero__btns']}>
						<Link href='/journal' className={styles['home-hero__btn']}>
							<span className={styles['home-hero__btn-text']}>Begin Within</span>
							<img
								src='/img/decorations/btn-feather.svg'
								alt=''
								aria-hidden='true'
								className={styles['home-hero__btn-icon']}
							/>
						</Link>
						<Link href='/community' className={`${styles['home-hero__btn']} ${styles['home-hero__btn--white']}`}>
							<span className={styles['home-hero__btn-text']}>Explore Dreams</span>
							<img
								src='/img/decorations/stars/btn-star.svg'
								alt=''
								aria-hidden='true'
								className={styles['home-hero__btn-icon']}
							/>
						</Link>
					</div>
				</article>
				<figure className={styles['home-hero__figure']}>
					<video
						autoPlay
						loop
						muted
						playsInline
						aria-hidden='true'
						poster='/img/animations/girl-animation.webp'
						className={styles['home-hero__girl-animation']}>
						<source src='/video/home/girl-animation.webm' type='video/webm' />
						<source src='/video/home/girl-animation.mp4' type='video/mp4' />
						Videos are not supported by your browser.
					</video>
					<div className={styles['home-hero__cloud-speech-bubble']}>
						<img
							src='/img/decorations/clouds/cloud-speech-bubble.svg'
							alt=''
							className={styles['home-hero__cloud-speech-bubble-img']}
						/>
						<p className={styles['home-hero__cloud-speech-bubble-text']}>
							You don’t <br />
							have to <br />
							know yet...
							<br />
							It’s okay to <br />
							feel a little <br />
							shy.
						</p>
					</div>

					<HomeMoodCard />
				</figure>
				<Image
					src={cloudBackground}
					alt=''
					aria-hidden='true'
					className={styles['home-hero__cloud-background']}
					preload
				/>
			</div>

			<ul className={styles['home-hero__cards-list']}>
				{homeInfoCardItems.map(item => (
					<li key={item.imgSrc} className={styles['home-hero__card-item']}>
						<HomeInfoCard {...item} />
					</li>
				))}
				<li className={`${styles['home-hero__card-item']} ${styles['home-hero__card-item--newsletter']}`}>
					<HomeNewsletterCard />
				</li>
			</ul>
		</section>
	)
}
