import * as express from 'express';
import * as passport from 'passport';
var router = express.Router();
import client from '../Sqlconnection';

//check route is working
router.get('/',(req,res)=>{
    
    res.status(200).json("route working!");
    
})



//route for signup


export default router;

