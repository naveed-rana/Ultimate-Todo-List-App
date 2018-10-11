// package: pb
// file: proto/books.proto

var jspb = require("google-protobuf");
var proto_books_pb = require("../proto/books_pb");
var BookService = {
  serviceName: "pb.BookService"
};
BookService.GetBook = {
  methodName: "GetBook",
  service: BookService,
  requestStream: false,
  responseStream: false,
  requestType: proto_books_pb.GetBookRequest,
  responseType: proto_books_pb.Book
};
module.exports = {
  BookService: BookService,
};

