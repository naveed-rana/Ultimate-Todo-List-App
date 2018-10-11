import { GetBookRequest } from './proto/books_pb.js';

const getBookRequest = new GetBookRequest();
console.log('request', getBookRequest);

// function getBook() {
//   const getBookRequest = new GetBookRequest();
//   getBookRequest.setIsbn(60929871);
//   grpc.unary(BookService.GetBook, {
//     request: getBookRequest,
//     host: host,
//     onEnd: res => {
//       const { status, statusMessage, headers, message, trailers } = res;
//       console.log("getBook.onEnd.status", status, statusMessage);
//       console.log("getBook.onEnd.headers", headers);
//       if (status === Code.OK && message) {
//         console.log("getBook.onEnd.message", message.toObject());
//       }
//       console.log("getBook.onEnd.trailers", trailers);
//       queryBooks();
//     }
//   });
// }