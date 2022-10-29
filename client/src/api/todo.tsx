import api from '@api/index';

const RESOURCE = '/todos';

export const getTodoList = async () => {
	try {
		const response = await api.get(`${RESOURCE}`);
		// console.log(response);
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

export const deleteTodo = async (id: string) => {
	try {
		const response = await api.delete(`${RESOURCE}/${id}`);

		return response;
	} catch (error) {
		throw new Error('API deleteTodo error');
	}
};
