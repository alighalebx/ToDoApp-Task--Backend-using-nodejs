import { Document } from 'mongoose';

export interface Task extends Document {
    Title: string;
    Description?: string;
    userId: string;
}