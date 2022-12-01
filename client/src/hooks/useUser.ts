import { useQueryClient, useQuery } from 'react-query';
import * as api from '@api/user';
import { UserLoginInput } from '@interfaces/User';

const QUERY_KEY = 'user';

const useUser = () => {
	const queryClient = useQueryClient();
	const { data: user } = useQuery([QUERY_KEY], api.auth, {
		refetchOnWindowFocus: false,
		enabled: false,
		onSuccess: (res) => {
			console.log(res);
		},
		onError: (e) => {
			console.log(e);
		},
	});

	const updateUser = (user: UserLoginInput) => {
		queryClient.setQueriesData([QUERY_KEY], user);
	};

	const removeUser = () => {
		queryClient.setQueriesData([QUERY_KEY], null);
	};

	return { user, updateUser, removeUser };
};

export default useUser;
