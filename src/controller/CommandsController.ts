import { Request, Response } from "express";
import CommandsService from "../service/CommandsService/CommandsService";
import {
  ICreateCommandDTO,
  IDeleteCommandDTO,
  IGetAllCommandsDTO,
  IGetCommandDTO,
  IGetCommandResponseDTO,
  IUpdateCommandDTO,
} from "../service/CommandsService/types";
import CommandsRepository from "../shared/database/repositories/CommandRepository";

class CommandsController {
  async createCommand(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.body as ICreateCommandDTO;

    const response = await commandsService.createCommand(data);

    res.json({ response: `Command ${data.alias} created.` });
  }

  async getCommandResponse(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.body as IGetCommandResponseDTO;

    const commandResponse = await commandsService.getCommandResponse(data);

    res.json({ response: commandResponse });
  }

  async getCommand(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.query as IGetCommandDTO;

    const command = await commandsService.getCommand(data);

    res.json({ response: command });
  }

  async getAllCommands(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.query as IGetAllCommandsDTO;

    const command = await commandsService.getAllCommands(data);

    res.json({ response: command });
  }

  async updateCommand(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.body as IUpdateCommandDTO;

    const response = await commandsService.updateCommand(data);

    const responseAliasId = data.alias || data.id;

    res.json({ response: `Command ${responseAliasId} updated.` });
  }

  async deleteCommand(req: Request, res: Response) {
    const commandsService = new CommandsService(new CommandsRepository());

    const data = req.query as IDeleteCommandDTO;

    const response = await commandsService.deleteCommand(data);

    const responseAliasId = data.alias || data.id;

    res.json({ response: `Command ${responseAliasId} deleted.` });
  }
}

export default CommandsController;
