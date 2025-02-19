/* eslint-disable no-dupe-keys */
import { useStore } from './hooks/useStore';
import { AppLayout } from './app-layout';
import { handleSubmit, handleChange } from './handlers';
import { useState, useRef, useEffect } from 'react';

const App = () => {
	const { getState, updateState } = useStore();
	const [validateError, setValidateError] = useState(null);
	const [isFormValid, setIsFormValid] = useState(false);
	const [passwordValue, setPasswordValue] = useState('');

	const { email, password, confirmPassword } = getState();

	const submitButtonRef = useRef(null);

	useEffect(() => {
        if (isFormValid) {
            submitButtonRef.current.focus();
        }
    }, [isFormValid]);

	const validState = {
		passwordValue,
		setPasswordValue,
		updateState,
		setValidateError,
		setIsFormValid,
		email,
		password,
		confirmPassword,
	};

	return (
		<AppLayout
			{...{
				email,
				password,
				confirmPassword,
				handleChange,
				validateError,
				isFormValid,
				submitButtonRef,
				handleSubmit: (event) => handleSubmit({ getState }, event),
				handleChange: (event) => handleChange(validState, event.target),
			}}
		/>
	);
};

export default App;
