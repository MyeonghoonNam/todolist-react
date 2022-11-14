import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '@api/user';

import { User, UserLoginInput } from '@interfaces/User';
import { setCookie } from '@utils/cookies';

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

export const login = createAsyncThunk(
	`${RESOURCE}/login`,
	async ({ email, password }: UserLoginInput) => {
		const {
			data: { token, user },
		} = await api.login({ email, password });

		return { token, user };
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
		[login.pending.type]: (state) => {
			state.isLoading = true;
		},
		[login.fulfilled.type]: (state, action) => {
			state.user = action.payload.user;
			state.isAuth = true;
			state.isLoading = false;

			localStorage.setItem('token', action.payload.token.accessToken);
			setCookie('token', action.payload.token.accessToken);
		},
	},
});
