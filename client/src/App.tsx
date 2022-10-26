import styled from '@emotion/styled';
import Header from '@components/Header';
import InputForm from '@components/InputForm';
import TodosProvider from '@contexts/TodosProvider';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 600px;
	margin: 0 auto;
`;

const App = () => {
	return (
		<TodosProvider>
			<Container>
				<Header />
				<InputForm />
			</Container>
		</TodosProvider>
	);
};

export default App;
