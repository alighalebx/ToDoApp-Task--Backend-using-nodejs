"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
const users = (0, userService_1.getUsers)(); // In-memory "database"
const getAllUsers = (req, res) => {
    res.json(users);
};
exports.getAllUsers = getAllUsers;
const getUserById = (req, res) => {
    const userId = parseInt(req.params.userId, 10);
    const user = users.find((u) => u.Id === userId);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    }
    else {
        res.json(user);
    }
};
exports.getUserById = getUserById;
const createUser = (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.status(201).json(newUser);
};
exports.createUser = createUser;
