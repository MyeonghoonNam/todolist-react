import { api } from '@api/index';
import type { AuthFormInput, SignUp } from './types';

const RESOURCE = '/users';

export const signUp = async (data: AuthFormInput) =>
  api.post<SignUp>(`${RESOURCE}/signup`, data);
