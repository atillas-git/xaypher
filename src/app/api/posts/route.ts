import { ISavePostRequest } from "@/interfaces/SavePostRequest";
import mongoose from "@/lib/mongodb";
import Post from "@/models/Post";

export async function POST(request: Request) {
  try {
    const post2save = (await request.json()) as ISavePostRequest;
    await new Post(post2save).save();
    return new Response("Sucess", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
export async function PUT(request: Request) {
  try {
    const post2update = (await request.json()) as ISavePostRequest;
    if (!post2update.id || !mongoose.Types.ObjectId.isValid(post2update.id)) {
      return new Response("Post id not found or id is invalid !", {
        status: 400,
      });
    }
    const post = await Post.findById(post2update.id);
    if (!post) {
      return new Response("Post not found !", { status: 404 });
    }
    await Post.findByIdAndUpdate(post2update.id, post2update);
    return new Response("Sucess", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
