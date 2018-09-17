import * as express from 'express';
import * as passport from 'passport';
import usersModels from '../models/usersSchema';
var router = express.Router();

//check route is working
router.get('/',(req,res)=>{
    res.status(200).json("route working!")
})

//route for signup

router.post('/signup',(req,res)=>{
    let newUser = new usersModels(req.body);
    newUser.save((err,user)=>{
        if(err){
            res.status(500).json("error has been occored!")
        }
        else{
            res.status(200).json("Account has been created!")
        }
    });
});


export default router;
