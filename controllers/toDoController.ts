import { Request, Response } from 'express';
import { addTasks, getTasks } from '../services/toDoService';
import { Task } from '../types/taskTypes';

const tasks: Task[] = getTasks(); // In-memory "database"

export const getAllTasks = (req: Request, res: Response) => {
    res.json(tasks);
};

export const getTasksByUserId = (req: Request, res: Response) => {
    const userId = parseInt(req.params.userId, 10);
    const userTasks = tasks.filter((task) => task.UserId === userId);

    if (userTasks.length === 0) {
        res.status(404).json({ error: 'No tasks found for this user' });
    } else {
        res.json(userTasks);
    }
};

export const createTask = (req: Request, res: Response) => {
    const newTask: Task = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
};