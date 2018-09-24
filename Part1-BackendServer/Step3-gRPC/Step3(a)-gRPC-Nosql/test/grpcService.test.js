const grpc = require("grpc");
const protoPath = require("path").join(__dirname, "../", "proto");
const proto = grpc.load({ root: protoPath, file: "todoService.proto" });
const client = new proto.TodoService(
  "localhost:10000",
  grpc.credentials.createInsecure()
);

test("test for adding a todo", () => {
  client.InsertTodo(
    {todo:{
        _id: "ksjdaf234",
        title: "test",
        desc:"somede",
        done: false,
        createdAt:'23 june'
      }},
    (error, response) => {
      if (!error) {
        expect(response).not.toBeNull();
      } else {
        console.log("Error:", error.message);
      }
    }
  );
});


//remove
test("test for remove todo", () => {
  client.RemoveTodo(
    {id:'ksjdaf234'},
    (error, response) => {
      if (!error) {
        expect(response).not.toBeNull();
      } else {
        console.log("Error:", error.message);
      }
    }
  );
});



//update
test("test for remove todo", () => {
  client.UpdateTodo(
    {todo:{
      _id: "ksjdaf234",
      title: "test",
      desc:"somede",
      done: false,
      createdAt:'23 june'
    }},
    (error, response) => {
      if (!error) {
        expect(response).not.toBeNull();
      } else {
        console.log("Error:", error.message);
      }
    }
  );
});
