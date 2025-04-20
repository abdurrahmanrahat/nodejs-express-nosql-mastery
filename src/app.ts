import express, { Request, Response } from "express";
import { globalErrHandler } from "./middleware/globalErrHandler";
import { notFound } from "./middleware/notFound";
import { AuthRoutes } from "./modules/auth/auth.route";
import { MovieRoutes } from "./modules/movies/movie.route";
import { UserRoutes } from "./modules/user/user.route";

const app = express();

// parser
app.use(express.json());

app.use("/api/v1/movies", MovieRoutes);
app.use("/api/v1/users", UserRoutes);
app.use("/api/v1/auth", AuthRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

// global error handler
app.use(globalErrHandler);

// not found handler
app.use(notFound);

export default app;
