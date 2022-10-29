import TodoItem from '@components/TodoItem';

export default {
	title: 'Components/TodoItem',
	component: TodoItem,
};

export const Default = () => {
	return <TodoItem id="1" content="TypeScript" complete={false} />;
};
