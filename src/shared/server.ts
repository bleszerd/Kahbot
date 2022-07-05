import "dotenv/config";

import express from "express";
import mainRouter from "./routes/app.routes";

import { setupTwitchIrc } from "./irc/twitchIrc";

import { connectToDatabase } from "./database";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(express.json());

app.use(mainRouter);

connectToDatabase().then(() => {
  console.log("Database Connected");
});

app.listen(PORT, () => {
  console.log(`HTTP App Running at port ${PORT}!`);

  setupTwitchIrc();
});
