import { api } from '@api/index';
import type { QueryData } from './types';

export const RESOURCE = '/todos';

export const getTodos = async (userId?: string) =>
  api.get<QueryData>(`${RESOURCE}`, { params: { userId } });

export const deleteTodo = async (id: string) =>
  api.delete<null>(`${RESOURCE}/${id}`);
