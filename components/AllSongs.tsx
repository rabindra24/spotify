import getSongs from "@/actions/getSupabaseStorage";
import React from "react";

const AllSongs = async () => {
  const Songs: any = await getSongs();

  console.log(Songs);
  //   const { data } = supabase.storage.from("songs").getPublicUrl("son/song.mp3");

  return <div>AllSongs</div>;
};

export default AllSongs;
