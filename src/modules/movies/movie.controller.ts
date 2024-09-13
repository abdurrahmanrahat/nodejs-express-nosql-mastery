import { Request, Response } from "express";
import { MovieServices } from "./movie.service";

const creteMovie = async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.creteMovieIntoDB(movieData);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
};

export const MovieControllers = {
  creteMovie,
};
