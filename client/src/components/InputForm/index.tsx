import styled from '@emotion/styled';
import { FaSearch, FaPlusCircle } from 'react-icons/fa';
import font from '@assets/font';
import color from '@assets/color';
import { css } from '@emotion/react';
import { ChangeEvent, FormEvent, useCallback, useState } from 'react';
import { useTodos } from '@contexts/TodosProvider';

export interface Props {
	onSubmit?: () => void;
}

const Container = styled.form`
	position: relative;
	width: 100%;
	margin-bottom: 20px;
	display: flex;
	border-radius: calc(0.5 * 100px);
	box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.38);
	justify-content: space-evenly;

	&:hover {
		box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.58);
	}
`;

const Icon = styled.i`
	display: flex;
	align-items: center;
	padding-left: 5px;
`;

const Input = styled.input`
	${font.regular};
	width: 85%;
	padding-right: 5px;
	padding-left: 5px;
	border-radius: calc(0.5 * 100px);
	background-color: transparent;
	height: 45px;
	outline: none;
	border: none;
`;

const Button = styled.button`
	background: transparent;
	cursor: pointer;
	display: flex;
	align-items: center;
	height: 45px;
	outline: none;
	border: none;
`;

const PlusButtonStyle = css`
	color: ${color.plus_button};
	font-size: 20px;

	&:hover {
		opacity: 0.5;
	}
`;

const InputForm = ({ onSubmit }: Props) => {
	const [keyword, setKeyword] = useState('');
	const { addTodo } = useTodos();

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			addTodo(keyword);
			setKeyword(() => '');
			onSubmit && onSubmit();
		},
		[keyword, addTodo, onSubmit],
	);

	const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
		setKeyword(() => e.target.value);
	}, []);

	return (
		<Container onSubmit={handleSubmit}>
			<Icon>
				<FaSearch />
			</Icon>

			<Input type="text" value={keyword} onChange={handleChange} autoFocus />

			<Button type="submit" css={PlusButtonStyle}>
				<FaPlusCircle />
			</Button>
		</Container>
	);
};

export default InputForm;
