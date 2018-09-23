"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const todoSchema_1 = require("../models/todoSchema");
var router = express.Router();
//check todo route is working
router.get('/', (req, res) => {
    res.status(200).json("AddTodo working!");
});
//todo post restfull api
router.post('/tasks', (req, res) => {
    let newTodo = new todoSchema_1.default(req.body);
    newTodo.save((err, todo) => {
        if (err) {
            res.status(500).json("error has been occored!");
        }
        else {
            res.status(200).json(todo);
        }
    });
});
//get request restfull api
router.get('/tasks', (req, res) => {
    todoSchema_1.default.find({}, (err, data) => {
        if (err) {
            res.status(401).json(err);
        }
        else {
            res.status(200).json(data);
        }
    });
});
//get one request restfull api
router.get('/tasks:id', (req, res) => {
    todoSchema_1.default.findOne({ _id: req.params.id }, (err, data) => {
        if (err) {
            res.status(401).json(err);
        }
        else {
            res.status(200).json(data);
        }
    });
});
//put request restfull api
router.put('/tasks:id', (req, res) => {
    todoSchema_1.default.findOneAndUpdate({ _id: req.params.id }, { $set: {
            title: req.body.title,
            discription: req.body.discription,
            done: req.body.done
        } }, (err, data) => {
        if (err) {
            res.status(401).json(err);
        }
        else {
            res.status(200).json(data);
        }
    });
});
//delete request restfull api
router.delete('/tasks:id', (req, res) => {
    todoSchema_1.default.findOneAndDelete({ _id: req.params.id }, (err) => {
        if (err) {
            res.status(500).json("error has been occored!");
        }
        else {
            res.status(200).json("deleted");
        }
    });
});
exports.default = router;
//# sourceMappingURL=addToDo.js.map