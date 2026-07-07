import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profile: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

const User = model("User", userSchema);

export default User;