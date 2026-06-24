import Link from 'next/link'
import styles from './MobileNav.module.scss'
import { navItems } from '@/constants/nav'
import { ChevronRight, Heart } from 'lucide-react'
import { motion, type MotionValue, useTransform } from 'motion/react'
import { RefObject } from 'react'

interface MobileNavProps {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
	dragX: MotionValue<number>
	mobileNavRef: RefObject<HTMLElement | null>
}

export default function MobileNav({ isOpen, setIsOpen, dragX, mobileNavRef }: MobileNavProps) {
	const dragXPercentage = useTransform(dragX, value => `${value}%`)

	return (
		<motion.nav
			className={styles['mobile-nav']}
			aria-hidden={!isOpen}
			inert={!isOpen}
			style={{ x: dragXPercentage }}
			ref={mobileNavRef}>
			<ul className={styles['mobile-nav__list']}>
				{navItems.map(item => (
					<li key={item.href} className={styles['mobile-nav__item']}>
						<Link href={item.href} onClick={() => setIsOpen(false)} className={styles['mobile-nav__link']}>
							<div className={styles['mobile-nav__info']}>
								<img src={item.iconPath} alt='' aria-hidden='true' className={styles['mobile-nav__icon']} />
								<span className={styles['mobile-nav__label']}>{item.label}</span>
							</div>
							<ChevronRight className={styles['mobile-nav__chevron-icon']} />
						</Link>
					</li>
				))}
			</ul>
			<div aria-hidden='true' className={styles['mobile-nav__decoration']}>
				<img
					src='/img/decorations/tagline-star2.svg'
					alt=''
					aria-hidden='true'
					className={styles['mobile-nav__star-icon']}
				/>
			</div>
			<Link href='/login' onClick={() => setIsOpen(false)} className={styles['mobile-nav__btn']}>
				<span className={styles['mobile-nav__btn-text']}>join us</span>
				<Heart className={styles['mobile-nav__btn-icon']} />
			</Link>
		</motion.nav>
	)
}
