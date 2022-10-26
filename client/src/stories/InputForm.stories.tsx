import styled from '@emotion/styled';
import InputForm, { Props } from '@components/InputForm';
import TodosProvider from '@contexts/TodosProvider';

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

export const Default = (args: Props) => {
	return (
		<TodosProvider>
			<Conatiner>
				<InputForm {...args} />
			</Conatiner>
		</TodosProvider>
	);
};
