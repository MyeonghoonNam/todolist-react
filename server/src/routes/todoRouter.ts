import express from 'express';

import * as todoController from '../controllers/todoController';

const router = express.Router();

router.get('/', todoController.getTodos);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;
