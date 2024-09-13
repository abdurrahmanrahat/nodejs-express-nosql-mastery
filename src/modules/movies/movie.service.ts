import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const creteMovieIntoDB = async (payload: TMovie) => {
  const result = await Movie.create(payload);
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieByIdFromDB = async (movieId: string) => {
  const result = await Movie.findOne({ _id: movieId });
  return result;
};

export const MovieServices = {
  creteMovieIntoDB,
  getAllMoviesFromDB,
  getMovieByIdFromDB,
};
