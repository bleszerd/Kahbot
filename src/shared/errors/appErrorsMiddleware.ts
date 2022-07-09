import AppError from ".";

import { NextFunction, Request, Response } from "express";

export const appErrorsMiddleware = (
  error: Error,
  _: Request,
  res: Response,
  __: NextFunction
) => {
  const errorDate = new Date().toUTCString();

  if (error instanceof AppError) {
    console.log(`[EXPECTED ERROR] => ${error.message}`);

    return res.status(Number(error.errorCode)).json({
      errorType: error.toString(),
      errorCode: error.errorCode,
      message: error.message,
      errorDate,
    });
  }

  console.error(error);

  return res.status(500).json({
    errorType: "InternalServerError",
    errorCode: 0,
    message: "Internal server error",
    errorDate,
  });
};
