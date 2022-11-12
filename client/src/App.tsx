import { Route, Routes } from 'react-router-dom';

import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MainPage from '@pages/MainPage';

import PrivateRoute from '@components/PrivateRoute';

import { isAuthUser } from '@store/user';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PublicRoute from '@components/PublicRoute';
import { AppDispatch, RootState } from './store';

const App = () => {
	const dispatch = useDispatch<AppDispatch>();
	const { isAuth } = useSelector((state: RootState) => state.users);

	useEffect(() => {
		if (isAuth) {
			dispatch(isAuthUser());
		}
	}, [isAuth, dispatch]);

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
