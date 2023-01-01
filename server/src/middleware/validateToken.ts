import type { NextFunction, Request, Response } from 'express';

import { StatusCodes } from 'http-status-codes';
import { createError } from '../utils/responseUtils';
import { USER_AUTHORIZATION_ERROS } from '../utils/validator';
import { parseCookies, parseToken } from '../utils/parseString';
import { verifyToken } from '../utils/authorizeUtils';

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!req.headers.authorization) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(createError(USER_AUTHORIZATION_ERROS.TOKEN_NOT_FOUND));
  }

  const cookies = parseCookies(req.headers.cookie);

  const accessToken = verifyToken(parseToken(req.headers.authorization));
  const refreshToken = verifyToken(cookies.token);

  if (!accessToken.ok || !refreshToken.ok) {
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(createError(USER_AUTHORIZATION_ERROS.TOKEN_EXPIRED));
  }

  next();
};
