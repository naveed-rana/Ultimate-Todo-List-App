import * as request from "supertest";
import {App} from '../app';

describe("GET /Api", () => {
  it("should return 200 OK", () => {
    return request(App).get("/user")
      .expect(200);
  });
});
