import * as express from 'express';
import * as passport from 'passport';
var router = express.Router();
import db from '../Sqlconnection';

//check route is working

router.get('/',(req,res)=>{

  db.oneOrNone('SELECT * FROM users WHERE email = $1', ["rana.naveed812@gmail.com"])
  .then(function(data) {
      // success;
      res.status(200).json(data);
  })
  .catch(function(error) {
      // error;
      res.status(500).json("route not working!");
  });
    
})



//route for signup

router.post('/signup',(req,res)=>{
    
  db.one('INSERT INTO users(name, email ,password) VALUES($1, $2) RETURNING _id', [req.body.name, req.body.email, req.body.password])
  .then(data => {
      console.log(data._id); // print new user id;
      res.status(200).json('added');
  })
  .catch(error => {
      console.log('ERROR:', error); // print error;
      res.status(401).json('err');
  });

  
});


//login Route
router.post('/login',passport.authenticate('local'),(req,res)=>{
        res.status(200).json(req.user);
  
   });



router.post('/logout',(req,res)=>{
    req.logout();
    res.status(200).json("succefully logout!");  
     });  

export default router;

