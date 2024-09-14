import MusicCaroselSection from "@/components/MusicCaroselSection";
import Navbar from "@/components/Navbar";
import PlaylistSection from "@/components/PlaylistSection";
import SearchSection from "@/components/SearchSection";
import {
  FavoriteArtistsLinks,
  RecentlyPlayedLinks,
  TodayBiggestHits,
  topMixesLinks,
} from "@/constants";

export default function Home() {
  return (
    <div className=" h-full overflow-y-scroll pb-20">
      
      <MusicCaroselSection
        title={"Today Big Hits"}
        data={TodayBiggestHits}
        link={"/playlists"}
      />
      <MusicCaroselSection
        title={"Recently"}
        data={RecentlyPlayedLinks}
        link={"/playlists"}
      />
      <MusicCaroselSection
        title={"Top Mixes"}
        data={topMixesLinks}
        link={"/playlists"}
      />
      <MusicCaroselSection
        title={"Favorite Aritists"}
        data={FavoriteArtistsLinks}
        link={"/playlists"}
      />
    </div>
  );
}
