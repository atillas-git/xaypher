import React from "react";
import { PiBirdFill } from "react-icons/pi";
interface IProps {
  children: React.ReactNode;
}
const SignUpLayout = ({ children }: IProps) => {
  return (
    <div className="grid grid-cols-6 min-h-screen">
      <div className="col-span-2 bg-zinc-900 flex flex-col h-full w-full items-center justify-center gap-3 text-zinc-50">
        <PiBirdFill className="h-[15rem] w-[15rem]" />
        <p className="text-md">
          <b>
            <i>Make Gamers Great Again.</i>
          </b>
        </p>
      </div>
      <div className="col-span-4 flex flex-col items-center justify-center bg-zinc-100">
        {children}
      </div>
    </div>
  );
};

export default SignUpLayout;
