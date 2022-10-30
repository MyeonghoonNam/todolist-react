import { createAction, createReducer, PayloadAction } from '@reduxjs/toolkit';

import Todo from '@interfaces/Todo';

export const addTodo = createAction('ADD_TODO', (title: string) => {
	return {
		payload: {
			title,
			complete: false,
		},
	};
});

export const updateTodo = createAction(
	'UPDATE_TODO',
	(id: string, title: string, complete: boolean) => {
		return {
			payload: {
				id,
				title,
				complete,
			},
		};
	},
);

export const removeTodo = createAction('REMOVE_TODO', (id: string) => {
	return {
		payload: {
			id,
		},
	};
});

export const todos = createReducer([], {
	[addTodo.type]: (state: Todo[], action: PayloadAction<Todo>) => {
		state.push(action.payload);
	},
	[updateTodo.type]: (state: Todo[], action: PayloadAction<Todo>) => {
		state.map((todo) =>
			todo.id === action.payload.id ? action.payload : todo,
		);
	},
	[removeTodo.type]: (
		state: Todo[],
		action: PayloadAction<Pick<Todo, 'id'>>,
	) => {
		state.filter((todo) => todo.id !== action.payload.id);
	},
});
