import { Document } from 'mongoose';

export interface User extends Document {
    Name: string;
    Email: string;
    PhoneNo: string;
}