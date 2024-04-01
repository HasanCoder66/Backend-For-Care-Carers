// import { Timestamp } from "mongodb";
import mongoose from "mongoose";
import { Schema } from "mongoose";


const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
        type: Boolean,
        default: true
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
