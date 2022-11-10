import React from 'react';
import ReactDOM from 'react-dom/client';

import { CookiesProvider } from 'react-cookie';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from '@styles/global';
import { store, persistor } from './store';

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<GlobalStyle />
						<App />
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</CookiesProvider>
	</React.StrictMode>,
);
