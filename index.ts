import express from 'express';
import userRouter from './routes/userRoutes';
import toDoRoutes from './routes/toDoRoutes';
const app = express();

app.use(express.json());

app.use('/', userRouter); 
app.use('/',toDoRoutes);

app.listen(3000, function(){

    console.log("listening on port 3000");
    
});