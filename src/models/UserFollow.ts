import mongoose from "@/lib/mongodb";

const userFollowSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    followingId: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.models.UserFollow ||
  mongoose.model("UserFollow", userFollowSchema);
