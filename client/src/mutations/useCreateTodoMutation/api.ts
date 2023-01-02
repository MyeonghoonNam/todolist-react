import { api } from '@api/index';
import { RESOURCE } from '@queries/useTodosQuery/api';

import type { Todo } from '@interfaces/index';
import type { TodoFormInput } from './types';

export const createTodo = async (data: TodoFormInput) =>
  api.post<Todo>(`${RESOURCE}`, data);
