import styles from './Nav.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import logo from '@/../public/img/logo.png'
import { navItems } from '@/constants/nav'

export default function Nav() {
	return (
		<nav className={styles.nav}>
			<Image src={logo} alt='Logo of Yuume portraying a cute kitty and name.' className={styles.nav__logo} priority />
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
