import styled from '@emotion/styled';

import Header from '@components/Header';
import InputForm from '@components/InputForm';
import TodoList from '@components/TodoList';

const MainPage = () => {
	return (
		<Container>
			<Header />
			<InputForm />
			<TodoList />
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
`;

export default MainPage;
