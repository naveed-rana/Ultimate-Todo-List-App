const path = require("path");
const PROTO_PATH = path.join("proto", "todoService.proto");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const serviceDefinition = protoLoader.loadSync(PROTO_PATH);
const PORT = 10000;
const todoModel = require("./models/todoModel");
const setupMongoDb = require('./config/index');

//connection
setupMongoDb();


const credentials = grpc.ServerCredentials.createInsecure();
const server = new grpc.Server();

server.addService(serviceDefinition.TodoService, {
//insert todo using grpc
	InsertTodo(call, callback){
		let getTodo = call.request.todo;
    let payload = {
    _id: getTodo.id,
    title: getTodo.title,
    desc: getTodo.desc,
    done: getTodo.done,
    createdAt:getTodo.createdAt
     };
     let newtodo = new todoModel(payload);
     newtodo.save((err,data)=>{

       if(err){
        callback(err, null);
       }
       else{
        callback(null, { success: true });
       }
     });
  },
  // Remove todo service
  RemoveTodo(call, callback){
		let id = call.request.id;
    todoModels.findOneAndDelete({_id:id},(err)=>{
      if(err){
        callback(err, null);
      }
      else{
         callback(null, { success: true });
      }});
   
  },
  //update todo service
  UpdateTodo(call, callback){
		let id = call.request.todo.id;
    todoModels.findOneAndUpdate({id: id},
      {$set:{
          title: call.request.todo.title,
          desc: call.request.todo.desc,
          done: call.request.todo.done
     }},
      (err,data)=>{
     if(err){
      callback(err, null);
    }
     else{
      callback(null, { success: true });
     }    
 });   

  },

  //get All todos todo service
  AllTodos(call, callback){
    todoModels.find({},(err,data)=>{
      if(err){
        callback(err, null);
      }
      else{
        data.foreach((todo)=>{
          call.write({todo:todo});
        })
        call.end();
      }
  });

  },

  //get single todo service
  GetTodo(call, callback){
    let id = call.request.id;
    todoModels.find({_id:id},(err,data)=>{
      if(err){
          callback(err, null);
      }
      else{
          callback(err,{todo:data})
      }
  });
  },

});

//bind server

server.bind(`0.0.0.0:${PORT}`, credentials);
console.log(`Starting server on port ${PORT}`);
server.start();

