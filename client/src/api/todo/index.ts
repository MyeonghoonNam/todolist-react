import api from '@api/index';
import { Todo, TodoFormInput, TodoUpdateInput } from './types';

const RESOURCE = '/todos';

export const getTodoList = async (userId: string) => {
	try {
		const config = {
			params: { userId },
		};

		const response = await api.get<Todo[]>(`${RESOURCE}`, config);

		return response;
	} catch (error) {
		throw new Error('API getTodoList error');
	}
};

export const createTodo = async (data: TodoFormInput) => {
	try {
		const response = await api.post<Todo>(`${RESOURCE}`, data);

		return response;
	} catch (error) {
		throw new Error('API createTodo error');
	}
};

export const patchTodo = async (id: string, data: TodoUpdateInput) => {
	try {
		const response = await api.patch<Todo>(`${RESOURCE}/${id}`, data);

		return response;
	} catch (error) {
		throw new Error('API updateTodo error');
	}
};

export const deleteTodo = async (id: string) => {
	try {
		const response = await api.delete<null>(`${RESOURCE}/${id}`);

		return response;
	} catch (error) {
		throw new Error('API deleteTodo error');
	}
};
