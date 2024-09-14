import ActionBar from "@/components/ActionBar";
import Playlist from "@/components/playlist/Playlist";
import PlaylistHeader from "@/components/playlist/PlaylistHeader";
import { PlaylistLinks } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div>
      <PlaylistHeader
        imageUrl={PlaylistLinks.imageUrl}
        title={PlaylistLinks.title}
        total={PlaylistLinks.total}
        content={PlaylistLinks.content}
      />
      <ActionBar />
      <Playlist songs={PlaylistLinks.songsList} />
    </div>
  );
};

export default page;
