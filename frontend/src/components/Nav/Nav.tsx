import styles from './Nav.module.scss'
import Link from 'next/link'
import { navItems } from '@/constants/nav'
import { Heart } from 'lucide-react'

export default function Nav() {
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
			<button className={styles.nav__btn}>
				<span className={styles['nav__btn-text']}>join us</span>
				<Heart className={styles['nav__btn-icon']} />
			</button>
		</nav>
	)
}
