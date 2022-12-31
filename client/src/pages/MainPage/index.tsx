import styled from '@emotion/styled';

import { Suspense, lazy } from 'react';

const Header = lazy(() => import('@components/Header'));
const InputForm = lazy(() => import('@components/InputForm'));
const TodoList = lazy(() => import('@components/TodoList'));

const MainPage = () => {
  return (
    <Suspense>
      <Container>
        <Header />
        <InputForm />
        <TodoList />
      </Container>
    </Suspense>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

export default MainPage;
