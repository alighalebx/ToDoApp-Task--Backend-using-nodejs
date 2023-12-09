"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToDo = exports.getToDosByUserId = exports.getAllToDos = void 0;
const ToDo_1 = __importDefault(require("../models/ToDo"));
const getAllToDos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const todos = yield ToDo_1.default.find();
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getAllToDos = getAllToDos;
const getToDosByUserId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.params.userId;
    try {
        const todos = yield ToDo_1.default.find({ userId });
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.getToDosByUserId = getToDosByUserId;
const createToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { Title, Description, userId } = req.body;
    try {
        const newToDo = yield ToDo_1.default.create({ Title, Description, userId });
        res.status(201).json(newToDo);
    }
    catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
exports.createToDo = createToDo;
