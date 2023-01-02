import { api } from '@api/index';
import type { Todo } from '@interfaces/index';

const RESOURCE = '/todos';

export const getTodos = async (userId?: string) =>
  api.get<Todo[]>(`${RESOURCE}`, { params: { userId } });
