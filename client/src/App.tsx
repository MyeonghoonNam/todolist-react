import { Route, Routes } from 'react-router-dom';

import PrivateRoute from '@components/PrivateRoute';
import PublicRoute from '@components/PublicRoute';

import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MainPage from '@pages/MainPage';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { isAuthUser } from '@store/user';
import { AppDispatch, RootState } from './store';

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
		<Routes>
			<Route element={<PublicRoute />}>
				<Route path="/login" element={<LoginPage />} />
				<Route path="/signup" element={<SignUpPage />} />
			</Route>

			<Route element={<PrivateRoute />}>
				<Route path="/" element={<MainPage />} />
			</Route>
		</Routes>
	);
};

export default App;
