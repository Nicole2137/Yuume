import Link from 'next/link'
import styles from './MobileNav.module.scss'
import { navItems } from '@/constants/nav'
import { ChevronRight, Heart } from 'lucide-react'

interface MobileNavInterface {
	isOpen: boolean
}

export default function MobileNav({ isOpen }: MobileNavInterface) {
	return (
		<article className={`${styles['mobile-nav']} ${isOpen ? styles['mobile-nav--active'] : ''}`}>
			<ul className={styles['mobile-nav__list']}>
				{navItems.map(item => (
					<li key={item.href} className={styles['mobile-nav__item']}>
						<Link href={item.href} className={styles['mobile-nav__link']}>
							<div className={styles['mobile-nav__info']}>
								<img src={item.iconPath} alt='' aria-label='hidden' className={styles['mobile-nav__icon']} />
								<span className={styles['mobile-nav__label']}>{item.label}</span>
							</div>
							<ChevronRight className={styles['mobile-nav__chevron-icon']} />
						</Link>
					</li>
				))}
			</ul>
			<div className={styles['mobile-nav__decoration']}>
				<span>--------------------</span>
				<img
					src='/img/decorations/tagline-star2.svg'
					alt=''
					aria-hidden='true'
					className={styles['mobile-nav__star-icon']}
				/>
				<span>--------------------</span>
			</div>
			<Link href='/login' className={styles['mobile-nav__btn']}>
				<span className={styles['mobile-nav__btn-text']}>join us</span>
				<Heart className={styles['mobile-nav__btn-icon']} />
			</Link>
		</article>
	)
}
