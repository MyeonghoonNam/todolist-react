import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';

const LoginForm = lazy(() => import('@components//LoginForm'));

const LoginPage = () => {
	return (
		<Suspense>
			<Container>
				<LoginForm />
			</Container>
		</Suspense>
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
