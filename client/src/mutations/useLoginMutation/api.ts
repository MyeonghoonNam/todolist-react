import { api } from '@api/index';
import type { AuthFormInput, Login } from './types';

const RESOURCE = '/users';

export const login = async (data: AuthFormInput) =>
  api.post<Login>(`${RESOURCE}/login`, data);
