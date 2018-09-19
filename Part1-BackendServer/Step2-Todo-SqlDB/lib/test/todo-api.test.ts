import * as request from "supertest";
import {App} from '../app';


//test v1.0 todo route is working or not
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).get("/todo/api/v1.0/")
        .expect(200);
    });
  });

  
//test post todo req
describe('POST /task restful Api', function() {
    it('responds with json', function(done) {
      request(App)
        .post('/todo/api/v1.0/tasks')
        .send(
            {
              title: "meeting with doc",
              discription: "at 2 Pm!",
              done: false,
              userid:1
          })
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });


//test v1.0 todo route to get all items using sql db
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).get("/todo/api/v1.0/tasks")
        .expect(200);
    });
  });


  
//test v1.0 todo route to get a one single item using sql
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).get("/todo/api/v1.0/tasks?id=1")
        .expect(200);
    });
  });
