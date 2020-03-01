import express from "express";
import { router } from "../routes";

const app = express();
const port: number = 8085;

app.use("/", router);

module.exports = app.listen(port);
