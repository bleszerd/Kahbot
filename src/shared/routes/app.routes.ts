import { Router } from "express";
import MainAppController from "../../controller/MainAppController";

const mainRouter = Router();

const mainAppController = new MainAppController();

mainRouter.get("/", mainAppController.healthCheck);

export default mainRouter;
