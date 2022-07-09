import { IAppError } from "./types";

class AppError extends Error {
  errorCode: string;

  constructor(error: IAppError) {
    super(error.message);

    this.errorCode = error.errorCode || "500";
  }

  toString() {
    return this.constructor.name;
  }
}

export default AppError;
