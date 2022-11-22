import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { isAuthUser } from '@store/user';
import { AppDispatch, RootState } from './store';

const PrivateRoute = lazy(() => import('@components/PrivateRoute'));
const PublicRoute = lazy(() => import('@components/PublicRoute'));

const LoginPage = lazy(() => import('@pages/LoginPage'));
const SignUpPage = lazy(() => import('@pages/SignUpPage'));
const MainPage = lazy(() => import('@pages/MainPage'));

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isLoading } = useSelector((state: RootState) => state.users);

	useEffect(() => {
		dispatch(isAuthUser());
	}, [dispatch]);

	if (isLoading) {
		return null;
	}

	return (
		<Suspense>
			<Routes>
				<Route element={<PublicRoute />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Route>

				<Route element={<PrivateRoute />}>
					<Route path="/" element={<MainPage />} />
				</Route>
			</Routes>
		</Suspense>
	);
};

export default App;
