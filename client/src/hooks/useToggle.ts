import { useCallback, useState } from 'react';

type ReturnType = [boolean, () => void];

const useToggle = (initialState: boolean): ReturnType => {
	const [state, setState] = useState(initialState);
	const toggle = useCallback(() => setState((state) => !state), []);

	return [state, toggle];
};

export default useToggle;
