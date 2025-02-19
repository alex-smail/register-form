import { PASSWORD_REGEX } from '../constants';

export const validatePassword = (password) => {
	const minLength = 8;
	const maxLength = 20;

	if (password.length < minLength || password.length > maxLength) {
		return 'Пароль должен быть длиной от 8 до 20 символов.';
	}

	if (!PASSWORD_REGEX.test(password)) {
		return 'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву, одну цифру и один специальный символ.';
	}

	return true;
};
