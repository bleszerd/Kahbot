import { IReplaces } from "../../../shared/database/schemas/CommandsSchema/types";

export interface ICreateCommandDTO {
  alias: string;
  response: string;
  replaceWith: IReplaces[];
}

export interface IGetCommandResponseDTO {
  alias: string;
}
