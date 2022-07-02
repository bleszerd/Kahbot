import "dotenv/config";

import express from "express";
import { setupTwitchIrc } from "./connection/twitchIrc";

import mainRouter from "./routes/app.routes";

const app = express();

const PORT = process.env.PORT || 3333;

app.use(mainRouter);

app.listen(PORT, () => {
  console.log(`HTTP App Running at port ${PORT}!`);

  setupTwitchIrc();
});
