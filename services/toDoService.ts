import { Task } from "../types/taskTypes" 

let tasks = [
    {
        Id:1,
        Title:"Do1",
        Description:"DO",
        UserId:1
    },
    {
        Id:2,
        Title:"Do2",
        Description:"DO",
        UserId:1
    },
    {
        Id:3,
        Title:"Do3",
        Description:"DO",
        UserId:2
    },
    {
        Id:4,
        Title:"Do4",
        Description:"DO",
        UserId:4
    },
]

const getTasks= () => {

    return tasks;
}

const addTasks= (task: Task) =>{
    //tasks.push(task);
}

export {getTasks,addTasks}