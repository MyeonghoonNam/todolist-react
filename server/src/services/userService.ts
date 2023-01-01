import { create, db } from '../models/db';

import type { User, UserInput } from '../interfaces/users';

export const createUser = async ({ email, password }: UserInput) => {
  const newUser = create<User>({ email, password });

  db.data?.users.push(newUser);
  await db.write();

  return newUser;
};

export const findUser = (predicate: (user: User) => boolean) => {
  return db.data?.users.find(predicate);
};

export const authUser = async (user: User, token: string) => {
  user.token = token;
  await db.write();
};
