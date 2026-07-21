import styles from './LoginForm.module.scss'
import Link from 'next/link'

export default function LoginForm() {
	return (
		<form className={styles['login-form']}>
			<div className={styles['login-form__input-field']}>
				<img src='' alt='' aria-hidden='true' className={styles['login-form__input-icon']} />
				<input
					placeholder='Email'
					type='email'
					aria-label='Email address'
					autoComplete='email'
					required
					className={styles['login-form__input']}
				/>
			</div>
			<div className={styles['login-form__input-field']}>
				<img src='' alt='' aria-hidden='true' className={styles['login-form__input-icon']} />
				<input
					placeholder='Password'
					type='password'
					aria-label='Password'
					autoComplete='current-password'
					required
					className={styles['login-form__input']}
				/>
				<img src='' alt='' aria-hidden='true' className={styles['login-form__input-icon']} />
			</div>
			<label className={styles['login-form__options']}>
				<div className={styles['login-form__checkbox-options']}>
					<input type='checkbox' className={styles['login-form__checkbox']} />
					<span className={styles['login-form__text']}>Remember me</span>
				</div>
				<Link href='/reset-password'>Forgot password?</Link>
			</label>
			<button className={styles['login-form__btn']}>
				<span>Log in</span>
				<img src='' alt='' aria-hidden='true' className={styles['login-form__btn-icon']} />
			</button>
			<div className={styles['login-form__socials-divider']}>
				<span className={styles['login-form__text']}>or continue with</span>
			</div>
			<div className={styles['login-form__socials']}>
				<button type='button' className={styles['login-form__social-link']}>
					<img src='' alt='Google logo' className={styles['login-form__social-img']} />
				</button>
				<button type='button' className={styles['login-form__social-link']}>
					<img src='' alt='Discord logo' className={styles['login-form__social-img']} />
				</button>
			</div>
			<span className={styles['login-form__text']}>
				Don’t have an account?
				<Link href='/register' className={styles['login-form__register-link']}>
					Sign up
				</Link>
			</span>
		</form>
	)
}
