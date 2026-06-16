'use client'

import { useState } from 'react'
import styles from './Nav.module.scss'
import Link from 'next/link'
import { navItems } from '@/constants/nav'
import { Heart } from 'lucide-react'
import BurgerButton from '@/components/BurgerButton/BurgerButton'
import MobileNav from '@/components/MobileNav/MobileNav'

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<nav className={styles.nav}>
			<Link href='#' aria-label='Return to homepage'>
				<img src='/img/nav-logo.svg' alt='' className={styles.nav__logo} />
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

			<BurgerButton className={styles['nav__menu-icon']} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

			{isOpen && <MobileNav />}
		</nav>
	)
}
