const supertest = require("supertest");
const app = require("../src/server");

describe("Verify Jest", () => {
  it("is working correctly", async done => {
    expect(1).toBe(1);
    done();
  });
});

describe("Main app Endpoint", () => {
  it("responds to request", async () => {
    // Act
    const response = await supertest(app).get("/");
    // Assert
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello world!");
  });
});
