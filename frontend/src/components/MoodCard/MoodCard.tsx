'use client'

import { useState } from 'react'
import styles from './MoodCard.module.scss'
import { moodListItems, defaultMood } from '@/constants/moodList'

export default function MoodCard() {
	const [currentMood, setCurrentMood] = useState(defaultMood)

	return (
		<article className={styles['mood-card']}>
			<div className={styles['mood-card__header']}>
				<span className={styles['mood-card__header-text']}>Today's Mood</span>
				<img
					className={styles['mood-card__header-img']}
					src='/img/decorations/logo-cat.svg'
					alt=''
					aria-hidden='true'
				/>
			</div>

			<hr />

			<div className={styles['mood-card__main']}>
				<span className={styles['mood-card__current-mood']}>{currentMood}</span>
				<ul className={styles['mood-card__list']}>
					{moodListItems.map(item => (
						<li key={item.moodText} className={styles['mood-card__list-item']}>
							<button
								onMouseEnter={() => setCurrentMood(item.moodText)}
								onFocus={() => setCurrentMood(item.moodText)}
								aria-label={`Set mood to ${item.moodText}`}
								className={styles['mood-card__list-btn']}></button>
						</li>
					))}
				</ul>
			</div>

			<img
				src='/img/decorations/little-cloud.svg'
				alt=''
				aria-hidden='true'
				className={styles['mood-card__cloud-icon']}
			/>
		</article>
	)
}
