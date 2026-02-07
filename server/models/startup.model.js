import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: String,

    founder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],

    stage: {
      type: String,
      enum: ["idea", "mvp", "growth", "scale"],
      default: "idea",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Startup", startupSchema);
