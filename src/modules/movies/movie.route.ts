import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/create-movie", MovieControllers.creteMovie);

router.get("/", MovieControllers.getAllMovies);

router.get("/:movieId", MovieControllers.getMovieById);

export const MovieRoutes = router;
