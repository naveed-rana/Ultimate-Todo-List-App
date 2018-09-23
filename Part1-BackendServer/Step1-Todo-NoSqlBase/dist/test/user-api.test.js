"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("supertest");
const app_1 = require("../app");
//test /user route is working or not
describe("GET /Api", () => {
    it("should return 200 OK", () => {
        return request(app_1.App).get("/user")
            .expect(200);
    });
});
//test post signup req in user route
// describe('POST /users', function() {
//   it('responds with json', function(done) {
//     request(App)
//       .post('/user/signup')
//       .send({name: 'naveed',email:'rana.naveed812@gmail.com',password:'124'})
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });
//test post Login req in user route
describe('POST /users/login', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/login')
            .send({ email: 'rana.naveed812@gmail.com', password: '124' })
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//test post Logout req in user route
describe('POST logout test', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/logout')
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//test post athenticate req in user route
describe('POST athenticate test', function () {
    it('responds with json', function (done) {
        request(app_1.App)
            .post('/user/authenticate')
            .expect(200)
            .end(function (err, res) {
            if (err)
                return done(err);
            done();
        });
    });
});
//# sourceMappingURL=user-api.test.js.map