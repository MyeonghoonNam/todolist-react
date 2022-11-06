import styled from '@emotion/styled';
import SignUpForm from '@components/SignUpForm';

const SignUpPage = () => {
	return (
		<Container>
			<SignUpForm />
		</Container>
	);
};

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default SignUpPage;
