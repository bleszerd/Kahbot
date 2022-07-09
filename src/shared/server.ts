import "dotenv/config";
import "express-async-errors";

import express from "express";
import mainRouter from "./routes/app.routes";
import cors from "cors";

import { setupTwitchIrc } from "./irc/twitchIrc";

import { connectToDatabase } from "./database";
import { appErrorsMiddleware } from "./errors/appErrorsMiddleware";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());

app.use(express.json());

app.use(mainRouter);

app.use(appErrorsMiddleware);

connectToDatabase().then(() => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`HTTP App Running at port ${PORT}!`);

  setupTwitchIrc();
});
