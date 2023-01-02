import { api } from '@api/index';

import type { Todo } from '@interfaces/index';
import type { TodoFormInput } from './types';

const RESOURCE = '/todos';

export const createTodo = async (data: TodoFormInput) =>
  api.post<Todo>(`${RESOURCE}`, data);
