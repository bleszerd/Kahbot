import CommandsRepository from "../../shared/database/repositories/CommandRepository";
import { ICreateCommandDTO, IGetCommandResponseDTO } from "./types";

class CommandsService {
  constructor(private commandRepository: CommandsRepository) {}

  async createCommand(createCommandDTO: ICreateCommandDTO) {
    await this.commandRepository.createCommand(createCommandDTO);
  }

  async getCommandResponse(getCommandResponseDTO: IGetCommandResponseDTO) {
    const command = await this.commandRepository.getCommand({
      alias: getCommandResponseDTO.alias,
    });

    if (!command) {
      return null;
    }

    let commandResponse = command.response;

    command.replaces.forEach((replaceSymbol) => {
      commandResponse = commandResponse.replace(
        replaceSymbol.symbol,
        replaceSymbol.with
      );
    });

    return commandResponse;
  }
}

export default CommandsService;
