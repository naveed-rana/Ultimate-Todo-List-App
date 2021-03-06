import * as express from 'express';
import db from '../Sqlconnection';
var router = express.Router();


//check todo route is working
router.get('/',(req,res)=>{
    res.status(200).json("AddTodo working!")
})

//todo post restfull api

router.post('/tasks',(req,res)=>{

    db.one('INSERT INTO todos (title, description ,createat,done,id) VALUES($1, $2, $3, $4,$5) RETURNING id', [req.body.title, req.body.description, req.body.createat,req.body.done,req.body.id])
    .then(data => {
        console.log("full");
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
    db.any('SELECT * FROM todos')
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
    
    db.any('SELECT * FROM todos WHERE id = $1', [req.params.id])
    .then(function(data) {
        // success;
        console.log(data);
        
        res.status(200).json(data);
    })
    .catch(function(error) {
        // error;
        res.status(500).json(error);
    });
});

//put request restfull api
router.put('/tasks/:id',(req,res)=>{
    
    db.result('UPDATE todos SET title = $1, description = $2, done =$3  WHERE id = $4', [req.body.title, req.body.description, req.body.done ,req.params.id])
    .then(function(data) {
        // success;
        res.status(200).json("updated");
    })
    .catch(function(error) {
        // error;
        console.log(error);
        
        res.status(500).json(error);
    });
})

//delete
router.delete('/tasks/:id',(req,res)=>{
 
    db.result('DELETE FROM todos WHERE id = $1', req.params.id)
    .then(result => {
        // rowCount = number of rows affected by the query
        console.log(result.rowCount);
        res.status(200).json("deleted");
        // print how many records were deleted;
    })
    .catch(error => {
        console.log('ERROR:', error);
        res.status(500).json("err");
    });

});



export default router;