import express, { Request, Response } from "express";
import { globalErrHandler } from "./middleware/globalErrHandler";
import { notFound } from "./middleware/notFound";
import { MovieRoutes } from "./modules/movies/movie.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/v1/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handler
app.use(globalErrHandler);

// not found handler
app.use(notFound);

export default app;
