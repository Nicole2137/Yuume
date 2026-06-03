import styles from './Nav.module.scss'
import Link from 'next/link'
import { navItems } from '@/constants/nav'

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<img src="/img/nav-logo.svg" alt="" className={styles.nav__logo} />
			<ul className={styles.nav__list}>
				{navItems.map(item => (
					<li key={item.href} className={styles.nav__item}>
						<Link href={item.href} className={styles.nav__link}>
							{item.label}
						</Link>
					</li>
				))}
			</ul>
			<button className={styles.nav__btn}>join us ♡</button>
		</nav>
	)
}
