import { INPUT_NAME } from '../constants';
import { validateEmail, validatePassword } from '../utils';

export const handleChange = (
	{
		setPasswordValue,
		updateState,
		setValidateError,
		setIsFormValid,
		email,
		password,
	},
	target
) => {
	let newError = null;
	let confirmPasswordValid = false;
	if (target.name === INPUT_NAME.EMAIL) {
		const formIsValid = validateEmail(target.value);
		if (formIsValid !== true) {
			newError = formIsValid;
		}
		// if (target.value.length <= 0) newError = true;
	}

	if (target.name === INPUT_NAME.PASSWORD) {
		const formIsValid = validatePassword(target.value);
		if (formIsValid !== true) {
			newError = formIsValid;
		}
		setPasswordValue(target.value);
	}

	if (target.name === INPUT_NAME.CONFIRM_PASSWORD) {
		if (password == target.value) {
			confirmPasswordValid = true;
		} else {
            newError = 'Пароли не совпадают.';
        }
	}

	setValidateError(newError);
	updateState(target.name, target.value);
	// проверка валидности всех форм
	const isValid =
		validateEmail(email) &&
		validatePassword(password) &&
		confirmPasswordValid === true;

	setIsFormValid(isValid);
};
