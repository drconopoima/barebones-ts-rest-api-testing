const supertest = require("supertest");
const app = require("../../src/server");
const { Listing } = require("../../src/database/listings");

describe("Main app endpoint", () => {
  it("responds to request", async () => {
    // Act
    const response = await supertest(app).get("/");
    // Assert
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Hello world!");
  });
});

describe("Listings retrieval endpoint", () => {
  it("responds listings with required properties", async () => {
    // Arrange
    // Act
    const response = await supertest(app).get("/listings");
    // Assert
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body[0]).toHaveProperty("id");
    expect(response.body[0]).toHaveProperty("title");
    expect(response.body[0]).toHaveProperty("image");
    expect(response.body[0]).toHaveProperty("address");
    expect(response.body[0]).toHaveProperty("price");
    expect(response.body[0]).toHaveProperty("numberOfBedrooms");
    expect(response.body[0]).toHaveProperty("numberOfBathrooms");
  });
});
