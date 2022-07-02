import "dotenv/config";

import express from "express";
import mainRouter from "./routes/app.routes";

import { setupTwitchIrc } from "./irc/twitchIrc";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`HTTP App Running at port ${PORT}!`);

  setupTwitchIrc();
});
