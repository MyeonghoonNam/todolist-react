/* eslint-disable no-console */
import { useState } from 'react';

const useLocalStorage = <T>(key: string, initialState: T) => {
	const [value, setValue] = useState(() => {
		try {
			const item = localStorage.getItem(key);
			return item ? JSON.parse(item) : initialState;
		} catch (e) {
			console.error(e);
			return initialState;
		}
	});

	const setLocalStorageValue = (value: T) => {
		try {
			setValue(value);
			localStorage.setItem(key, JSON.stringify(value));
		} catch (e) {
			console.error(e);
		}
	};

	return [value, setLocalStorageValue];
};

export default useLocalStorage;
