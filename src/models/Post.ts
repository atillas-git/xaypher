import mongoose from "@/lib/mongodb";

const postSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  gif: {
    type: String,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
