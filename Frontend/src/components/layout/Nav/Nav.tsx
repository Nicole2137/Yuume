'use client'

import styles from './Nav.module.scss'
import Link from 'next/link'
import { type NavVariant, navItems } from '@/constants/nav'
import { Heart } from 'lucide-react'
import BurgerButton from '@/components/layout/BurgerButton/BurgerButton'
import MobileNav from '@/components/layout/MobileNav/MobileNav'
import { useMobileNav } from '@/hooks/useMobileNav'
import { motion } from 'motion/react'

interface NavProps {
	variant: NavVariant
	logoSrc: string
}

export default function Nav({ variant, logoSrc }: NavProps) {
	const { isOpen, setIsOpen, mobileNavRef, dragX, overlayOpacity } = useMobileNav()

	return (
		<>
			<nav className={styles.nav}>
				<Link href='/' aria-label='Return to homepage'>
					<img
						src={logoSrc}
						alt='Logo of Yuume. Portraying a little cat icon and application name.'
						className={styles.nav__logo}
					/>
				</Link>
				<ul className={styles.nav__list}>
					{navItems.map(item => (
						<li key={item.href} className={styles.nav__item}>
							<Link href={item.href} className={styles.nav__link}>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<Link href='/login' className={styles.nav__btn}>
					<span className={styles['nav__btn-text']}>join us</span>
					<Heart className={styles['nav__btn-icon']} />
				</Link>
			</nav>

			<BurgerButton className={styles['nav__menu-icon']} isOpen={isOpen} onClick={() => setIsOpen(prev => !prev)} />

			<MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} dragX={dragX} mobileNavRef={mobileNavRef} />

			<motion.div
				aria-hidden='true'
				onClick={() => setIsOpen(false)}
				className='overlay'
				data-testid='overlay'
				style={{
					opacity: overlayOpacity,
					pointerEvents: isOpen ? 'auto' : 'none',
				}}
			/>
		</>
	)
}
