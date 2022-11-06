import { Route, Routes } from 'react-router-dom';

import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MainPage from '@pages/MainPage';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<MainPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignUpPage />} />
		</Routes>
	);
};

export default App;
