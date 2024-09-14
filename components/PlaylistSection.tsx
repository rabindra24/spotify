import { LibraryLinks, tabsLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { Library } from "lucide-react";

const PlaylistSection = () => {
  return (
    <div className="h-full sm:block hidden overflow-hidden bg-container sm:p-4  p-2  rounded-sm">
      <div className="font-bold md:text-lg text-uppercase text-white flex gap-2">
        <Library /> <p className="md:block hidden">Your Library</p>
      </div>
      <div className="md:flex gap-2 my-2 hidden">
        {tabsLinks.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <Badge variant={"custome"}>{item.title}</Badge>
          </Link>
        ))}
      </div>
      <div className="w-full flex flex-col gap-2 pb-40  h-full overflow-y-scroll">
        {LibraryLinks.map((item, idx) => (
          <Link
            href={item.link}
            key={idx}
            className="flex  gap-3 p-2 rounded-sm "
          >
            <div className="h-10 w-10 rounded-lg">
              <Image
                src={item.imageURL}
                alt={item.title}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="hidden md:block">
              <p className="text-sm  font-bold">{item.title}</p>
              <p className="text-sm">{item.Creator}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PlaylistSection;
