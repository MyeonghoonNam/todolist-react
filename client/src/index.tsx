import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '@styles/global';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import App from './App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GlobalStyle />
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
