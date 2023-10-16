import { PiBirdFill } from "react-icons/pi";
import { AiOutlineGoogle, AiOutlineTwitter } from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-zinc-900 text-zinc-50">
      <div className="grid grid-cols-2 w-2/4">
        <div className="col-span-1 flex items-center justify-center">
          <PiBirdFill className="text-[20rem]" />
        </div>
        <div className="col-span-1 flex items-center justify-center flex-col gap-6 p-3">
          <header className="flex flex-col gap-3 p-2 w-full">
            <p className="text-7xl uppercase text-left">
              <b>Xaypher</b>
            </p>
            <small className="text-xs font-semibold">
              Make Gamers Great Again.
            </small>
          </header>
          <section className="flex flex-col gap-5 items-center">
            <div className="text-sm text-zinc-200 p-1 uppercase font-semibold">
              Sign up with
            </div>
            <div className="flex gap-5">
              <button className="p-1 bg-zinc-600 rounded-full">
                <AiOutlineGoogle className="h-6 w-6" />
              </button>
              <button className="p-1 bg-zinc-600 rounded-full">
                <AiOutlineTwitter className="h-6 w-6" />
              </button>
            </div>
            <div className="border-b border-zinc-500 w-full flex items-center justify-center">
              <div className="-mb-5 bg-zinc-900 w-fit p-2 uppercase font-semibold">
                Or
              </div>
            </div>
            <Link href={"/auth/signup"}>
              <div
                className="p-2 bg-zinc-700 uppercase font-semibold 
                rounded-md cursor-pointer px-4 transition mt-3
                hover:bg-zinc-300 hover:text-zinc-900"
              >
                Sign Up
              </div>
            </Link>
            <div className="text-[0.6rem] w-fit mt-2">
              By signing up, you agree to the Terms of Service and Privacy
              Policy,
              <br />
              including Cookie Use.
            </div>
          </section>
          <section className="w-full flex flex-col mt-6 gap-1">
            <header className="uppercase font-semibold text-md">
              Already Have an Account?
            </header>
            <Link href={"/auth/signin"}>
              <div
                className="p-2 bg-zinc-700 uppercase font-semibold 
                rounded-md cursor-pointer px-4 transition mt-3 w-fit
                hover:bg-zinc-300 hover:text-zinc-900"
              >
                Sign In
              </div>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
