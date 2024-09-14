import React from "react";
import { Button } from "./ui/button";
import {
  Bell,
  ChevronLeftCircle,
  ChevronRightCircle,
  DollarSign,
  Download,
  User,
} from "lucide-react";
import Link from "next/link";
import BackandForwardSection from "./BackandForwardSection";
import { tabsLinks } from "@/constants";
import { Badge } from "./ui/badge";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <BackandForwardSection />
        <div className="flex gap-4 justify-center items-center">
          <Link
            href={"/premium"}
            className="bg-white  font-semibold text-black rounded-full p-2 md:px-4 px-2 text-sm"
          >
            <span className="md:block hidden">Explore Premium</span>
            <DollarSign className="md:hidden h-4 w-4" />
          </Link>
          <Link
            href={"/"}
            className="text-sm flex gap-2 items-center border-white border rounded-full p-2 md:px-4 "
          >
            <span className="md:block hidden">Install App</span>
            <Download className="h-4 w-4 " />
          </Link>
          <Link href={"/notification"} className="p-2 bg-background rounded-full ">
            <Bell />
          </Link>
          <Link href={"/account"} className="p-2 bg-primary rounded-full ">
            <User className="text-black" />
          </Link>
        </div>
      </div>
      <div className="flex gap-2 my-2">
        {tabsLinks.map((item, idx) => (
          <Link href={item.link} key={idx}>
            <Badge variant={"custome"}>{item.title}</Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
