import jwt from "jsonwebtoken";
import config from "../../config";
import AppError from "../../errors/AppError";
import { USER_Role } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import { isPasswordMatched } from "./auth.utils";

const register = async (user: TUser) => {
  const existingUser = await User.findOne({ email: user.email });

  if (existingUser) {
    throw new AppError(401, "User already exists");
  }

  // set user role
  user.role = USER_Role.user;

  // create user
  const newUser = await User.create(user);

  return newUser;
};

const login = async (payload: TLoginUser) => {
  const existingUser = await User.findOne({ email: payload.email }).select(
    "+password"
  );

  if (!existingUser) {
    throw new AppError(401, "User not found!");
  }

  if (existingUser.status === "blocked") {
    throw new AppError(401, "User is blocked!");
  }

  // compare password
  const isMatchedPassword = await isPasswordMatched(
    payload.password,
    existingUser.password
  );

  if (!isMatchedPassword) {
    throw new AppError(401, "Password is incorrect!");
  }

  const jwtPayload = {
    name: existingUser.name,
    email: existingUser.email,
    role: existingUser.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expires_in as string,
  });
  const refreshToken = jwt.sign(
    jwtPayload,
    config.jwt_refresh_secret as string,
    {
      expiresIn: config.jwt_refresh_expires_in as string,
    }
  );

  return { accessToken, refreshToken };
};

export const AuthServices = {
  register,
  login,
};
