import type { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { createError } from '../utils/responseUtils';
import { USER_AUTHORIZATION_ERROS } from '../utils/validator';

export const validateToken = (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const token = req.headers.authorization;

	if (!token) {
		return res
			.status(StatusCodes.UNAUTHORIZED)
			.send(createError(USER_AUTHORIZATION_ERROS.TOKEN_NOT_FOUND));
	}

	next();
};
