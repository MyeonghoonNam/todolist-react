import { api } from '@api/index';
import { RESOURCE } from '@queries/useTodos/api';

import type { Todo } from '@queries/useTodos/types';
import type { TodoFormInput } from './types';

export const createTodo = async (data: TodoFormInput) =>
  api.post<Todo>(`${RESOURCE}`, data);
