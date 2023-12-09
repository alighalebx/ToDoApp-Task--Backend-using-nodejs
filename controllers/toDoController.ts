import { Request, Response } from 'express';
import ToDoModel, { ToDo } from '../models/ToDo';

export const getAllToDos = async (req: Request, res: Response) => {
    try {
    const todos = await ToDoModel.find();
    res.json(todos);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getToDosByUserId = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
        const todos = await ToDoModel.find({ userId });
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const createToDo = async (req: Request, res: Response) => {
    const { Title, Description, userId }: ToDo = req.body;

    try {
        const newToDo = await ToDoModel.create({ Title, Description, userId });
        res.status(201).json(newToDo);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
