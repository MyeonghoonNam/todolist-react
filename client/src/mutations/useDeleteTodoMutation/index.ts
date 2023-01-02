import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QUERY_KEY } from '@queries/useTodosQuery';
import { deleteTodo } from './api';

const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries(QUERY_KEY);
    },
  });

  return mutation;
};

export default useDeleteTodo;
