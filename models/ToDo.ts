// Models/ToDo.ts
import mongoose, { Schema, Document } from 'mongoose';
import { User } from './User';

export interface ToDo extends Document {
    Title: string;
    Description?: string;
    userId: User['_id'];
}

const toDoSchema = new Schema<ToDo>({
    Title: { type: String, required: true, maxlength: 50 },
    Description: { type: String, maxlength: 200 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

const ToDoModel = mongoose.model<ToDo>('ToDo', toDoSchema);

export default ToDoModel;
