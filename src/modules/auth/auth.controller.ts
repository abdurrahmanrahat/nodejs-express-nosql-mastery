import config from "../../config";
import { refreshAuthKey } from "../../utils/authKey";
import catchAsync from "../../utils/catchAsync";
import { AuthServices } from "./auth.service";

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.register(req.body);

  res.status(200).json({
    status: "success",
    message: "User registered successfully",
    data: result,
  });
});

const login = catchAsync(async (req, res) => {
  const { accessToken, refreshToken } = await AuthServices.login(req.body);

  res.cookie(refreshAuthKey, refreshToken, {
    httpOnly: true,
    secure: config.node_env === "production",
  });

  res.status(200).json({
    success: true,
    message: "User login successfully",
    data: { accessToken },
  });
});

export const AuthControllers = {
  register,
  login,
};
