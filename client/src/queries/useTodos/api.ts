import { api } from '@api/index';
import type { QueryData, Todo, TodoFormInput, TodoUpdateInput } from './types';

const RESOURCE = '/todos';

export const getTodos = async (userId?: string) =>
  api.get<QueryData>(`${RESOURCE}`, { params: { userId } });

export const createTodo = async (data: TodoFormInput) =>
  api.post<Todo>(`${RESOURCE}`, data);

export const patchTodo = async (id: string, data: TodoUpdateInput) =>
  api.patch<Todo>(`${RESOURCE}/${id}`, data);

export const deleteTodo = async (id: string) =>
  api.delete<null>(`${RESOURCE}/${id}`);
