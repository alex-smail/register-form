/* eslint-disable react/prop-types */
import styles from './App.module.css';

export const AppLayout = (props) => (
	<div className={styles.appContainer}>
		<h1 className={styles.title}>Зарегистрироваться</h1>
		<p className={styles.dsc}>
			Уже есть аккаунт? <a href="#">Войти</a>
		</p>
		<form className={styles.form} onSubmit={props.handleSubmit}>
			{props.errors.email && (
				<div className={styles.errorLabel}>
					{props.errors.email.message}
				</div>
			)}
			<input
				name="email"
				type="email"
				placeholder="Почта"
				{...props.register('email')}
			/>
			{props.errors.password && (
				<div className={styles.errorLabel}>
					{props.errors.password.message}
				</div>
			)}
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				{...props.register('password')}
			/>
			{props.errors.confirmPassword && (
				<div className={styles.errorLabel}>
					{props.errors.confirmPassword.message}
				</div>
			)}
			<input
				name="confirmPassword"
				type="password"
				placeholder="Повторить пароль"
				{...props.register('confirmPassword')}
			/>
			<button
				type="submit"
				disabled={Object.keys(props.errors).length > 0}
			>
				Зарегистрироваться
			</button>
		</form>
	</div>
);
