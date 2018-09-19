import * as express from 'express';
import db from '../Sqlconnection';
var router = express.Router();


//check todo route is working
router.get('/',(req,res)=>{
    res.status(200).json("AddTodo working!")
})

//todo post restfull api

router.post('/tasks',(req,res)=>{

    db.one('INSERT INTO todos(title, discription ,userid,done) VALUES($1, $2,$3,$4) RETURNING id', [req.body.title, req.body.discription,req.body.userid,false])
    .then(data => {
        console.log(data.id); // print new user id;
        res.status(200).json('Successfully Added');
    })
    .catch(error => {
        console.log('ERROR:', error); // print error;
        res.status(500).json("error occured!");
    });

});





export default router;