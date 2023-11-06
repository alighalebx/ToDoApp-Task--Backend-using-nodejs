import express from 'express';
import * as taskController from '../controllers/toDoController';

const taskRouter = express.Router();

taskRouter.get('/tasks', taskController.getAllTasks);
taskRouter.get('/tasks/:userId', taskController.getTasksByUserId);
taskRouter.post('/tasks', taskController.createTask);

export default taskRouter;