/* eslint-disable import/no-unresolved */
import path, { join } from 'path';
import { Low, JSONFile } from 'lowdb';

import fs from 'fs/promises';

import type { Todo } from '../interfaces/todos';

const dirname = path.resolve();

export interface Data {
	todos: Todo[];
	suggestList: string[];
}

let db: Low<Data>;

const initDatabase = async () => {
	const filePath = join(dirname, './db/db.json');
	const file = await fs.readFile(filePath).catch(() => void 0);

	if (!file) {
		const dataFilePath = join(dirname, './db/data.json');
		const jsonFile = await fs.readFile(dataFilePath).catch(() => void 0);
		const jsonData = JSON.parse(jsonFile?.toString() as string);

		await fs.writeFile(filePath, JSON.stringify(jsonData));
	}

	return filePath;
};

export const createConnection = async () => {
	const filePath = await initDatabase();

	const adapter = new JSONFile<Data>(filePath);

	db = new Low<Data>(adapter);

	await db.read();
	await db.write();
};
