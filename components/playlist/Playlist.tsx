import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Link from "next/link";
import MusicCaroselSection from "../MusicCaroselSection";
import { TodayBiggestHits } from "@/constants";
interface songsProps {
  imageUrl: string;
  title: string;
  album: string;
  duration: string;
}

const Playlist = ({ songs }: { songs: songsProps[] }) => {
  return (
    <div className="pb-20">
      <Table className="">
        <TableHeader>
          <TableRow>
            <TableHead>S.no</TableHead>
            <TableHead className="">Title</TableHead>
            <TableHead className="md:inline-flex items-center hidden">Album</TableHead>
            <TableHead className="text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {songs.map((songs, idx) => (
            <TableRow key={songs.title}>
              <TableCell className="font-medium">{idx + 1}</TableCell>
              <TableCell className="line-clamp-1">
                <Link href={"/track/7837483"}>
                  <div className="flex gap-2 items-center ">
                    <Image
                      src={songs.imageUrl}
                      width={100}
                      height={100}
                      alt={songs.title}
                      className="h-14 w-14 object-cover"
                    />
                    {songs.title}
                  </div>
                </Link>
              </TableCell>
              <TableCell className="max-md:hidden">{songs.album}</TableCell>
              <TableCell className="text-right">{songs.duration}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <MusicCaroselSection
        title={"Today Big Hits"}
        data={TodayBiggestHits}
        link={"/playlists"}
      />
    </div>
  );
};

export default Playlist;
