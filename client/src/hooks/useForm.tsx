import { ChangeEvent, FormEvent, useCallback, useState } from 'react';

interface Props {
	initialState: {
		[key: string]: string;
	};
	validate: (values: { [key: string]: string }) => { [key: string]: string };
	onSubmit: () => Promise<void>;
}

const useForm = ({ initialState, validate, onSubmit }: Props) => {
	const [values, setValues] = useState(initialState);
	const [errors, setErrors] = useState(initialState);
	const [loading, setLoading] = useState(false);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues((state) => ({ ...state, [name]: value }));
	}, []);

	const handleSubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			setLoading(() => true);

			const newErrors = validate(values);

			if (Object.keys(newErrors).length === 0) {
				await onSubmit();
			}

			setErrors(newErrors);
			setLoading(() => false);
		},
		[values, validate, onSubmit],
	);

	return {
		values,
		errors,
		loading,
		handleChange,
		handleSubmit,
	};
};

export default useForm;
