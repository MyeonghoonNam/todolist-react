import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from '@styles/global';
import { store } from './store';

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<CookiesProvider>
			<Provider store={store}>
				<BrowserRouter>
					<GlobalStyle />
					<App />
				</BrowserRouter>
			</Provider>
		</CookiesProvider>
	</React.StrictMode>,
);
