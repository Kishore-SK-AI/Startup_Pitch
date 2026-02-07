import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema(
  {
    startup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
    },

    givenBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    message: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
    },

    type: {
      type: String,
      enum: ["internal", "external"],
      default: "internal",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Feedback", feedbackSchema);
