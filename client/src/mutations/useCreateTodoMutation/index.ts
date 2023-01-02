import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@queries/useTodosQuery';
import { createTodo } from './api';

const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
    },
  });

  return mutation;
};

export default useCreateTodo;
