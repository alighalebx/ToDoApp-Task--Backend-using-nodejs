"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = exports.getTasksByUserId = exports.getAllTasks = void 0;
const toDoService_1 = require("../services/toDoService");
const tasks = (0, toDoService_1.getTasks)(); // In-memory "database"
const getAllTasks = (req, res) => {
    res.json(tasks);
};
exports.getAllTasks = getAllTasks;
const getTasksByUserId = (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const userTasks = tasks.filter((task) => task.UserId === userId);
    if (userTasks.length === 0) {
        res.status(404).json({ error: 'No tasks found for this user' });
    }
    else {
        res.json(userTasks);
    }
};
exports.getTasksByUserId = getTasksByUserId;
const createTask = (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
};
exports.createTask = createTask;
