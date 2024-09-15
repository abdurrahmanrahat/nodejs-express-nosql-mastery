/* eslint-disable @typescript-eslint/no-explicit-any */
import { TErrorSources } from "../interface/error";

export const handleDuplicateError = (err: any) => {
  const statusCode = 400;

  const match = err.errmsg.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists.`,
    },
  ];

  return {
    statusCode,
    message: "Duplicate field",
    errorSources,
  };
};
