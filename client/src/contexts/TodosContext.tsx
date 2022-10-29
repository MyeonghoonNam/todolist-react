import { createContext, useCallback, useContext } from 'react';
import { getTodoList, createTodo, patchTodo, deleteTodo } from '@api/todo';
import useAsync from '@hooks/useAsync';
import Todo from '@interfaces/Todo';

interface TodoContext {
	todos: Todo[];
	addTodo: (title: string) => void;
	updateTodo: (id: string, title: string, complete: boolean) => void;
	removeTodo: (id: string) => void;
}

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const useTodos = () => useContext(TodoContext);

interface Props {
	children: React.ReactNode;
}

const TodosProvider = ({ children }: Props) => {
	const { state: todos, error, fetchData } = useAsync<Todo[]>(getTodoList, []);

	const addTodo = useCallback(
		async (title: string) => {
			await createTodo({ title });
			await fetchData();
		},
		[fetchData],
	);

	const updateTodo = useCallback(
		async (id: string, title: string, complete: boolean) => {
			await patchTodo(id, { title, complete });
			await fetchData();
		},
		[fetchData],
	);

	const removeTodo = useCallback(
		async (id: string) => {
			await deleteTodo(id);
			await fetchData();
		},
		[fetchData],
	);

	if (!todos) return null;
	if (error) return null;

	return (
		<TodoContext.Provider value={{ todos, addTodo, updateTodo, removeTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodosProvider;
