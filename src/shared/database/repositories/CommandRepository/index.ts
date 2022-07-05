import { Model } from "mongoose";
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

  async getCommand(data: IGetCommandRepoDTO) {
    const { alias } = data;

    const response = await this.ormRepository.findOne({ alias });

    return response;
  }
}

export default CommandsRepository;
