import { create, update, Data, db } from '../models/db';
import type { Todo } from '../interfaces/todos';

export const createTodo = async ({ title, userId }: Partial<Todo>) => {
  const todo = create<Todo>({ title, userId, complete: false });

  db.data?.todos.push(todo);
  await db.write();

  return todo;
};

export const findTodos = (userId: string) => {
  const todos = db.data?.todos.filter((todo) => todo.userId === userId);
  return todos;
};

export const findTodo = (predicate: (todo: Todo) => boolean) => {
  return db.data?.todos.find(predicate);
};

export const updateTodo = async (todo: Todo, todoValue: Partial<Todo>) => {
  Object.assign(
    todo,
    update<Todo>({
      ...todo,
      ...todoValue,
    }),
  );

  await db.write();

  return todo;
};

export const deleteTodo = async (todoToDelete: Todo) => {
  const filteredTodos = db.data?.todos.filter(
    (todo) => todo.id !== todoToDelete.id,
  ) as Todo[];

  (db.data as Data).todos = filteredTodos;

  await db.write();

  return todoToDelete;
};
