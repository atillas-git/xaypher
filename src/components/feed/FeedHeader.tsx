"use client";
import React from "react";
import { MdRssFeed } from "react-icons/md";
export const FeedHeader = () => {
  return (
    <header className="w-full p-3 flex items-center justify-between border border-zinc-200 rounded-sm">
      <p className="font-semibold">Feed</p>
      <div className="p-2 bg-zinc-300 rounded-full flex items-center justify-center">
        <MdRssFeed className="text-lg text-zinc-900" />
      </div>
    </header>
  );
};

export default FeedHeader;
