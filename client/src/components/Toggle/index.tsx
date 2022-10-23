import styled from '@emotion/styled';
import { ChangeEvent, useCallback } from 'react';
import useToggle from '@hooks/useToggle';

interface Props {
	on: boolean;
	onChange?(e: ChangeEvent<HTMLInputElement>): void;
}

const Container = styled.label`
	display: flex;
	align-items: center;
	user-select: none;
	width: 30px;
	height: 30px;
	border-radius: 50%;
`;

const CheckBox = styled.input`
	width: 100%;
	height: 100%;
	margin: 0;
	appearance: none;
	border: 1.5px solid gainsboro;
	border-radius: 50%;

	&:checked {
		border-color: transparent;
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
		background-size: 100% 100%;
		background-position: 50%;
		background-repeat: no-repeat;
		background-color: limegreen;
	}
`;

const Toggle = ({ on = false, onChange, ...props }: Props) => {
	const [checked, toggle] = useToggle(on);

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			toggle();
			onChange?.(e);
		},
		[toggle, onChange],
	);

	return (
		<Container {...props}>
			<CheckBox type="checkbox" checked={checked} onChange={handleChange} />
		</Container>
	);
};

export default Toggle;
