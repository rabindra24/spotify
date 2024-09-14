"use client";
import { Play } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { useMusicStore } from "@/counterStore";

const PlayButton = () => {
  const {
    title,
    imageUrl,
    song,
    setTitle,
    setImageUrl,
    setSong,
    updateMusicInfo,
  } = useMusicStore();

  const changeSong = (
    newTitle: string,
    newImageUrl: string,
    newSong: string
  ) => {
    updateMusicInfo(newTitle, newImageUrl, newSong);
  };

  return (
    <div className="">
      <Button
        onClick={() =>
          changeSong(
            "Title",
            "https://images.unsplash.com/photo-1584679109597-c656b19974c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtfGVufDB8fDB8fHww",
            "https://file-examples.com/storage/fe15076da466528199d9c5a/2017/11/file_example_OOG_1MG.ogg"
          )
        }
        className="hover:scale-105 p-2 font-bold text-black text-xl rounded-full w-14 h-14 cursor-pointer"
      >
        <Play fill="#000" className="h-5 w-5 border-black " />
      </Button>
    </div>
  );
};

export default PlayButton;
