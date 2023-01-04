import styled from '@emotion/styled';
import { useMemo } from 'react';
import { useForm } from '@hooks/index';

export default {
  title: 'Hooks/useForm',
};

const sleep = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 1000);
  });
};

export const Default = () => {
  const initialFormState = useMemo(
    () => ({
      id: '',
      password: '',
    }),
    [],
  );

  const { values, errors, handleChange, handleSubmit } = useForm({
    initialState: initialFormState,
    validate: ({ id, password }) => {
      let idError = null;
      let passwordError = null;

      if (!id) {
        idError = '아이디를 입력해주세요.';
      }

      if (!password) {
        passwordError = '비밀번호를 입력해주세요.';
      }

      return {
        id: idError,
        password: passwordError,
      };
    },
    onSubmit: async () => {
      await sleep();
      // eslint-disable-next-line no-alert
      alert(JSON.stringify(values));
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="id" onChange={handleChange} placeholder="Id" />

      {errors.id && <ErrorText>{errors.id}</ErrorText>}

      <Input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />

      {errors.password && <ErrorText>{errors.password}</ErrorText>}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  border: solid 1px black;
`;

const ErrorText = styled.span`
  font-size: 12px;
  color: 'red';
`;

const Button = styled.button`
  border: solid 1px black;
`;
