import styled from '@emotion/styled';
import InputForm from '@components/InputForm';

export default {
  title: 'Components/InputForm',
  component: InputForm,
  argTypes: { onSubmit: { action: 'onSubmit' } },
};

const Conatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 600px;
  margin: 0 auto;
`;

export const Default = () => {
  return (
    <Conatiner>
      <InputForm />
    </Conatiner>
  );
};
