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


//get request restfull api using postgress db
router.get('/tasks',(req,res)=>{
    db.any('SELECT * FROM todos WHERE userid = $1', [req.query.userid])
    .then(function(data) {
        // success;
        res.status(200).json(data);
    })
    .catch(function(error) {
        // error;
        res.status(500).json(error);
    });

    
})

//get one request restfull api
router.get('/tasks:id',(req,res)=>{
    db.oneOrNone('SELECT * FROM todos WHERE id = $1', [req.params.id])
    .then(function(data) {
        // success;
        res.status(200).json(data);
    })
    .catch(function(error) {
        // error;
        res.status(500).json(error);
    });
});

//put request restfull api
router.put('/tasks:id',(req,res)=>{
    
    db.one('UPDATE todos SET title = $1,discription = $2, done =$3  WHERE id = $4', [req.body.title, req.body.discription, req.body.done ,req.params.id])
    .then(function(data) {
        // success;
        res.status(200).json(data);
    })
    .catch(function(error) {
        // error;
        res.status(500).json(error);
    });
})




export default router;