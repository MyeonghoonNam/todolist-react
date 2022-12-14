/* eslint-disable @typescript-eslint/no-explicit-any */
import path, { join } from 'path';
import { Low, JSONFile } from 'lowdb';
import { nanoid } from 'nanoid';

import fs from 'fs/promises';

import type { Todo } from '../interfaces/todos';
import type { User } from '../interfaces/users';

const dirname = path.resolve();

export interface Data {
  users: User[];
  todos: Todo[];
  suggestList: string[];
}

export let db: Low<Data>;

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

export const create = <T>(content: any): T => {
  const timestamp = new Date().toISOString();

  return {
    ...content,
    id: nanoid(),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const update = <T>(content: any): T => {
  const timestamp = new Date().toISOString();
  return {
    ...content,
    updatedAt: timestamp,
  };
};
