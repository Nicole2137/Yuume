import styles from './SpeechBubble.module.scss'

export default function SpeechBubble() {
	return (
		<div className={styles['speech-bubble']}>
			<img src="/img/decorations/speech-bubble.svg" alt="" className={styles['speech-bubble__img']} />
			<span className={styles['speech-bubble__text']}>welcome to yuume ♡</span>
		</div>
	)
}
