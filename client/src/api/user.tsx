import api from '@api/index';

const RESOURCE = '/users';

export const signUp = async (data: object) => {
	try {
		const response = await api.post(`${RESOURCE}/signup`, data);
		return response;
	} catch (e) {
		throw e;
	}
};

export const login = async (data: object) => {
	try {
		const response = await api.post(`${RESOURCE}/login`, data);
		return response;
	} catch (e) {
		throw e;
	}
};

export const auth = async () => {
	try {
		const response = await api.get(`${RESOURCE}/auth`);
		return response;
	} catch (e) {
		throw e;
	}
};
