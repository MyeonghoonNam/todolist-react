import { useQuery } from '@tanstack/react-query';
import { getTodos } from './api';

export const QUERY_KEY = ['todos'];

const useTodos = (userId?: string) => {
  const query = useQuery(QUERY_KEY, () => getTodos(userId), {
    enabled: !!userId,
  });

  return query;
};

export default useTodos;
