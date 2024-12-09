import express from "express";
import logger from "./logger.js";
import { morganMiddleware } from "./morganMiddleware.js";

const app = express();

app.use(express.json());
app.use(morganMiddleware);

app.get("/", (req, res) => {
  logger.debug("Hello world router was called");
  res.send("Hello world");
});

app.get("/error", (req, res) => {
  throw new Error("A custom error is generated");
});

app.use((err, req, res, next) => {
  logger.error(err.message, {
    error: err,
    stackTrace: err.stack,
  }),
    res.status(500).send("Something failed");
});

app.listen(3000, () => {
  console.log(`Server running on port 3000`);
});
