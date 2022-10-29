import { create, Data, db } from '../models/db';
import type { Todo, TodoInput } from '../interfaces/todos';

export const createTodo = async ({ title }: TodoInput) => {
	const todo = create<Todo>({ title, complete: false });

	db.data?.todos.push(todo);
	await db.write();

	return todo;
};

export const findTodos = () => {
	return db.data?.todos;
};

export const findTodo = (predicate: (todo: Todo) => boolean) => {
	return db.data?.todos.find(predicate);
};

export const deleteTodo = async (todoToDelete: Todo) => {
	const filteredTodos = db.data?.todos.filter(
		(todo) => todo.id !== todoToDelete.id,
	) as Todo[];

	(db.data as Data).todos = filteredTodos;

	await db.write();

	return todoToDelete;
};
