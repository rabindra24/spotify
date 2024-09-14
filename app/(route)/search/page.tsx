import { Input } from "@/components/ui/input";
import React from "react";
import { SearchCategories } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Search = () => {
  return (
    <div className="h-full w-full  pb-24">
      <Input
        className="border border-gray-800 focus:border-none focus:outline-none bg-container rounded-full"
        placeholder="Search"
      />
      <div className="grid md:grid-cols-2 gap-5 py-10 w-full h-full overflow-y-scroll">
        {SearchCategories.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <div
              style={{ backgroundColor: item.color }}
              className={`relative left-0  p-5 round rounded-lg h-[200px] overflow-hidden w-full`}
            >
              <h3 className="font-bold text-capitalize text-xl">
                {item.title}
              </h3>
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={200}
                height={200}
                className="lg:h-40 h-32 w-32 lg:w-40 absolute right-0 bottom-0 rotate-12"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
