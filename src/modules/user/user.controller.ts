import catchAsync from "../../utils/catchAsync";
import { UserServices } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
  const result = await UserServices.createAdminIntoDB(req.body);

  res.status(200).json({
    status: "success",
    message: "Admin created successfully",
    data: result,
  });
});

const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;

  const result = await UserServices.updateUserIntoDB(userId, req.body);

  res.status(200).json({
    success: true,
    message: "User updated successfully!",
    data: result,
  });
});

export const UserControllers = {
  createAdmin,
  updateUser,
};
