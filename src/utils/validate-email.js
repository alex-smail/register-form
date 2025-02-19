import { EMAIL_REGEX } from '../constants';

export const validateEmail = (email) => {
	if (email.length === 0) {
		return 'Email не может быть пустым.';
	}

	if (!EMAIL_REGEX.test(email)) {
		return 'Email невалиден.';
	}
	return true;
};
