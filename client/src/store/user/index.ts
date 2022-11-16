import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '@api/user';

import { User, UserLoginInput } from '@interfaces/User';
import { removeCookie, setCookie } from '@utils/cookies';

const RESOURCE = 'users';

export const isAuthUser = createAsyncThunk(
	`${RESOURCE}/isAuthUser`,
	async () => {
		const {
			data: { id, email },
		} = await api.auth();

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
	errors: {
		loginError: {
			status: boolean;
			message: string;
		};
	};
}

const initialState: UsersState = {
	user: {} as User,
	isAuth: false,
	isLoading: false,
	errors: {
		loginError: {
			status: false,
			message: '',
		},
	},
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

			localStorage.removeItem('token');
			removeCookie('token');
		},
		[login.pending.type]: (state) => {
			state.isLoading = true;
		},
		[login.fulfilled.type]: (state, action) => {
			state.user = action.payload.user;
			state.isAuth = true;
			state.isLoading = false;
			state.errors.loginError = { status: false, message: '' };

			localStorage.setItem('token', action.payload.token.accessToken);
			setCookie('token', action.payload.token.refreshToken);
		},
		[login.rejected.type]: (state) => {
			state.isLoading = false;
			state.errors.loginError = {
				status: true,
				message: '잘못된 이메일과 비밀번호 입니다.',
			};
		},
	},
});
