import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@queries/useTodos';
import { patchTodo } from './api';
import type { TodoUpdateInput } from './types';

const useUpdateTodo = (id: string) => {
  const queryClient = useQueryClient();

  const mutation = useMutation((data: TodoUpdateInput) => patchTodo(id, data), {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
    },
  });

  return mutation;
};

export default useUpdateTodo;
