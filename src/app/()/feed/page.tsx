"use client";
import { FeedHeader } from "@/components/feed";
import Poster from "@/components/feed/Poster";
import React from "react";
import useSWR from "swr";
import axios from "axios";
import { useSession } from "next-auth/react";

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Feed = () => {

  const { data, error, isLoading, mutate } = useSWR(
    "/api/feed/64f2eb7083537984a7009a05",
    fetcher,
    { revalidateOnReconnect: false },
  );
  const session = useSession();

  return (
    <div className="w-full h-full grid grid-cols-5">
      <div className="col-span-3">
        <FeedHeader />
        <Poster />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Feed;
