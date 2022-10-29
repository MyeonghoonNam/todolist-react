/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';

const useAsync = <T extends {}>(
	callback: () => Promise<any>,
	deps: unknown[] = [],
	skip = false,
): {
	state: T | null;
	loading: boolean;
	error: boolean;
	fetchData: () => Promise<void>;
} => {
	const [state, setState] = useState<T | null>(null);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState<boolean>(false);

	const fetchData = useCallback(async () => {
		try {
			setLoading(true);
			const { data } = await callback();
			setState(() => data);
		} catch (e) {
			setError(() => true);
		} finally {
			setLoading(false);
		}
	}, [callback]);

	useEffect(() => {
		if (skip) return;
		fetchData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, deps);

	return { state, loading, error, fetchData };
};

export default useAsync;
