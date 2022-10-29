import useLocalStorage from '@hooks/useLocalStorage';
import { createContext, useCallback, useContext } from 'react';
import uuid from 'react-uuid';
import Todo from '@interfaces/Todo';

interface TodoContext {
	todos: Todo[];
	addTodo: (content: string) => void;
	toggleTodo: (id: string) => void;
	removeTodo: (id: string) => void;
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

	const toggleTodo = useCallback(
		(id: string) => {
			setTodos(
				todos.map((todo: Todo) =>
					todo.id === id ? { ...todo, complete: !todo.complete } : todo,
				),
			);
		},
		[setTodos, todos],
	);

	const removeTodo = useCallback(
		(id: string) => {
			setTodos(todos.filter((todo: Todo) => todo.id !== id));
		},
		[setTodos, todos],
	);

	return (
		<TodoContext.Provider value={{ todos, addTodo, toggleTodo, removeTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export default TodosProvider;
