import api from '@api/index';

const RESOURCE = '/todos';

export const getTodoList = async () => {
	try {
		const response = await api.get(`${RESOURCE}`);

		return response;
	} catch (error) {
		throw new Error('API getTodoList error');
	}
};

export const createTodo = async (data: object) => {
	try {
		const response = await api.post(`${RESOURCE}`, data);

		return response;
	} catch (error) {
		throw new Error('API createTodo error');
	}
};

export const patchTodo = async (id: string, data: object) => {
	try {
		const response = await api.patch(`${RESOURCE}/${id}`, data);

		return response;
	} catch (error) {
		throw new Error('API updateTodo error');
	}
};

export const deleteTodo = async (id: string) => {
	try {
		const response = await api.delete(`${RESOURCE}/${id}`);

		return response;
	} catch (error) {
		throw new Error('API deleteTodo error');
	}
};
