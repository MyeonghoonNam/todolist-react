import { useQuery } from '@tanstack/react-query';
import type { ApiError } from '@api/config/types';
import { useUser } from '..';
import { getTodos } from './api';

import type { QueryData, Todo } from './types';

const useTodos = () => {
  const {
    query: { data: user },
  } = useUser();

  const QUERY_KEY = ['todos', user?.id];

  const query = useQuery<QueryData, ApiError, Todo[], (string | undefined)[]>(
    QUERY_KEY,
    () => getTodos(user?.id),
    { enabled: !!user },
  );

  return query;
};

export default useTodos;
