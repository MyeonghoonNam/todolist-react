import styled from '@emotion/styled';
import { css } from '@emotion/react';

const SignUpForm = () => {
	return (
		<Container>
			<Title>SignUp</Title>
			<Input type="text" placeholder="Email" />
			<Input
				type="password"
				placeholder="Password"
				css={css`
					margin-top: 8px;
				`}
			/>
			<Input
				type="password"
				placeholder="Password Confirm"
				css={css`
					margin-top: 8px;
				`}
			/>
			<Button
				type="submit"
				css={css`
					margin-top: 8px;
				`}
			>
				SignUp
			</Button>
		</Container>
	);
};

const Container = styled.form`
	width: 400px;
	padding: 16px;
	background-color: white;
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
	box-sizing: border-box;
`;

const Title = styled.h1`
	margin-bottom: 10px;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	cursor: default;
`;

const Input = styled.input`
	width: 100%;
	display: block;
	padding: 4px 6px;
	border: 2px solid #333;
	border-radius: 4px;
	background-color: white;
	font-size: 14px;
	box-sizing: border-box;
`;

const Button = styled.button`
	width: 100%;
	height: 32px;
	display: block;
	color: white;
	border: none;
	border-radius: 4px;
	outline: none;
	background-color: black;
	box-sizing: border-box;
	cursor: pointer;

	&:hover {
		background-color: #111;
	}
	&:active {
		background-color: #222;
	}
	&:disabled {
		background-color: #888;
	}
`;

export default SignUpForm;
