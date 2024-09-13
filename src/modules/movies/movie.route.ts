import express from "express";
import { ReviewControllers } from "../reviews/review.controller";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/create-movie", MovieControllers.creteMovie);

router.get("/", MovieControllers.getAllMovies);

router.get("/:slug", MovieControllers.getMovieBySlug);

// reviews route
router.post("/:slug/reviews/create-review", ReviewControllers.createReview);
router.get("/:slug/reviews", ReviewControllers.getAllReviews);
router.get("/:slug/reviews/:reviewId", ReviewControllers.getReviewById);
router.put("/:slug/reviews/:reviewId", ReviewControllers.updateReviewById);
router.delete("/:slug/reviews/:reviewId", ReviewControllers.deleteReviewById);

export const MovieRoutes = router;
