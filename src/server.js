import express from "express";
import { connectDB } from "*/config/mongodb";
import { env } from "*/config/environment";

const hostname = env.HOST_NAME;
const post = env.PORT;

connectDB()
  .then(() => console.log("Connected successfully to database server"))
  .then(() => bootServer())
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
const bootServer = () => {
  const app = express();
  app.get("/test", async (req, res) => {
    res.end("<h1>Hello word</h1><hr/>");
  });

  app.listen(post, hostname, () => {
    console.log(`Hello, Im running at ${hostname}: ${post}/`);
  });
};
