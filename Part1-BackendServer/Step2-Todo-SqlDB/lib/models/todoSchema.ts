import * as mongoose from 'mongoose';

var todoSchema = mongoose.Schema({
    title: String,
    discription: String,
    done: Boolean
});

var todoModels = mongoose.model('todo', todoSchema);

export default todoModels;