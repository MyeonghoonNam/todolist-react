import { api } from '@api/index';

import type { Todo } from '@interfaces/index';
import type { TodoUpdateInput } from './types';

const RESOURCE = '/todos';

export const patchTodo = async (id: string, data: TodoUpdateInput) =>
  api.patch<Todo>(`${RESOURCE}/${id}`, data);
