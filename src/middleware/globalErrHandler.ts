/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { ErrorRequestHandler } from "express";
import { handleValidationError } from "../errors/handleValidationError";
import { TErrorSources } from "../interface/error";

export const globalErrHandler: ErrorRequestHandler = (err, req, res, next) => {
  let statusCode = 500;
  let message = "Something went wrong.!";
  let errorSources: TErrorSources = [
    {
      path: "",
      message: "Something went wrong.!",
    },
  ];

  if (err.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
  });
};
