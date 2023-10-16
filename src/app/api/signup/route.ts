import { SignupRequest } from "@/interfaces/SignupRequest";
import User from "@/models/User";
import bcrypt from "bcrypt";
export async function GET(request: Request) {}
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as SignupRequest;
    const user = await User.findOne({ email: body.email });
    if (user) {
      return new Response("User with given email already exists!", {
        status: 400,
      });
    }
    const salt = await bcrypt.genSalt(10);
    const cryptedPass = await bcrypt.hash(body.password, salt);
    const user2Save = new User({
      email: body.email,
      name: body.name,
      password: cryptedPass,
    });
    await user2Save.save();
    return new Response("Sign Up Success!", {
      status: 200,
    });
  } catch (error) {
    return new Response("Internal server error!", {
      status: 500,
    });
  }
}
