import { useMutation } from 'react-query';
import * as api from '@api/user';
import { UserLoginInput } from '@interfaces/User';
import useUser from '@hooks/useUser';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
	const { updateUser } = useUser();
	const navigate = useNavigate();

	const mutaion = useMutation(api.login, {
		onSuccess: (_, valiable: UserLoginInput) => {
			updateUser(valiable);
			navigate('/');
		},
		onError: (e) => {
			console.log(e);
		},
	});

	return mutaion;
};

export default useLogin;
