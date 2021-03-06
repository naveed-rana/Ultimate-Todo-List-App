const path = require("path");
const PROTO_PATH = path.join("proto", "todoService.proto");
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const serviceDefinition = protoLoader.loadSync(PROTO_PATH);
const PORT = 10000;
const db = require('./config/index');

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
     db.one('INSERT INTO todo(title, description ,createat,done,id) VALUES($1, $2, $3, $4,$5) RETURNING id', [payload.title, payload.desc, payload.createAt,payload.done,payload._id])
     .then(() => {
      callback(null, { success: true });
     })
     .catch(err => {
      callback(err, null);
     });
  },
  // Remove todo service
  RemoveTodo(call, callback){
		let id = call.request.id;
    db.result('DELETE FROM todo WHERE id = $1', id)
    .then(() => {
        // rowCount = number of rows affected by the query
        // print how many records were deleted;
        callback(null, { success: true });
    })
    .catch(err => {
        callback(err, null);
    });
   
  },
  //update todo service
  UpdateTodo(call, callback){
		let id = call.request.todo.id;
    db.result('UPDATE todo SET title = $1, description = $2, done =$3  WHERE id = $4', [call.request.todo.title, call.request.todo.desc, call.request.todo.done ,id])
    .then(function() {
        // success;
        callback(null, { success: true });
    })
    .catch(function(err) {
        // error;
        callback(err, null);
    });
  },

  //get All todos todo service
  AllTodos(call, callback){
    
    db.any('SELECT * FROM todo')
    .then(function(data) {
        // success;
        data.foreach((todo)=>{
        call.write({todo:todo});
        })
        call.end();
    })
    .catch(function(err) {
        // error;
        callback(err, null);
    })

  },

  //get single todo service
  GetTodo(call, callback){
    let id = call.request.id;
   
  db.any('SELECT * FROM todo WHERE id = $1', [id])
    .then(function(data) {
      callback(err,{todo:data})
    })
    .catch(function(err) {
        // error;
        callback(err, null);
    });

  },

  

});

//bind server

server.bind(`0.0.0.0:${PORT}`, credentials);
console.log(`Starting server on port ${PORT}`);
server.start();

