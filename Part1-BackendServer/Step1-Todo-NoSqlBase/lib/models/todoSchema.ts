import * as mongoose from 'mongoose';

var todoSchema = mongoose.Schema({
    id: String,
    title: String,
    desc: String,
    done: Boolean,
    createAt: String,
});

var todoModels = mongoose.model('todo', todoSchema);

export default todoModels;