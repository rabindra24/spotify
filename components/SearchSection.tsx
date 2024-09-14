import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Home } from "lucide-react";
import { navMenuLinks } from "@/constants";

const SearchSection = () => {

  return (
    <div className="w-full sm:flex hidden flex-col gap-2 bg-container p-4  rounded-sm">
      <h5 className="font-bold md:text-2xl text-lg max-sm:text-center text-uppercase "> Logo</h5>
      {navMenuLinks.map((item, idx) => (
        <Link href={item.link} key={idx} className="flex  gap-5 p-3">
          {item.icon}
          <p className="hidden md:block">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default SearchSection;
