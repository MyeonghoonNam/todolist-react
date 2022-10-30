import styled from '@emotion/styled';
import TodoItem from '@components/TodoItem';
import { useSelector } from 'react-redux';
import { RootState } from '@store/index';

const Container = styled.ul`
	width: 100%;
`;

const TodoList = () => {
	const todos = useSelector((store: RootState) => store.todos);

	return (
		<Container>
			{todos.map(({ id, title, complete }) => (
				<TodoItem key={id} id={id} title={title} complete={complete} />
			))}
		</Container>
	);
};

export default TodoList;
