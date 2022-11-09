import { CookiesProvider } from 'react-cookie';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyle from '@styles/global';

import LoginPage from '@pages/LoginPage';
import SignUpPage from '@pages/SignUpPage';
import MainPage from '@pages/MainPage';

import { store, persistor } from './store';

const App = () => {
	return (
		<CookiesProvider>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<GlobalStyle />
						<Routes>
							<Route path="/" element={<MainPage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignUpPage />} />
						</Routes>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</CookiesProvider>
	);
};

export default App;
