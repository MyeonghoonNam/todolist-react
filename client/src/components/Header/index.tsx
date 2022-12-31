import styled from '@emotion/styled';
import font from '@assets/font';
import color from '@assets/color';

const Container = styled.header`
  padding: 20px 0;
  line-height: 1.5em;
  cursor: default;
`;

const Title = styled.h1`
  margin-bottom: 2rem;
  line-height: 1em;
  text-align: center;
  color: ${color.main_header};

  ${font.large};
`;

const Header = () => {
  return (
    <Container>
      <Title>Todos</Title>
    </Container>
  );
};

export default Header;
