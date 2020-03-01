import express from "express";
const app = express();
const port: number = 8085;

app.get("/", (_request, response) => {
  response.json({
    message: "Hello world!"
  });
});

module.exports = app.listen(port);
