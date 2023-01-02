import { api } from '@api/index';

const RESOURCE = '/todos';

export const deleteTodo = async (id: string) =>
  api.delete<null>(`${RESOURCE}/${id}`);
