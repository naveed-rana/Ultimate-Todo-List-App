const mongoose = require('mongoose');

let todoSchema = new mongoose.Schema({
  id:String,
  title:String,
  desc: String,
  done:Boolean,
  createdAt:String
});
const todoModel = mongoose.model('todo', todoSchema);
module.exports = todoModel;