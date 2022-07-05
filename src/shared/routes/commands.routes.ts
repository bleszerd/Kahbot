import { Router } from "express";
import CommandsController from "../../controller/CommandsController";

const commandsRouter = Router();

const commandsController = new CommandsController();

commandsRouter.post("/createCommand", commandsController.createCommand);

commandsRouter.post(
  "/getCommandResponse",
  commandsController.getCommandResponse
);

export default commandsRouter;
