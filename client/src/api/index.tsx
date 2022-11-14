import { getCookie, removeCookie, setCookie } from '@utils/cookies';

import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL;

const baseInstance = axios.create({
	baseURL,
	withCredentials: true,
});

let lock = false;
let subscribers: ((token: string) => void)[] = [];

const resource = 'users';
const refreshURL = `${baseURL}/${resource}/refresh`;

const subscribeTokenRefresh = (cb: (token: string) => void) => {
	subscribers.push(cb);
};

const onRrefreshed = (token: string) => {
	subscribers.forEach((cb) => cb(token));
};

const onRefresh = async (): Promise<string | void> => {
	try {
		const { data: token } = await api.get(refreshURL);
		const { accessToken, refreshToken } = token;

		lock = false;
		onRrefreshed(accessToken);
		subscribers = [];
		localStorage.setItem('token', accessToken);

		if (refreshToken !== null) {
			setCookie('token', refreshToken);
		}

		return accessToken;
	} catch (e) {
		lock = false;
		subscribers = [];
		localStorage.removeItem('token');
		removeCookie('token');
	}
};

baseInstance.interceptors.request.use((config) => {
	if (!config.headers) return config;

	let token: string | null = null;

	if (config.url === refreshURL) {
		token = getCookie('token');
	} else {
		token = localStorage.getItem('token');
	}

	if (token !== null) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

baseInstance.interceptors.response.use(
	(res) => res,
	async (err) => {
		const {
			config,
			response: { status },
		} = err;
		const originalRequest = config;

		if (config.url === refreshURL || status !== 401) return Promise.reject(err);

		if (lock) {
			return new Promise((resolve) => {
				subscribeTokenRefresh((token: string) => {
					originalRequest.headers.Authorization = `Bearer ${token}`;
					resolve(axios(originalRequest));
				});
			});
		}

		lock = true;
		const accessToken = await onRefresh();

		if (typeof accessToken === 'string') {
			config.headers.Authorization = `Bearer ${accessToken}`;
			return axios(config);
		}

		return Promise.reject(err);
	},
);

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
