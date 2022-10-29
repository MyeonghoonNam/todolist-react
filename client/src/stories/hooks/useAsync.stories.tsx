import useAsync from '@hooks/useAsync';
import axios from 'axios';

export default {
	title: 'Hooks/useAsync',
};

interface Todo {
	userId: number;
	id: number;
	title: string;
	completed: boolean;
}

const getTodos = async () => {
	const response = await axios.get(
		'https://jsonplaceholder.typicode.com/todos',
	);

	return response.data;
};

export function Default() {
	const {
		state: todos,
		loading: loadingTodos,
		error: errorTodos,
	} = useAsync<Todo[]>(getTodos, []);

	if (errorTodos) return <div>에러가 발생했습니다</div>;

	return (
		<div>
			{loadingTodos ? (
				<div>로딩 중...</div>
			) : (
				<ul>
					{todos?.map((todo: Todo) => (
						<li key={todo.id}>
							{todo.title} ({todo.userId})
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
