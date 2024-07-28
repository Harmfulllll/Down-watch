import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    min: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
    min: 6,
  },
  websites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Website",
    },
  ],
});

export default mongoose.moodel("User", userSchema);
