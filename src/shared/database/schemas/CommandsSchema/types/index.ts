export interface IReplaces {
  symbol: string;
  with: string;
}

export interface ICommand {
  alias: string;
  response: string;
  replaces: IReplaces[];
  createdAt: string;
  updatedAt: string;
}
