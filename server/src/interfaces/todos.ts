export interface Todo {
	createdAt: string;
	id: string;
	title: string;
	complete: boolean;
	updatedAt: string;
}

export type TodoInput = Pick<Todo, 'title'>;
