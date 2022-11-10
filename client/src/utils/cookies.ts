import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export const setCookie = (name: string, value: object, options: object) => {
	return cookie.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
	return cookie.get(name);
};
