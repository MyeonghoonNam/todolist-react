import { api } from '@api/index';
import type { User, AuthFormInput, SignUp, Login } from './types';

const RESOURCE = '/users';

export const signUp = async (data: AuthFormInput) => {
  try {
    const response = await api.post<SignUp>(`${RESOURCE}/signup`, data);
    return response;
  } catch (e) {
    throw e;
  }
};

export const login = async (data: AuthFormInput) => {
  try {
    const response = await api.post<Login>(`${RESOURCE}/login`, data);
    return response;
  } catch (e) {
    throw e;
  }
};

export const auth = async () => {
  try {
    const response = await api.get<User>(`${RESOURCE}/auth`);
    return response;
  } catch (e) {
    throw e;
  }
};
