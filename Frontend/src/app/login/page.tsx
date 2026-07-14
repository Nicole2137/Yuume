import LoginHero from '@/components/login/LoginHero/LoginHero'
import styles from './login.module.scss'

export default function LoginPage() {
	return (
		<div className={styles.wrapper}>
			<main>
				<LoginHero />
			</main>
		</div>
	)
}
