"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const toDoRoutes_1 = __importDefault(require("./routes/toDoRoutes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(body_parser_1.default.json());
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://localhost:27017/default-database';
mongoose_1.default.connect(MONGODB_URL).then((value) => {
    console.log("Database connected successfully");
});
const db = mongoose_1.default.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));
app.use('/', userRoutes_1.default);
app.use('/', toDoRoutes_1.default);
app.listen(3000, function () {
    console.log("listening on port 3000");
    console.log("listening on port 3000");
});
