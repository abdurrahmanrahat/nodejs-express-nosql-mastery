import { z } from "zod";
import { USER_Role, USER_Status } from "./user.constants";

const createAdminValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Email is not valid"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    role: z.nativeEnum(USER_Role).default(USER_Role.admin),
    status: z.nativeEnum(USER_Status).default(USER_Status.active),
  }),
});

const updateUserValidation = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.nativeEnum(USER_Role).optional(),
    status: z.nativeEnum(USER_Status).optional(),
  }),
});

export const UserValidations = {
  createAdminValidationSchema,
  updateUserValidation,
};
