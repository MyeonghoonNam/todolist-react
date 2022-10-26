import styled from '@emotion/styled';
import { useTodos } from '@contexts/TodosProvider';
import TodoItem from '@components/TodoItem';

const Container = styled.ul`
	width: 100%;
`;

const TodoList = () => {
	const { todos } = useTodos();

	return (
		<Container>
			{todos.map(({ id, content, complete }) => (
				<TodoItem key={id} id={id} content={content} complete={complete} />
			))}
		</Container>
	);
};

export default TodoList;
