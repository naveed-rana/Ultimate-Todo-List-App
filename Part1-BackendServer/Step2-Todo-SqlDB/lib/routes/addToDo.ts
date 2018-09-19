import * as express from 'express';
import db from '../Sqlconnection';
var router = express.Router();


//check todo route is working
router.get('/',(req,res)=>{
    res.status(200).json("AddTodo working!")
})


