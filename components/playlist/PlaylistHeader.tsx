import { Http2ServerRequest } from "http2";
import Image from "next/image";
import React from "react";


const PlaylistHeader = ({
  imageUrl,
  title,
  // songs,
  content,
  total,
}: {
  imageUrl: string;
  title: string;
  // songs?: songsProps[];
  content?: string;
  total?: string;
}) => {
  return (
    <div className="flex  gap-5 ">
      <div className="md:w-[200px] h-[100px] w-[100px] md:h-[200px] ">
        <Image
          className="w-full h-full object-cover object-center"
          src={imageUrl}
          alt={title}
          width={300}
          height={300}
        />
      </div>
      <div className="relative top-0 left-0 flex-1">
        <div className="absolute bottom-0 left-0 w-full space-y-1">
         <h3 className="font-bold text-3xl ">{title}</h3> 
         <p className="text-sm">{content}</p>
         <p className="text-sm text-primary font-bold">{total}</p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistHeader;
