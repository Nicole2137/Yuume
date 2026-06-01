import styles from './SpeechBubble.module.scss'
import Image from 'next/image'
import speechbubble from '@/../public/img/decorations/speech-bubble.svg'

export default function SpeechBubble() {
	return (
		<div className={styles['speech-bubble']}>
			<Image
				className={styles['speech-bubble__img']}
				src={speechbubble}
				alt='Image portraying a simple speech bubble'
				priority
			/>
			<span className={styles['speech-bubble__text']}>welcome to yuume ♡</span>
		</div>
	)
}
