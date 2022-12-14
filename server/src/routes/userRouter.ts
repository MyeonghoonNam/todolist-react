import express from 'express';

import * as authController from '../controllers/authController';

const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.signUp);
router.get('/auth', authController.auth);
router.get('/refresh', authController.refresh);

export default router;
