import { NextFunction, Request, RequestHandler, Response } from "express";

const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Something went wrong!",
        error: err,
      });
    });
  };
};

export default catchAsync;
