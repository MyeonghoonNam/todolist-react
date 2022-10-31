import styled from '@emotion/styled';
import Todo from '@interfaces/Todo';
import Toggle from '@components/Toggle';
import font from '@assets/font';
import color from '@assets/color';
import { FaTrash } from 'react-icons/fa';
import { css } from '@emotion/react';
import { ChangeEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getTodoList, removeTodo, updateTodo } from '@store/todos';
import { AppDispatch } from '@store/index';

const TodoItem = ({ id, title, complete }: Todo) => {
	const dispatch = useDispatch<AppDispatch>();

	const handleChange = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const complete = e.target.checked;
			dispatch(updateTodo({ id, title, complete }));
			dispatch(getTodoList());
		},
		[dispatch, title, id],
	);

	const handleClick = useCallback(() => {
		dispatch(removeTodo({ id }));
		dispatch(getTodoList());
	}, [dispatch, id]);

	return (
		<Container>
			<Toggle on={complete} onChange={handleChange} />

			<Content>{complete ? <del>{title}</del> : title}</Content>

			<Button type="button" onClick={handleClick}>
				<FaTrash css={RemoveButtonStyle} />
			</Button>
		</Container>
	);
};

const Container = styled.li`
	display: flex;
	position: relative;
	list-style-type: none;
	padding: 17px 16px;
	border-bottom: 1px solid ${color.todo_border_bottom};
	letter-spacing: 1.5px;
	${font.medium};

	&:hover {
		opacity: 0.85;
		background-color: ${color.todo_hover};
	}
`;

const Content = styled.span`
	padding-left: 10px;
	max-width: 90%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	cursor: default;
`;

const Button = styled.button`
	position: absolute;
	top: 50%;
	right: 16px;
	transform: translateY(-50%);
	background-color: transparent;
	border: none;
	cursor: pointer;
`;

const RemoveButtonStyle = css`
	color: ${color.trash_button};
	font-size: 16px;

	&:hover {
		opacity: 0.5;
	}
`;

export default TodoItem;
