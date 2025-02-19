import { useState } from 'react';
import { INITIAL_STATE } from '../constants';

export const useStore = () => {
	const [state, setState] = useState(INITIAL_STATE);

	return {
		getState: () => state,
		updateState: (fieldName, newValue) => {
			setState({ ...state, [fieldName]: newValue });
		},
	};
};
