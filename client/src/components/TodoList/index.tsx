import styled from '@emotion/styled';
import { useTodos } from '@contexts/TodosContext';
import TodoItem from '@components/TodoItem';

const Container = styled.ul`
	width: 100%;
`;

const TodoList = () => {
	const { todos } = useTodos();

	return (
		<Container>
			{todos.map(({ id, title, complete }) => (
				<TodoItem key={id} id={id} title={title} complete={complete} />
			))}
		</Container>
	);
};

export default TodoList;
