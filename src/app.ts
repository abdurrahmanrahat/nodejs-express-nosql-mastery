import express, { Request, Response } from "express";
import { MovieRoutes } from "./modules/movies/movie.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/v1/movies", MovieRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
