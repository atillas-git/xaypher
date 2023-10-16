"use client";
import React, { useState } from "react";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiError, BiLoaderAlt } from "react-icons/bi";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      setLoading(true);
      setError("");
      if (
        !name ||
        !email ||
        !password ||
        !rePassword ||
        password !== rePassword
      ) {
        return setError("Please check your credentials !");
      }
      await axios.post("/api/signup", {
        email: email,
        name: name,
        password: password,
      });
      router.push("/auth/signin");
    } catch (error: any) {
      error.response && setError(error.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 h-full gap-2 relative">
      {/* Error Start */}
      {error && (
        <section className="absolute top-12 right-3 bg-red-300 p-2 px-3 w-fit rounded-md text-red-700 flex items-center gap-1 justify-start">
          <BiError className="h-5 w-5" />
          {error}
        </section>
      )}
      {/* Error End */}
      {/* Header Start */}
      <section className="text-sm font-semibold flex text-center items-center justify-center gap-3 w-full text-zinc-500 m-5">
        Welcome To <b className="text-4xl">Xaypher</b>
      </section>
      {/* Header End */}
      {/* Input Container Start */}
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <section className="flex flex-col w-full">
          <input
            type="text"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Name *"
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full">
          <input
            type="email"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Email *"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full">
          <input
            type="password"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Password *"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full">
          <input
            type="password"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Re-Password *"
            onChange={(e) => setRePassword(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full items-center gap-5 mt-2 text-zinc-100">
          <button
            disabled={loading}
            className={`bg-zinc-600 p-2 rounded-md w-full 
                hover:bg-zinc-800 transition flex items-center justify-center`}
            onClick={handleSignUp}
          >
            {loading ? (
              <BiLoaderAlt className={`${loading && "animate-spin"} h-5 w-5`} />
            ) : (
              "Sign Up"
            )}
          </button>
        </section>
      </div>
      {/* Input Container End */}
      <section className=" flex items-center flex-col justify-center border-b-2 border-zinc-500 w-full">
        <p className="text-zinc-500 -mb-5 p-2 bg-zinc-100 ">OR</p>
      </section>
      {/* Social Start */}
      <section className="flex items-center gap-7 justify-center w-full mt-7">
        <AiOutlineGoogle className="bg-zinc-600 text-blue-50 h-8 w-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 transition" />
        <AiOutlineTwitter className="bg-zinc-600 text-blue-50 h-8 w-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 transition" />
        <BsFacebook className="bg-zinc-600 text-blue-50 h-8 w-8 p-1 rounded-full cursor-pointer hover:bg-zinc-800 transition" />
      </section>
      {/* Social End */}
      <section className="flex items-center w-full justify-center mt-3">
        <Link href={"/auth/signin"}>
          <p className="text-zinc-800 underline cursor-pointer w-full text-center">
            Already have an account?
          </p>
        </Link>
      </section>
    </div>
  );
};

export default SignUp;
