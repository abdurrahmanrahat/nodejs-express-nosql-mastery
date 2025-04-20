import { TUser } from "./user.interface";
import { User } from "./user.model";

const createAdminIntoDB = async (user: TUser) => {
  const admin = await User.create(user);
  return admin;
};

const updateUserIntoDB = async (userId: string, payload: TUser) => {
  const result = await User.findByIdAndUpdate(userId, payload, { new: true });
  return result;
};

export const UserServices = {
  createAdminIntoDB,
  updateUserIntoDB,
};
