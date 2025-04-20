import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (user: TUser) => {
  const admin = await User.create(user);
  return admin;
};

export const UserServices = {
  createAdminIntoDB,
};
