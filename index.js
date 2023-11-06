"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const toDoRoutes_1 = __importDefault(require("./routes/toDoRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', userRoutes_1.default);
app.use('/', toDoRoutes_1.default);
app.listen(3000, function () {
    console.log("listening on port 3000");
});
