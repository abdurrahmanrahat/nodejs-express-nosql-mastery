import mongoose from "mongoose";
import { TErrorSources } from "../interface/error";

export const handleCastError = (err: mongoose.Error.CastError) => {
  const statusCode = 400;

  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode,
    message: "invalid Id",
    errorSources,
  };
};
