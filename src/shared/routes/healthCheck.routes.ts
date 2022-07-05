import { Router } from "express";

import HealthCheckController from "../../controller/HealthCheckController";

const healthCheckRouter = Router();

const healthCheckController = new HealthCheckController();

healthCheckRouter.get("/", healthCheckController.healthCheck);

export default healthCheckRouter;
