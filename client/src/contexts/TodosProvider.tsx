import useLocalStorage from '@hooks/useLocalStorage';
import { createContext, useCallback, useContext } from 'react';
import uuid from 'react-uuid';

interface Todo {
	id: string;
	content: string;
	complete: boolean;
}

interface TodoContext {
	todos: Todo[];
	addTodo: (content: string) => void;
}

const TodoContext = createContext<TodoContext>({} as TodoContext);

export const useTodos = () => useContext(TodoContext);

interface Props {
	children: React.ReactNode;
	initialState?: Todo[];
}

const TodosProvider = ({ children, initialState = [] }: Props) => {
	const [todos, setTodos] = useLocalStorage<Todo[]>('todos', initialState);

	const addTodo = useCallback(
		(content: string) => {
			setTodos([
				...todos,
				{
					id: uuid(),
					content,
					complete: false,
				},
			]);
		},
		[setTodos, todos],
	);

	return (
		<TodoContext.Provider value={{ todos, addTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodosProvider;
