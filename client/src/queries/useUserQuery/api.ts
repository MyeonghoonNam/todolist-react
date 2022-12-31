import { api } from '@api/index';
import type { User } from './types';

const RESOURCE = '/users';

export const auth = async () => api.get<User>(`${RESOURCE}/auth`);
