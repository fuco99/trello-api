import express from "express";
import { connectDB } from "*/config/mongodb";
import { env } from "*/config/environment";
const app = express();

const hostname = env.HOST_NAME;
const post = env.PORT;

connectDB().catch(console.log);
app.get("/", (req, res) => {
  res.end("<h1>Hello word</h1><hr/>");
});

app.listen(post, hostname, () => {
  console.log(`Hello, Im running at ${hostname}: ${post}/`);
});
