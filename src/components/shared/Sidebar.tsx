import React from "react";
import { PiBirdFill } from "react-icons/pi";
import { AiOutlineMore } from "react-icons/ai";
import { CiCircleMore } from "react-icons/ci";
import sidebarConfig from "@/app/config/sidebar";
export const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center bg-zinc-900 text-zinc-50 text-sm p-4">
      <header className="w-full flex flex-col justify-center items-center gap-2 p-2">
        <PiBirdFill className="text-3xl" />
        <div className="border-b border-zinc-500 p-1 w-full"></div>
      </header>
      {sidebarConfig.map((sidebarItem) => {
        return (
          <section
            key={sidebarItem.key}
            className="p-2 w-full px-4 flex items-center justify-start gap-5 cursor-pointer hover:bg-zinc-600 transition rounded-md"
          >
            {sidebarItem.icon}
            <p>{sidebarItem.label}</p>
          </section>
        );
      })}
      <section className="p-2 px-4 w-full flex items-center justify-start gap-5 cursor-pointer hover:bg-zinc-600 transition rounded-md">
        <CiCircleMore className="text-2xl" />
        <p>More</p>
      </section>
      <footer className="mt-auto p-2 px-4 w-full flex items-center gap-2">
        <div className="p-2.5 bg-zinc-500 rounded-full">
          <p>SP</p>
        </div>
        <div className="w-full flex flex-col">
          <p>Sina Postacı</p>
          <small className="text-zinc-400">@sinokko</small>
        </div>
        <div className="cursor-pointer hover:bg-zinc-600 rounded-full transition p-1">
          <AiOutlineMore />
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
