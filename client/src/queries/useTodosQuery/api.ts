import { api } from '@api/index';
import type { Todo } from '@interfaces/index';

export const RESOURCE = '/todos';

export const getTodos = async (userId?: string) =>
  api.get<Todo[]>(`${RESOURCE}`, { params: { userId } });

export const deleteTodo = async (id: string) =>
  api.delete<null>(`${RESOURCE}/${id}`);
