import MusicPlayer from "@/components/MusicPlayer";
import Navbar from "@/components/Navbar";
import PlaylistSection from "@/components/PlaylistSection";
import SearchSection from "@/components/SearchSection";
import React from "react";

const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className="bg-background p-2">
      <div className="flex w-full gap-3 h-[97vh]">
        <div className="md:min-w-[300px] gap-2 sm:flex  hidden flex-col rounded-sm">
          <SearchSection />
          <PlaylistSection />
        </div>
        <div className="flex-1 bg-container md:p-5 p-2 rounded-sm overflow-hidden">
          <Navbar />
          <div className="space-y-2 overflow-hidden h-full overflow-y-scroll">
            {children}
          </div>
          <MusicPlayer />
        </div>
      </div>
    </main>
  );
};

export default layout;
