import express from "express";
import { mapOrder } from "./ultilities/Sorts";

const app = express();

const hostname = "localhost";
const post = 10099;

app.get("/", (req, res) => {
  res.end("<h1>Hello word</h1><hr/>");
});

app.listen(post, hostname, () => {
  console.log(`Hello, Im running at ${hostname}: ${post}/`);
});
