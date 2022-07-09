import CommandsRepository from "../../shared/database/repositories/CommandRepository";
import AppError from "../../shared/errors";
import {
  ICreateCommandDTO,
  IDeleteCommandDTO,
  IDeleteCommandQuery,
  IGetAllCommandsDTO,
  IGetCommandDTO,
  IGetCommandQuery,
  IGetCommandResponseDTO,
  IUpdateCommandDTO,
} from "./types";

class CommandsService {
  constructor(private commandRepository: CommandsRepository) {}

  async createCommand(createCommandDTO: ICreateCommandDTO) {
    try {
      const response = await this.commandRepository.createCommand(
        createCommandDTO
      );
      return response;
    } catch (e) {
      throw new AppError({
        message: `Command with alias ${createCommandDTO.alias} already exists`,
        errorCode: "400",
      });
    }
  }

  async getCommandResponse(getCommandResponseDTO: IGetCommandResponseDTO) {
    const rawCommandResponse = await this.commandRepository.getCommandResponse({
      alias: getCommandResponseDTO.alias,
    });

    if (!rawCommandResponse) {
      return null;
    }

    let commandResponse = rawCommandResponse.response;

    rawCommandResponse.replaces.forEach((replaceSymbol) => {
      commandResponse = commandResponse.replace(
        replaceSymbol.symbol,
        replaceSymbol.with
      );
    });

    return commandResponse;
  }

  async getCommand(getCommandDTO: IGetCommandDTO) {
    const { alias, id } = getCommandDTO;

    let commandQuery: IGetCommandQuery = {};

    if (id) {
      commandQuery._id = id;
    } else {
      commandQuery.alias = alias;
    }

    const command = await this.commandRepository.getCommand(commandQuery);

    return command;
  }

  async getAllCommands(getAllCommandsDTO: IGetAllCommandsDTO) {
    const LIMIT = 50;

    const { page } = getAllCommandsDTO;

    const fixedPageIndex = (page || 1) - 1;

    const offsetStart = LIMIT * fixedPageIndex;

    const commands = await this.commandRepository.getAllCommands({
      offsetStart,
      offsetStep: LIMIT,
    });

    return commands;
  }

  async updateCommand(updateCommandDTO: IUpdateCommandDTO) {
    const { newCommand, alias, id } = updateCommandDTO;

    let commandQuery: IGetCommandQuery = {};

    if (id) {
      commandQuery._id = id;
    } else {
      commandQuery.alias = alias;
    }
    const response = await this.commandRepository.updateCommand({
      commandQuery,
      command: newCommand,
    });

    return response;
  }

  async deleteCommand(deleteCommandDTO: IDeleteCommandDTO) {
    const { alias, id } = deleteCommandDTO;

    let commandQuery: IDeleteCommandQuery = {};

    if (id) {
      commandQuery._id = id;
    } else {
      commandQuery.alias = alias;
    }

    const response = await this.commandRepository.deleteCommand(commandQuery);

    return response;
  }
}

export default CommandsService;
