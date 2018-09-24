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


});

//bind server

server.bind(`0.0.0.0:${PORT}`, credentials);
console.log(`Starting server on port ${PORT}`);
server.start();

