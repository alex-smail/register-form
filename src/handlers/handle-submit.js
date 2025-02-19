import { sendFormData } from '../utils';

export const handleSubmit = ({ getState }, event) => {
	event.preventDefault();
	sendFormData(getState());
};
