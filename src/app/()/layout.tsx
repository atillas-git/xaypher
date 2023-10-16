import { Sidebar } from "@/components/shared";
import React from "react";
const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-zinc-950">
      <div className="">
        <div className="min-h-screen grid grid-cols-7">
          <div className="col-span-1">
            <Sidebar />
          </div>
          <div className="col-span-6 bg-zinc-50">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
