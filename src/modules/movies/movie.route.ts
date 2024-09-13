import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

router.post("/create-movie", MovieControllers.creteMovie);

export const MovieRoutes = router;
