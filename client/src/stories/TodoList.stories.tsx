import TodoList from '@components/TodoList';
import TodosProvider from '@contexts/TodosContext';
import uuid from 'react-uuid';

export default {
	title: 'Components/TodoList',
	component: TodoList,
};

export const Default = () => {
	return (
		<TodosProvider
			initialState={[
				{ id: uuid(), content: 'TypeScript', complete: false },
				{ id: uuid(), content: 'JavaScript', complete: true },
			]}
		>
			<TodoList />
		</TodosProvider>
	);
};
