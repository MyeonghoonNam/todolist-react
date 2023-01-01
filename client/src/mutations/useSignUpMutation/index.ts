import { useMutation } from '@tanstack/react-query';
import { signUp } from './api';

const useSignUp = () => {
  const mutation = useMutation(signUp);

  return mutation;
};

export default useSignUp;
