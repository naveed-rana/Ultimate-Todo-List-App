import * as express from 'express';
import * as passport from 'passport';
import usersModels from '../models/usersSchema';
var router = express.Router();


router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})




export default router;
