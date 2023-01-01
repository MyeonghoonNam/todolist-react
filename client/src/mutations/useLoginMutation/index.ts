import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { setCookie } from '@utils/cookies';
import { useUser } from '@queries/index';
import { login } from './api';

const useLogin = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();

  const mutaion = useMutation(login, {
    onSuccess: ({ token, user }) => {
      const { accessToken, refreshToken } = token;

      localStorage.setItem('token', accessToken);
      setCookie('token', refreshToken);
      setUser(user);

      navigate('/');
    },
    onError: (e) => {
      console.log(e);
    },
  });

  return mutaion;
};

export default useLogin;
