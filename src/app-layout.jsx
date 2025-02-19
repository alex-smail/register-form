/* eslint-disable react/prop-types */
import styles from './App.module.css';

export const AppLayout = (props) => (
	<div className={styles.appContainer}>
		<h1 className={styles.title}>Зарегистрироваться</h1>
		<p className={styles.dsc}>
			Уже есть аккаунт? <a href="#">Войти</a>
		</p>
		<form className={styles.form} onSubmit={props.handleSubmit}>
			{props.validateError && (
				<div className={styles.errorLabel}>{props.validateError}</div>
			)}
			<input
				name="email"
				type="email"
				placeholder="Почта"
				value={props.email}
				onChange={props.handleChange}
			/>
			<input
				name="password"
				type="password"
				placeholder="Пароль"
				value={props.password}
				onChange={props.handleChange}
			/>
			<input
				name="confirmPassword"
				type="password"
				placeholder="Повторить пароль"
				value={props.confirmPassword}
				onChange={props.handleChange}
			/>
			<button
				ref={props.submitButtonRef}
				type="submit"
				disabled={!props.isFormValid}
			>
				Зарегистрироваться
			</button>
		</form>
	</div>
);
