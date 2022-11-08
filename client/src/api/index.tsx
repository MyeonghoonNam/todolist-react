import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const baseInstance = axios.create({
	baseURL,
});

baseInstance.interceptors.response.use((res) => {
	console.log(res);
	return res;
});

const api = {
	get: (url: string, config?: object) => baseInstance.get(url, config),
	post: (url: string, data: object, config?: object) =>
		baseInstance.post(url, data, config),
	put: (url: string, data: object, config?: object) =>
		baseInstance.put(url, data, config),
	patch: (url: string, data: object, config?: object) =>
		baseInstance.patch(url, data, config),
	delete: (url: string, config?: object) => baseInstance.delete(url, config),
};

export default api;
