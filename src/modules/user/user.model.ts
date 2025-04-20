import { model, Schema } from "mongoose";
import { USER_Role, USER_Status } from "./user.constants";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  role: {
    type: String,
    enum: Object.keys(USER_Role),
    // enum: ["super_admin", "admin", "user"],
    default: "user",
  },
  status: {
    type: String,
    enum: Object.keys(USER_Status),
    default: "active",
  },
  passwordChangedAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model<TUser>("User", userSchema);
