import { IReplaces } from "../../../shared/database/schemas/CommandsSchema/types";

export interface Command {
  alias: string;
  response: string;
  replaceWith: IReplaces[];
}

export type ICreateCommandDTO = Command;

export interface IGetCommandResponseDTO {
  alias: string;
}

export interface IGetCommandDTO {
  id?: string;
  alias?: string;
}

export interface IGetCommandQuery {
  _id?: string;
  alias?: string;
}

export interface IGetAllCommandsDTO {
  page?: number;
}

export interface IGetAllCommandsRepoDTO {
  offsetStart: number;
  offsetStep: number;
}

export interface IUpdateCommandDTO {
  alias?: string;
  id?: string;
  newCommand: Command;
}

export interface IUpdateCommandRepoDTO {
  commandQuery: IGetCommandQuery;
  command: Command;
}

export interface IUpdateCommandQuery {
  _id?: string;
  alias?: string;
}

export interface IDeleteCommandDTO {
  id?: string;
  alias?: string;
}

export interface IDeleteCommandQuery {
  _id?: string;
  alias?: string;
}
