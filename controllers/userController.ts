import { Request, Response } from 'express';
import UserModel, { User } from '../models/User';

export const getAllUsers = async (req: Request, res: Response) => {

    try {
    const users = await UserModel.find();
    res.json(users);
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    }
};

export const getUserById = async (req: Request, res: Response) => {
    const userId = req.params.userId;

    try {
    const user = await UserModel.findById(userId);
    if (!user) {

        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(user);
    }
    } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
    } 
};

export const createUser = async (req: Request, res: Response) => {
    const { Name, Email, PhoneNo }: User = req.body;

    try {
    const newUser = await UserModel.create({ Name, Email, PhoneNo });
    res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
