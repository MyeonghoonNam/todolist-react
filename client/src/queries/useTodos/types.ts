export interface QueryData {
  data: Todo[];
}

export interface Todo {
  title: string;
  userId: string;
  complete: boolean;
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type TodoFormInput = Pick<Todo, 'title' | 'userId'>;

export type TodoUpdateInput = Pick<Todo, 'title' | 'complete'>;
