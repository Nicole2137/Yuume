import styles from './SpeechBubble.module.scss'

interface SpeechBubbleInterface {
	text: string
}

export default function SpeechBubble({ text }: SpeechBubbleInterface) {
	return (
		<div className={styles['speech-bubble']}>
			<img
				src='/img/decorations/speech-bubble.svg'
				alt=''
				aria-hidden='true'
				className={styles['speech-bubble__img']}
			/>
			<span className={styles['speech-bubble__text']}>{text} ♡</span>
		</div>
	)
}
