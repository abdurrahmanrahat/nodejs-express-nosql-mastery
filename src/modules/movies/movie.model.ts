import { format } from "date-fns";
import { model, Schema } from "mongoose";
import slugify from "slugify";
import { TMovie, TMovieMethods, TMovieModel } from "./movie.interface";

const movieSchema = new Schema<TMovie, TMovieModel, TMovieMethods>({
  title: {
    type: String,
    required: [true, "Title is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  releaseDate: {
    type: Date,
    required: [true, "ReleaseDate is required"],
  },
  genre: {
    type: String,
    required: [true, "Genre is required"],
  },
  slug: {
    type: String,
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
  totalRatings: {
    type: Number,
    default: 0,
  },
});

// make slug before creating data
// movieSchema.pre("save", async function (next) {
//   const date = format(this.releaseDate, "dd-MM-yyyy");
//   this.slug = slugify(`${this.title}-${date}`, { lower: true });

//   next();
// });

movieSchema.method("createSlug", function (payload: TMovie) {
  const date = format(payload.releaseDate, "dd-MM-yyyy");
  const slug = slugify(`${payload.title}-${date}`, { lower: true });

  return slug;
});

export const Movie = model<TMovie, TMovieModel>("Movie", movieSchema);
