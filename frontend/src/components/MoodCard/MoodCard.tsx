import styles from './MoodCard.module.scss'

export default function MoodCard() {
	return (
		<div className={styles['mood-card']}>
			<div className={styles['mood-card__header']}>
				<span className={styles['mood-card__header-text']}>Today's Mood</span>
				<img className={styles['mood-card__header-img']} src='/img/decorations/logo-cat.svg' alt='' />
			</div>
			<hr />

			<div className={styles['mood-card__body']}>
				<div className={styles['mood-card__main']}>
					<span className={styles['mood-card__current-mood']}>a little cloudy.</span>
					<ul className={styles['mood-card__list']}>
						<li className={styles['mood-card__list-item']}>
							<button className={styles['mood-card__list-btn']}></button>
						</li>
						<li className={styles['mood-card__list-item']}>
							<button className={styles['mood-card__list-btn']}></button>
						</li>
						<li className={styles['mood-card__list-item']}>
							<button className={styles['mood-card__list-btn']}></button>
						</li>
						<li className={styles['mood-card__list-item']}>
							<button className={styles['mood-card__list-btn']}></button>
						</li>
						<li className={styles['mood-card__list-item']}>
							<button className={styles['mood-card__list-btn']}></button>
						</li>
					</ul>
				</div>
                <div className={styles['mood-card__img-container']}></div>
			</div>

			<img src='/img/decorations/little-cloud.svg' alt='' className={styles['mood-card__cloud-icon']} />
		</div>
	)
}
