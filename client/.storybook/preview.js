import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from '../src/store';

import GlobalStyle from '../src/styles/global';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

export const decorators = [
	(Story) => (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<GlobalStyle />
				<Story />
			</PersistGate>
		</Provider>
	),
];
