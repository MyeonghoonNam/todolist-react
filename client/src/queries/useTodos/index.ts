import { useQuery } from '@tanstack/react-query';
import type { ApiError } from '@api/config/types';
import { getTodos } from './api';

import type { QueryData, Todo } from './types';

const useTodos = (userId?: string) => {
  const QUERY_KEY = ['todos'];

  const query = useQuery<QueryData, ApiError, Todo[], string[]>(
    QUERY_KEY,
    () => getTodos(userId),
    { enabled: !!userId },
  );

  return query;
};

export default useTodos;
