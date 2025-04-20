import express from "express";
import { validateRequest } from "../../middleware/validateRequest";
import { UserControllers } from "./user.controller";
import { UserValidations } from "./user.validation";

const router = express.Router();

router.post(
  "/create-admin",
  validateRequest(UserValidations.createAdminValidationSchema),
  UserControllers.createAdmin
);

export const UserRoutes = router;
