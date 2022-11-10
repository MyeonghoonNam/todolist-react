import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '@api/user';

import User from '@interfaces/User';

const RESOURCE = 'users';

export const isAuthUser = createAsyncThunk(
	`${RESOURCE}/isAuthUser`,
	async () => {
		const { data } = await api.auth();
		const { id, email } = data;

		const user = { id, email };

		return user;
	},
);

export interface UsersState {
	user: User;
	isAuth: boolean;
	isLoading: boolean;
}

const initialState: UsersState = {
	user: {} as User,
	isAuth: false,
	isLoading: false,
};

export const users = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: {
		[isAuthUser.pending.type]: (state) => {
			state.isLoading = true;
		},
		[isAuthUser.fulfilled.type]: (state, action) => {
			state.user = action.payload;
			state.isAuth = true;
			state.isLoading = false;
		},
		[isAuthUser.rejected.type]: (state) => {
			state.user = {} as User;
			state.isAuth = false;
			state.isLoading = false;
		},
	},
});
