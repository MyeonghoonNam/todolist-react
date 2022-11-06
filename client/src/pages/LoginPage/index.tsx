import styled from '@emotion/styled';
import LoginForm from '@components/LoginForm';

const LoginPage = () => {
	return (
		<Container>
			<LoginForm />
		</Container>
	);
};

const Container = styled.main`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export default LoginPage;
