import { AppLayout } from './app-layout';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { INITIAL_STATE, validationSchema } from './constants';
import { sendFormData } from './utils';

const App = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: INITIAL_STATE,
		resolver: yupResolver(validationSchema),
	});

	return (
		<AppLayout
			{...{
				errors,
				handleSubmit: handleSubmit(sendFormData),
				register,
			}}
		/>
	);
};

export default App;
