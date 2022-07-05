import { Router } from "express";

import commandsRouter from "./commands.routes";
import healthCheckRouter from "./healthCheck.routes";

const mainRouter = Router();

mainRouter.use(healthCheckRouter);

mainRouter.use("/commands", commandsRouter);

export default mainRouter;
