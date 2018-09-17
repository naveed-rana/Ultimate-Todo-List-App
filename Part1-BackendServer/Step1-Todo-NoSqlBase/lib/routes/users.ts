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

//login route

router.post('/login',passport.authenticate('local'),(req,res)=>{
 
    res.status(200).json(req.user);
   })


//logout request
router.post('/logout',(req,res)=>{
    req.logout();
    res.status(200).json("succefully logout!");  
})  

//athenticate user
router.post('/authenticate',(req,res)=>{
    if(req.isAuthenticated()){
        res.status(200).json(req.user)
     }
     else{
        res.status(401).json('user is not logged in!')
     }
})

export default router;
