import { useQuery, useQueryClient } from '@tanstack/react-query';
import { auth } from './api';
import type { User } from './types';

const useUser = () => {
  const QUERY_KEY = ['user'];
  const queryClient = useQueryClient();

  const query = useQuery(QUERY_KEY, auth, {
    enabled: false,
    onSuccess: (res) => {
      console.log(res, 'query');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  const setUser = (user: User) => {
    queryClient.setQueryData(QUERY_KEY, user);
  };

  const removeUser = () => {
    queryClient.setQueryData(QUERY_KEY, null);
  };

  return { query, setUser, removeUser };
};

export default useUser;
