import { Request, Response } from "express";
import CommandsService from "../service/CommandsService/CommandsService";
import {
  ICreateCommandDTO,
  IGetCommandResponseDTO,
} from "../service/CommandsService/types";
import CommandsRepository from "../shared/database/repositories/CommandRepository";

class CommandsController {
  async createCommand(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.body as ICreateCommandDTO;

    await commandsService.createCommand(data);

    res.json({ response: `Command ${data.alias} created.` });
  }

  async getCommandResponse(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.body as IGetCommandResponseDTO;

    const commandResponse = await commandsService.getCommandResponse(data);

    res.json({ response: commandResponse });
  }
}

export default CommandsController;
