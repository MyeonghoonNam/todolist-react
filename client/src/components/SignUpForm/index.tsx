import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSignUp } from '@mutations/index';
import { useForm } from '@hooks/index';

type Errors = {
  [key: string]: string;
};

const SignUpForm = () => {
  const { mutateAsync } = useSignUp();
  const navigate = useNavigate();

  const { values, errors, setErrors, loading, handleChange, handleSubmit } =
    useForm({
      initialState: {
        email: '',
        password: '',
        passwordConfirm: '',
      },
      validate: ({ email, password, passwordConfirm }) => {
        const newErrors: Errors = {};

        const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        const regPassword = /^[A-Za-z0-9]{8,12}$/;

        if (!email || !regEmail.test(email)) {
          newErrors.email = '올바른 이메일을 입력해주세요.';
        }

        if (!password || !regPassword.test(password)) {
          newErrors.password =
            '최소 8자, 최대 12자에 해당하는 비밀번호를 입력해주세요.';
        }

        if (password !== passwordConfirm) {
          newErrors.passwordConfirm =
            '재확인 비밀번호가 기존 비밀번호와 동일하게 다시 입력해주세요.';
        }

        return newErrors;
      },
      onSubmit: async () => {
        try {
          const { email, password } = values;
          await mutateAsync({ email, password });
          navigate('/login');
        } catch (e) {
          if (e instanceof AxiosError) {
            if (e.response?.status === 409) {
              const message = e.response?.data.details;

              setErrors((state) => ({
                ...state,
                email: message,
              }));
            }
          }
        }
      },
    });

  return (
    <Container onSubmit={handleSubmit} autoComplete="off">
      <Title>SignUp</Title>
      <Input
        type="text"
        name="email"
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <ErrorText>{errors.email}</ErrorText>}
      <Input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        css={css`
          margin-top: 8px;
        `}
      />
      {errors.password && <ErrorText>{errors.password}</ErrorText>}
      <Input
        type="password"
        name="passwordConfirm"
        placeholder="PasswordConfirm"
        onChange={handleChange}
        css={css`
          margin-top: 8px;
        `}
      />
      {errors.passwordConfirm && (
        <ErrorText>{errors.passwordConfirm}</ErrorText>
      )}
      <Button
        type="submit"
        disabled={loading}
        css={css`
          margin-top: 8px;
        `}
      >
        SignUp
      </Button>
    </Container>
  );
};

const Container = styled.form`
  width: 400px;
  padding: 16px;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  cursor: default;
`;

const Input = styled.input`
  width: 100%;
  display: block;
  padding: 4px 6px;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: white;
  font-size: 14px;
  box-sizing: border-box;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: red;
`;

const Button = styled.button`
  width: 100%;
  height: 32px;
  display: block;
  color: white;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: black;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: #111;
  }
  &:active {
    background-color: #222;
  }
  &:disabled {
    background-color: #888;
  }
`;

export default SignUpForm;
