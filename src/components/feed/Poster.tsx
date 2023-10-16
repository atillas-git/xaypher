"use client";
import React, { useState } from "react";
import { Button } from "../shared";
import { BiImageAdd } from "react-icons/bi";
import { BsFiletypeGif } from "react-icons/bs";
import { AiOutlineSmile } from "react-icons/ai";
import { twMerge } from "tailwind-merge";
import axios from "axios";
export const Poster = () => {
  const [postContent, setPostContent] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onPostContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    if (event.target.value.length > 150) {
      return;
    } else {
      setErrorMessage("");
      setPostContent(event.target.value);
    }
  };

  const handlePostClick = () => {
    setErrorMessage("");
    if (!postContent || postContent.length === 0) {
      return setErrorMessage("Post content can not be empty !");
    } else {
      savePost();
    }
  };

  const savePost = async () => {
    setLoading(true);
    try {
      await axios.post("/api/posts", {
        userId: "64f2eb7083537984a7009a05",
        content: postContent,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setPostContent("");
    }
  };

  return (
    <div className="w-full p-4 flex items-start gap-2 border border-t-0 rounded-sm border-zinc-200 mb-3">
      <section
        id="avatar"
        className="p-2 px-2.5 rounded-full bg-zinc-500 text-zinc-50"
      >
        <p>SP</p>
      </section>
      <section id="content" className="flex flex-col w-full gap-1">
        <textarea
          className={twMerge(
            "outline-none p-2 bg-zinc-50 border-b border-zinc-200",
            errorMessage && "outline-1 outline-red-500 rounded-md",
          )}
          name="post"
          id="poster"
          placeholder="What's hapenning?"
          cols={20}
          rows={2}
          value={postContent}
          onChange={onPostContentChange}
        ></textarea>
        {errorMessage && (
          <small className="text-red-500 mt-1">{errorMessage}</small>
        )}
        <section className="flex items-center justify-between w-full mt-3">
          <div className="flex items-center gap-4 text-zinc-500">
            <button className="text-2xl">
              <BiImageAdd />
            </button>
            <button className="text-xl">
              <BsFiletypeGif />
            </button>
            <button className="text-xl">
              <AiOutlineSmile />
            </button>
          </div>
          <Button
            className="bg-zinc-500 p-1 px-3 font-light hover:bg-zinc-800"
            onClick={handlePostClick}
            loading={loading}
          >
            Post
          </Button>
        </section>
      </section>
    </div>
  );
};

export default Poster;
