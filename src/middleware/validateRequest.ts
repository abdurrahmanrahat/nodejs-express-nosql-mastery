import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";
import catchAsync from "../utils/catchAsync";

export const validateRequest = (schema: AnyZodObject) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const parsedBody = await schema.parseAsync({ body: req.body });

    req.body = parsedBody.body; // This will replace the original body with the parsed one, and if there have extra fields, they will be removed.

    next();
  });
};
