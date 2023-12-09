"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addusers = exports.getUsers = void 0;
let users = [
    {
        Id: 1,
        Name: "Ali",
        PhoneNo: "010123456789",
        Age: 21
    },
    {
        Id: 2,
        Name: "Ali2",
        PhoneNo: "010123456789",
        Age: 21
    },
    {
        Id: 3,
        Name: "Ali3",
        PhoneNo: "010123456789",
        Age: 21
    },
    {
        Id: 4,
        Name: "Ali4",
        PhoneNo: "010123456789",
        Age: 21
    },
];
const getUsers = () => {
    return users;
};
exports.getUsers = getUsers;
const addusers = (user) => {
    //users.push(user);
};
exports.addusers = addusers;
