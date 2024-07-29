import mongoose from "mongoose";

const websiteSchema = new mongoose.Schema({
  url: {
    type: String,
    required: [true, "URL is required"],
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    default: "up",
    enum: ["up", "down"],
  },
});

export default mongoose.model("Website", websiteSchema);
