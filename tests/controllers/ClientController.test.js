const request = require('supertest');
const app = require(`@src/app`);
const mongoose = require("mongoose");

beforeEach((done) => {
  mongoose.connect("mongodb://localhost/db-pizzabor",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => done());
});

afterEach((done) => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  });
});

describe('Client', () => {
  test('should return all clients when the connection with the database occurs correctly', async () => {
    const response = await request(app).get("/api/clients");
    expect(response.status).toBe(200);
  });
})
