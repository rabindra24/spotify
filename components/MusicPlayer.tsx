"use client";
import Image from "next/image";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import { useMusicStore } from "@/counterStore";
import { Button } from "./ui/button";
import { supabase } from "@/lib/supabase";
const MusicPlayer = () => {
  const { data } = supabase.storage.from("songs").getPublicUrl("son/song.mp3");

  console.log(data.publicUrl);
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

  if (!song) {
    return;
  }
  return (
    <div className="p-5 bottom-0 absolute left-0 w-full bg-container flex gap-5">
      {/* <Button
        onClick={() =>
          changeSong(
            "Title",
            "https://images.unsplash.com/photo-1584679109597-c656b19974c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFsYnVtfGVufDB8fDB8fHww",
            "https://file-examples.com/storage/feb1e052e36650dbb948d02/2017/11/file_example_OOG_1MG.ogg"
          )
        }
      ></Button> */}
      <div className="flex gap-4">
        <Image
          src={imageUrl}
          alt="These is a image"
          width={100}
          height={100}
          className="h-10 w-10 object-cover"
        />
        <div>
          <h3>{title}</h3>
          {/* <p>{author}</p> */}
        </div>
      </div>
      <ReactAudioPlayer
        src={data.publicUrl}
        // src="https://sephsziqgvkgevxyikmf.supabase.co/storage/v1/object/sign/songs/Diljit%20Dosanjh_%20Born%20To%20Shine%20(Official%20Music%20Video)%20G.O.A.T.mp3?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJzb25ncy9EaWxqaXQgRG9zYW5qaF8gQm9ybiBUbyBTaGluZSAoT2ZmaWNpYWwgTXVzaWMgVmlkZW8pIEcuTy5BLlQubXAzIiwiaWF0IjoxNzI2Mjk0NTAyLCJleHAiOjIwNDE2NTQ1MDJ9.S4P3fluli9PImQGST3DYzsnZ70HkyyZNcrlCU5n7L5Y&t=2024-09-14T06%3A15%3A02.157Z"
        controls
        autoPlay
        style={{ background: "transparent" }}
        className="w-full"
      />
    </div>
  );
};

export default MusicPlayer;
