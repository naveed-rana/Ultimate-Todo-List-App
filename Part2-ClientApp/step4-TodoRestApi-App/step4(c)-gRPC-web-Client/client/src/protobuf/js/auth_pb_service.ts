// package: pb
// file: auth.proto

import * as auth_pb from "./auth_pb";
export class Service {
  static serviceName = "pb.Service";
}
export namespace Service {
  export class Foo {
    static readonly methodName = "Foo";
    static readonly service = Service;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = auth_pb.String;
    static readonly responseType = auth_pb.String;
  }
}
