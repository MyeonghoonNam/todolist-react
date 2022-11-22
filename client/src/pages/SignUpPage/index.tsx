import styled from '@emotion/styled';
import { Suspense, lazy } from 'react';

const SignUpForm = lazy(() => import('@components//SignUpForm'));

const SignUpPage = () => {
	return (
		<Suspense>
			<Container>
				<SignUpForm />
			</Container>
		</Suspense>
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
