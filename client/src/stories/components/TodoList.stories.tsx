import TodoList from '@components/TodoList';
import TodosProvider from '@contexts/TodosContext';

export default {
	title: 'Components/TodoList',
	component: TodoList,
};

export const Default = () => {
	return (
		<TodosProvider>
			<TodoList />
		</TodosProvider>
	);
};
