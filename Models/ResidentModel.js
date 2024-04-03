import mongoose from "mongoose";
import { Schema } from "mongoose";

const ResidentSchema = new Schema(
  {
    residentName: {
      type: String,
      required: true,
    },

    photos: {
      type: [String],
    },
    age: {
      type: [String],
    },
    dob: {
      type: [String],
    },
    career: {
      type: [String],
    },

    roomNo: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Resident", ResidentSchema);
