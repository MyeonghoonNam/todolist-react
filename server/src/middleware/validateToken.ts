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
    console.log(req.headers);
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(createError(USER_AUTHORIZATION_ERROS.TOKEN_NOT_FOUND));
  }

  const cookies = parseCookies(req.headers.cookie);

  const accessToken = verifyToken(parseToken(req.headers.authorization));
  const refreshToken = verifyToken(cookies.token);

  console.log(accessToken);
  console.log(refreshToken);
  if (!accessToken.ok || !refreshToken.ok) {
    console.log('token refresh need');
    return res
      .status(StatusCodes.UNAUTHORIZED)
      .send(createError(USER_AUTHORIZATION_ERROS.TOKEN_EXPIRED));
  }

  next();
};
