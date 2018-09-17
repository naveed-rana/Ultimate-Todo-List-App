import * as express from 'express';
import todoModels from '../models/usersSchema';
var router = express.Router();

//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("AddTodo working!")
})


export default router;
