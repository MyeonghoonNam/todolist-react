import styled from '@emotion/styled';
import TodoItem from '@components/TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@store/index';
import { useEffect } from 'react';
import { getTodoList } from '@store/todos';

const TodoList = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { data: todos } = useSelector((store: RootState) => store.todos);

	useEffect(() => {
		dispatch(getTodoList());
	}, [dispatch]);

	return (
		<Container>
			{todos.map(({ id, title, complete }) => (
				<TodoItem key={id} id={id} title={title} complete={complete} />
			))}
		</Container>
	);
};

const Container = styled.ul`
	width: 100%;
`;

export default TodoList;
