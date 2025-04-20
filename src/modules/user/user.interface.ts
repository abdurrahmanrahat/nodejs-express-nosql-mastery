import { USER_Role, USER_Status } from "./user.constants";

export type TUser = {
  name: string;
  email: string;
  password: string;
  role: keyof typeof USER_Role;
  status: keyof typeof USER_Status;
  passwordChangedAt: Date;
};
