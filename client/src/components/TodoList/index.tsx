import styled from '@emotion/styled';
import TodoItem from '@components/TodoItem';
import { useTodos } from '@queries/index';

const TodoList = () => {
  const { data: todos } = useTodos();

  return (
    <Container>
      {todos?.map(({ id, title, complete }) => (
        <TodoItem key={id} id={id} title={title} complete={complete} />
      ))}
    </Container>
  );
};

const Container = styled.ul`
  width: 100%;
`;

export default TodoList;
