import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MovieServices } from "./movie.service";

const creteMovie = catchAsync(async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.creteMovieIntoDB(movieData);

  res.json({
    success: true,
    message: "Movie is created successfully !",
    data: result,
  });
});

const getAllMovies = catchAsync(async (req: Request, res: Response) => {
  const result = await MovieServices.getAllMoviesFromDB();

  res.status(200).json({
    success: true,
    message: "Movies are fetched successfully !",
    data: result,
  });
});

const getMovieBySlug = catchAsync(async (req: Request, res: Response) => {
  const { slug } = req.params;
  const result = await MovieServices.getMovieBySlugFromDB(slug);

  res.status(200).json({
    success: true,
    message: "Movie fetched successfully !",
    data: result,
  });
});

export const MovieControllers = {
  creteMovie,
  getAllMovies,
  getMovieBySlug,
};
