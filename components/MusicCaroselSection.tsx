import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface musicDataLinks {
  imageUrl: string;
  title: string;
  content?: string;
  link: string;
  category?: string;
}

const MusicCaroselSection = ({
  title,
  data,
  link,
}: {
  title: string;
  data: musicDataLinks[];
  link: string;
}) => {
  return (
    <div>
      <div className="flex justify-between px-2 items-center">
        <h3 className="my-3 md:text-2xl text-lg text-capitalize font-bold">
          {title}
        </h3>
        <Link href={link} className="flex items-center h-full">
          <p className="text-capitalize">See all</p>
        </Link>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2">
        {data.map((item: musicDataLinks, idx: any) => (
          <Link key={idx} href={item.link}>
            <Card className="bg-transparent p-0 px-0 hover:bg-gray-100/10 border-none">
              <CardHeader className="md:pb-5 pb-3">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={200}
                  height={200}
                  className=" w-full md:h-[200px] h-[150px] object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="md:text-lg text-md">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-1">
                  {item.content} {item.category}
                </CardDescription>
              </CardContent>
              {/* <CardFooter>
              <p>Card Footer</p>
            </CardFooter> */}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MusicCaroselSection;
