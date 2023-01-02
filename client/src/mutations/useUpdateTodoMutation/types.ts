import type { Todo } from '@queries/useTodos/types';

export type TodoUpdateInput = Pick<Todo, 'title' | 'complete'>;
