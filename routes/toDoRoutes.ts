import express from 'express';
import * as toDoController from '../controllers/toDoController';

const toDoRouter = express.Router();


toDoRouter.get('/todos', toDoController.getAllToDos);


toDoRouter.get('/todos/:userId', toDoController.getToDosByUserId);


toDoRouter.post('/todos', toDoController.createToDo);

export default toDoRouter;
