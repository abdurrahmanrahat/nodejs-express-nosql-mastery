import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const creteMovieIntoDB = async (movieData: TMovie) => {
  const result = await Movie.create(movieData);
  return result;
};

export const MovieServices = {
  creteMovieIntoDB,
};
