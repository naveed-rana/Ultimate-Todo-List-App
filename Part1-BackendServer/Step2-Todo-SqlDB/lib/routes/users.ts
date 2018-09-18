import * as express from 'express';
import * as passport from 'passport';
var router = express.Router();
import client from '../Sqlconnection';

//check route is working
router.get('/',(req,res)=>{
    
    res.status(200).json("route working!");
    
})



//route for signup

router.post('/signup',(req,res)=>{
    const query = {
        text: 'INSERT INTO users(name, email,password) VALUES($1, $2, $3)',
        values: [req.body.name, req.body.email,req.body.password],
      }
      
      // callback
      client.query(query, (err, data) => {
        if (err) {
          console.log(err.stack)
          client.end();
          res.status(400).json(err);
        } else {
          console.log(data.rows);
          client.end();
          res.status(200).json(data.rows);
        }
      })
      
});

export default router;

