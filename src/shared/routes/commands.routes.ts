import { Router } from "express";
import CommandsController from "../../controller/CommandsController";

const commandsRouter = Router();

const commandsController = new CommandsController();

commandsRouter.post("/createCommand", commandsController.createCommand);

commandsRouter.post(
  "/getCommandResponse",
  commandsController.getCommandResponse
);

commandsRouter.get("/getCommand", commandsController.getCommand);

commandsRouter.get("/getAllCommands", commandsController.getAllCommands);

commandsRouter.put("/updateCommand", commandsController.updateCommand);

commandsRouter.delete("/deleteCommand", commandsController.deleteCommand);

export default commandsRouter;
