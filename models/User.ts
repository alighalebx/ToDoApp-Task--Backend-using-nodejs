
import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    Name: string;
    Email: string;
    PhoneNo: string;
}

const userSchema = new Schema<User>({
    Name: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    PhoneNo: { type: String, required: true, unique: true, maxlength: 14 },
});

const UserModel = mongoose.model<User>('User', userSchema);

export default UserModel;
