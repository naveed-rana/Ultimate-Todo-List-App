import * as request from "supertest";
import {App} from '../app';




//test post  route
//comment due to its add always same item
describe('POST /task restful Api', function() {
  it('responds with json', function(done) {
    request(App)
      .post('/todo/api/v1.0/tasks')
      .send(
          {
            id: "1",
            title: "meet doc",
            desc: "some",
            done: true,
            createAt: "03 june",
        })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

//test v1.0 todo route is working or not
describe("check working todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/")
      .expect(200);
  });
});


//test v1.0 todo route to get a one single item
describe("GET single todo test", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/tasks/id=1")
      .expect(200);
  });
});


//test v1.0 todo route to get all items
describe("GET all todo ", () => {
  it("should return 200 OK", () => {
    return request(App).get("/todo/api/v1.0/tasks")
      .expect(200);
  });
});




//test post signup req in user route
describe('Put /tasks restful Api', function() {
  it('responds with json', function(done) {
    request(App)
      .put('/todo/api/v1.0/tasks/id=1')
      .send(
          {
            id: "1",
            title: "meet doc",
            desc: "some",
            done: true,
            createAt: "03 june",
        })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});


//test v1.0 todo delete
describe("GET todo test", () => {
    it("should return 200 OK", () => {
      return request(App).delete("/todo/api/v1.0/tasks?id=1")
        .expect(200);
    });
  });