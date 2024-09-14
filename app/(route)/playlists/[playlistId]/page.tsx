import PlaylistHeader from "@/components/playlist/PlaylistHeader";
import React from "react";
import { PlaylistLinks } from "@/constants";
import Playlist from "@/components/playlist/Playlist";
import ActionBar from "@/components/ActionBar";

const page = () => {
  return (
    <div className="space-y-2 overflow-hidden h-full overflow-y-scroll">
      <PlaylistHeader
        imageUrl={PlaylistLinks.imageUrl}
        title={PlaylistLinks.title}
        total={PlaylistLinks.total}
        content={PlaylistLinks.content}
      />
      <ActionBar/>

      <Playlist songs={PlaylistLinks.songsList}/>
    </div>
  );
};

export default page;
