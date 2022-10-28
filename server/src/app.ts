import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import createError from 'http-errors';
import { StatusCodes } from 'http-status-codes';

import todoRouter from './routes/todoRouter';

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use('/todos', todoRouter);

app.use((req, res, next) => {
	next(createError(404));
});

app.use((err: Error & { status: number }, req: Request, res: Response) => {
	return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(err);
});

export default app;
