import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    startup: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Startup",
      required: true,
    },

    totalTasks: Number,
    completedTasks: Number,
    progressPercent: Number,

    activeMembers: Number,

    date: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Analytics", analyticsSchema);
