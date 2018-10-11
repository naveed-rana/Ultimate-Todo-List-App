import * as express from 'express';
import todoModels from '../models/todoSchema';
var router = express.Router();

//check todo route is working
router.get('/',(req,res)=>{
    res.status(200).json("AddTodo working!")
})

//todo post restfull api

router.post('/tasks',(req,res)=>{
    let newTodo = new todoModels(req.body);
    newTodo.save((err,todo)=>{
        if(err){
            res.status(500).json("error has been occored!");
        }
        else{
            
            res.status(200).json(todo);
        }
    });
});


//get request restfull api
router.get('/tasks',(req,res)=>{
    todoModels.find({},(err,data)=>{
        if(err){
            res.status(401).json(err);
        }
        else{
            console.log(data);

            res.status(200).json(data);
        }
    });
    
})


//get one request restfull api
router.get('/tasks/:id',(req,res)=>{
    
    todoModels.findOne({id:req.params.id},(err,data)=>{
        if(err){
        res.status(401).json(err);
        }
        else{
            res.status(200).json(data);
        }    
    });   
})


//put request restfull api
router.put('/tasks/:id',(req,res)=>{
    console.log(req.params.id);

    todoModels.findOneAndUpdate({id: req.params.id},
         {$set:{
             title: req.body.title,
             desc: req.body.desc,
             done: req.body.done
        }},
         (err,data)=>{
        if(err){
        res.status(401).json(err);
       }
        else{
        res.status(200).json(data);
        }    
    });   
})


//delete request restfull api
router.delete('/tasks/:id',(req,res)=>{
     console.log(req.params.id);
    todoModels.findOneAndDelete({id:req.params.id},(err)=>{
        if(err){
            res.status(500).json("error has been occored!");
        }
        else{
            res.status(200).json("deleted");
        }
    });
})


export default router;
