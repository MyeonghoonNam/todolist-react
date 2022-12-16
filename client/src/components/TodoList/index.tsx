import styled from '@emotion/styled';
import TodoItem from '@components/TodoItem';
import { useEffect } from 'react';

const TodoList = () => {
	useEffect(() => {
		// dispatch(getTodoList({ userId: user.id }));
	}, []);

	return (
		<Container>
			{/* {todos.map(({ id, title, complete }) => (
				<TodoItem key={id} id={id} title={title} complete={complete} />
			))} */}
		</Container>
	);
};

const Container = styled.ul`
	width: 100%;
`;

export default TodoList;
