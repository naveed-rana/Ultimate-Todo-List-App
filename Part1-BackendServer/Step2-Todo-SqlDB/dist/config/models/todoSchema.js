"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
var todoSchema = mongoose.Schema({
    title: String,
    discription: String,
    done: Boolean
});
var todoModels = mongoose.model('todo', todoSchema);
exports.default = todoModels;
//# sourceMappingURL=todoSchema.js.map