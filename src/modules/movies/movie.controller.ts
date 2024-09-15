import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { MovieServices } from "./movie.service";

// const zodMovieSchema = z.object({
//   body: z.object({
//     title: z.string(),
//     description: z.string(),
//     releaseDate: z
//       .string()
//       .date("Please provide a valid date with the format: YYYY-MM-DD"),
//     genre: z.string(),
//     isDeleted: z.boolean().optional(),
//   }),
// });

const creteMovie = catchAsync(async (req: Request, res: Response) => {
  const movieData = req.body;

  // zodMovieSchema.parse({ body: movieData });

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
