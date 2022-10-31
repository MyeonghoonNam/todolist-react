import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '@api/todo';

import Todo from '@interfaces/Todo';

const RESOURCE = 'todos';

export const getTodoList = createAsyncThunk(
	`${RESOURCE}/getTodoList`,
	async () => {
		const data = await api.getTodoList();
		return data;
	},
);

export const addTodo = createAsyncThunk(
	`${RESOURCE}/addTodo`,
	async ({ title }: { title: string }) => {
		await api.createTodo({ title });
	},
);

export const updateTodo = createAsyncThunk(
	`${RESOURCE}/updateTodo`,
	async ({
		id,
		title,
		complete,
	}: {
		id: string;
		title: string;
		complete: boolean;
	}) => {
		await api.patchTodo(id, { title, complete });
	},
);

export const removeTodo = createAsyncThunk(
	`${RESOURCE}/removeTodo`,
	async ({ id }: { id: string }) => {
		await api.deleteTodo(id);
	},
);

export interface TodosState {
	data: Todo[];
	loading: boolean;
}

const initialState: TodosState = {
	data: [],
	loading: false,
};

export const todos = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: {
		[getTodoList.pending.type]: (state) => {
			state.loading = true;
		},
		[getTodoList.fulfilled.type]: (state, action) => {
			state.data = action.payload;
			state.loading = false;
		},
		[addTodo.pending.type]: (state) => {
			state.loading = true;
		},
		[addTodo.fulfilled.type]: (state) => {
			state.loading = false;
		},
		[updateTodo.pending.type]: (state) => {
			state.loading = true;
		},
		[updateTodo.fulfilled.type]: (state) => {
			state.loading = false;
		},
		[removeTodo.pending.type]: (state) => {
			state.loading = true;
		},
		[removeTodo.fulfilled.type]: (state) => {
			state.loading = false;
		},
	},
});
