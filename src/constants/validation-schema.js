import * as yup from 'yup';
import { PASSWORD_REGEX } from './password-regex';

export const validationSchema = yup.object().shape({
	email: yup
		.string()
		.required('Email обязателен.')
		.email('Неверный формат email.'),
	password: yup
		.string()
		.required('Пароль обязателен.')
		.min(8, 'Пароль должен содержать минимум 8 символов.')
		.matches(
			PASSWORD_REGEX,
			'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.'
		),
	confirmPassword: yup
		.string()
		.required('Подтверждение пароля обязательно.')
		.oneOf([yup.ref('password'), null], 'Пароли не совпадают.'),
});
