import styled from '@emotion/styled';
import useForm from '@hooks/useForm';

export default {
	title: 'Hooks/useForm',
};

type Errors = {
	[key: string]: string;
};

const sleep = () => {
	return new Promise<void>((resolve) => {
		setTimeout(() => resolve(), 1000);
	});
};

export const Default = () => {
	const { values, errors, loading, handleChange, handleSubmit } = useForm({
		initialState: {
			id: '',
			password: '',
		},
		validate: ({ id, password }) => {
			const newErrors: Errors = {};

			if (!id) {
				newErrors.id = '아이디를 입력해주세요.';
			}

			if (!password) {
				newErrors.password = '비밀번호를 입력해주세요.';
			}

			return newErrors;
		},
		onSubmit: async () => {
			try {
				await sleep();

				// eslint-disable-next-line no-alert
				alert(JSON.stringify(values));
			} catch (e) {
				console.log(e);
			}
		},
	});
	console.log(loading);

	return (
		<Form onSubmit={handleSubmit}>
			<Input type="text" name="id" onChange={handleChange} placeholder="Id" />

			{errors.id && <ErrorText>{errors.id}</ErrorText>}

			<Input
				type="password"
				name="password"
				onChange={handleChange}
				placeholder="Password"
			/>

			{errors.password && <ErrorText>{errors.password}</ErrorText>}

			<Button type="submit" disabled={loading}>
				{loading ? 'Loading...' : 'Submit'}
			</Button>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Input = styled.input`
	border: solid 1px black;
`;

const ErrorText = styled.span`
	font-size: 12px;
	color: 'red';
`;

const Button = styled.button`
	border: solid 1px black;
`;
