import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const creteMovieIntoDB = async (payload: TMovie) => {
  // make slug before creating data
  // const date = format(payload.releaseDate, "dd-MM-yyyy");
  // const slug = slugify(`${payload.title}-${date}`, { lower: true });

  const result = await Movie.create(payload);
  return result;
};

const getAllMoviesFromDB = async () => {
  const result = await Movie.find();
  return result;
};

const getMovieBySlugFromDB = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const MovieServices = {
  creteMovieIntoDB,
  getAllMoviesFromDB,
  getMovieBySlugFromDB,
};
