import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import Todo from '@interfaces/Todo';

export const todos = createSlice({
	name: 'todos',
	initialState: [],
	reducers: {
		add: {
			reducer: (
				state: Partial<Todo>[],
				action: PayloadAction<Pick<Todo, 'title' | 'complete'>>,
			) => {
				state.push(action.payload);
			},
			prepare: (title: string) => ({
				payload: {
					title,
					complete: false,
				},
			}),
		},
		update: {
			reducer: (
				state: Todo[],
				action: PayloadAction<Pick<Todo, 'id' | 'title' | 'complete'>>,
			) => {
				state.map((todo) =>
					todo.id === action.payload.id ? action.payload : todo,
				);
			},
			prepare: (id: string, title: string, complete: boolean) => ({
				payload: {
					id,
					title,
					complete,
				},
			}),
		},
		remove: {
			reducer: (state: Todo[], action: PayloadAction<Pick<Todo, 'id'>>) => {
				state.filter((todo) => todo.id !== action.payload.id);
			},
			prepare: (id: string) => ({
				payload: {
					id,
				},
			}),
		},
	},
});
