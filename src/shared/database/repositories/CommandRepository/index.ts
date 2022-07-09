import { Model } from "mongoose";
import {
  IGetAllCommandsRepoDTO,
  IGetCommandQuery,
  IUpdateCommandDTO,
  IUpdateCommandRepoDTO,
} from "../../../../service/CommandsService/types";
import { CommandModel } from "../../schemas/CommandsSchema";
import { ICommand } from "../../schemas/CommandsSchema/types";
import { ICreateUserRepoDTO, IGetCommandRepoDTO } from "./types";

class CommandsRepository {
  private ormRepository: Model<ICommand>;

  constructor() {
    this.ormRepository = CommandModel;
  }

  async createCommand(data: ICreateUserRepoDTO) {
    await this.ormRepository.create(data);
  }

  async getCommandResponse(data: IGetCommandRepoDTO) {
    const { alias } = data;

    const response = await this.ormRepository.findOne({ alias });

    return response;
  }

  async getCommand(data: IGetCommandQuery) {
    const response = await this.ormRepository.findOne(data);

    return response;
  }

  async getAllCommands(data: IGetAllCommandsRepoDTO) {
    const { offsetStart, offsetStep } = data;

    const response = await this.ormRepository
      .find()
      .skip(offsetStart)
      .limit(offsetStep);

    return response;
  }

  async updateCommand(data: IUpdateCommandRepoDTO) {
    const { commandQuery, command } = data;

    const response = await this.ormRepository.updateOne(commandQuery, command);

    return response;
  }

  async deleteCommand(data: IGetCommandQuery) {
    const response = await this.ormRepository.deleteOne(data);

    return response;
  }
}

export default CommandsRepository;
