import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoutes';
import toDoRoutes from './routes/toDoRoutes';
import dotenv from 'dotenv';
import { ConnectOptions } from 'mongoose';
dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json());


dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/default-database';

mongoose.connect(MONGODB_URL).then((value) => {
    console.log("Database connected successfully");
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/', userRouter); 
app.use('/', toDoRoutes);

app.listen(3000, function(){
    console.log("listening on port 3000");

    console.log("listening on port 3000");
    
});