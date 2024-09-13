import { Movie } from "../movies/movie.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const creteReviewIntoDB = async (slug: string, payload: Partial<TReview>) => {
  const movie = await Movie.findOne({ slug });

  if (!movie) {
    throw new Error("Movie not found.");
  }

  const session = await Review.startSession();

  try {
    session.startTransaction();

    const review = await Review.create(
      [
        {
          movie: movie._id,
          ...payload,
        },
      ],
      { session }
    );

    const reviewsCount = await Review.countDocuments({
      movie: movie._id,
    }).session(session);

    await Movie.updateOne(
      { slug },
      { totalRatings: reviewsCount },
      { session }
    );

    await session.commitTransaction();

    return review[0];
  } catch (error) {
    await session.abortTransaction();
    console.log(error);
  }

  session.endSession();
};

const getAllReviewsFromDB = async () => {
  const result = await Review.find();
  return result;
};

const getReviewByIdFromDB = async (reviewId: string) => {
  const result = await Review.findOne({ _id: reviewId });
  return result;
};

const updateReviewByIdFromDB = async (reviewId: string) => {
  const result = await Review.updateOne({ _id: reviewId });

  return result;
};

const deleteReviewByIdFromDB = async (slug: string, reviewId: string) => {
  const movie = await Movie.findOne({ slug });

  if (!movie) {
    throw new Error("Movie not found.");
  }

  const result = await Review.deleteOne({ _id: reviewId });

  const reviewsCount = await Review.countDocuments({
    movie: movie._id,
  });

  await Movie.updateOne({ slug }, { totalRatings: reviewsCount });

  return result;
};

export const ReviewServices = {
  creteReviewIntoDB,
  getAllReviewsFromDB,
  getReviewByIdFromDB,
  updateReviewByIdFromDB,
  deleteReviewByIdFromDB,
};
