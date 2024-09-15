import { z } from "zod";

const createMovieValidationSchema = z.object({
  body: z.object({
    title: z.string(),
    description: z.string(),
    releaseDate: z
      .string()
      .date("Please provide a valid date with the format: YYYY-MM-DD"),
    genre: z.string(),
    isDeleted: z.boolean().optional(),
  }),
});

export const MovieValidation = {
  createMovieValidationSchema,
};
