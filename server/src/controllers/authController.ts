import type { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import { loginValidator, USER_VALIDATION_ERRORS } from '../utils/validator';
import { createError } from '../utils/responseUtils';
import * as userService from '../services/userService';
import { createToken } from '../utils/authorizeUtils';

import { UserInput } from '../interfaces/users';

export const login = async (req: Request, res: Response) => {
	const { email, password }: UserInput = req.body;

	const { isValid, message } = loginValidator({ email, password });

	if (!isValid) {
		return res.status(StatusCodes.BAD_REQUEST).send(createError(message));
	}

	const user = userService.findUser(
		(user) => user.email === email && user.password === password,
	);

	if (user) {
		return res.status(StatusCodes.OK).send({
			message: '성공적으로 로그인 했습니다',
			token: createToken(email),
		});
	}
	return res
		.status(StatusCodes.BAD_REQUEST)
		.send(createError(USER_VALIDATION_ERRORS.USER_NOT_FOUND));
};

export const signUp = async (req: Request, res: Response) => {
	const { email, password }: UserInput = req.body;

	const { isValid, message } = loginValidator({ email, password });

	if (!isValid) {
		return res.status(StatusCodes.BAD_REQUEST).send(createError(message));
	}

	const existUser = userService.findUser((user) => user.email === email);
	if (existUser) {
		return res
			.status(StatusCodes.CONFLICT)
			.send(createError(USER_VALIDATION_ERRORS.EXIST_USER));
	}

	await userService.createUser({ email, password });

	return res.status(StatusCodes.OK).send({
		message: '계정이 성공적으로 생성되었습니다',
		token: createToken(email),
	});
};
