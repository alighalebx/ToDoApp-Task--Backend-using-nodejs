import { Request, Response } from 'express';
import { addusers, getUsers } from '../services/userService';
import { User } from '../types/userTypes';

const users: User[] = getUsers(); // In-memory "database"

export const getAllUsers = (req: Request, res: Response) => {
    
    res.json(users);
};

export const getUserById = (req: Request, res: Response) => {

    const userId = parseInt(req.params.userId, 10);
    const user = users.find((u) => u.Id === userId);

    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }
    else {
    res.json(user);
    }
};

export const createUser = (req: Request, res: Response) => {
    const newUser: User = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
};