import React from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import useForm from '@hooks/useForm';
import { useLogin } from '@mutations/index';

interface Errors {
  [key: string]: string;
}

const LoginForm = () => {
  const { mutateAsync } = useLogin();

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialState: {
      email: '',
      password: '',
    },
    validate: ({ email, password }) => {
      const newErrors: Errors = {};

      const regEmail = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const regPassword = /^[A-Za-z0-9]{8,12}$/;

      if (!email || !regEmail.test(email)) {
        newErrors.email = '올바른 이메일을 입력해주세요.';
      }

      if (!password || !regPassword.test(password)) {
        newErrors.password = '올바른 비밀번호를 입력해주세요.';
      }

      return newErrors;
    },
    onSubmit: async () => {
      const { email, password } = values;
      await mutateAsync({ email, password });
    },
  });

  return (
    <>
      <Container onSubmit={handleSubmit}>
        <Title>Login</Title>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
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
        <Button
          type="submit"
          css={css`
            margin-top: 8px;
          `}
        >
          Login
        </Button>
      </Container>

      <SignUpLink>
        <Link to="/signup">회원가입</Link>
      </SignUpLink>
    </>
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

const SignUpLink = styled.span`
  color: blue;
  margin-top: 5px;
  border-bottom: 1px solid;
`;

export default LoginForm;
