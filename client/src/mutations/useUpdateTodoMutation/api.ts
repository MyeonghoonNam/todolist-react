import { api } from '@api/index';

import { RESOURCE } from '@queries/useTodosQuery/api';

import type { Todo } from '@interfaces/index';
import type { TodoUpdateInput } from './types';

export const patchTodo = async (id: string, data: TodoUpdateInput) =>
  api.patch<Todo>(`${RESOURCE}/${id}`, data);
