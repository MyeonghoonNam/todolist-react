import { combineReducers, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { todos } from './todos';
import { users } from './user';

const rootReducer = combineReducers({
	todos: todos.reducer,
	users: users.reducer,
});

const middleWare = [logger];

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(middleWare),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
