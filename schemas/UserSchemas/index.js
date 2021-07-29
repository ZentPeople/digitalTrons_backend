import mongoose from "mongoose";

const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: 2,
      min: 2,
    },
    lastName: {
      type: String,
      min: 2,
    },
    phoneNumber: {
      type: String,
      unique: true,
      min: 9,
      sparse: true,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);

export default mongoose.model("user", UserSchema);
