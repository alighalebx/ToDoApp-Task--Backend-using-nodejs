import express from 'express';
import * as userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/users', userController.getAllUsers);
userRouter.get('/users/:userId', userController.getUserById);
userRouter.post('/users', userController.createUser);

export default userRouter;