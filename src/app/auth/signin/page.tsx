"use client";
import React, { useState } from "react";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiError, BiLoaderAlt } from "react-icons/bi";
import Link from "next/link";
import { signIn } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    try {
      if (!email || !password) {
        return setError("Please check your credentials !");
      }
      const res = await signIn("credentials", {
        email: email,
        password: password,
        callbackUrl: "/feed",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
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
        Sign In To <b className="text-4xl">Xaypher</b>
      </section>
      {/* Header End */}
      {/* Input Container Start */}
      <div className="flex flex-col items-center justify-center w-full gap-2">
        <section className="flex flex-col w-full">
          <input
            type="email"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full">
          <input
            type="password"
            className="outline-none p-2 border-zinc-500 border-2 rounded-md bg-zinc-100 text-zinc-950"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <section className="flex flex-col w-full items-center gap-5 mt-2 text-zinc-100">
          <button
            disabled={loading}
            className={`bg-zinc-600 p-2 rounded-md w-full 
                hover:bg-zinc-800 transition flex items-center justify-center`}
            onClick={handleSignIn}
          >
            {loading ? (
              <BiLoaderAlt className={`${loading && "animate-spin"} h-5 w-5`} />
            ) : (
              "Sign In"
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
      <section className="flex items-center w-full justify-between">
        <Link href={"/auth/signup"}>
          <p className="text-zinc-800 underline cursor-pointer">
            Create an account
          </p>
        </Link>
        <p className="text-zinc-800 underline cursor-pointer">
          Forgot Password ?
        </p>
      </section>
    </div>
  );
};

export default SignIn;
