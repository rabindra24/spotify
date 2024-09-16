import { PremiumPlansTypes } from "@/types";
import React from "react";
import { Button } from "./ui/button";

const PrimiumPlaneCard = ({ data }: { data: PremiumPlansTypes }) => {
  return (
    <div className="p-4 xl:w-1/2 md:w-1/2 w-full max-w-[400px]">
      <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
          Premium
        </h2>
        <h1
          style={{ color: data.color }}
          className="text-5xl font-bold  pb-4 mb-4 border-b border-gray-200 leading-none"
        >
          {data.planType}
        </h1>
        {Object.entries(data.features).map(([key, value]) => (
          <p className="flex items-center  mb-2" key={key}>
            <span className="w-4 h-4 mr-2 inline-flex items-center justify-center rounded-full flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                className="w-3 h-3"
                viewBox="0 0 24 24"
              >
                <path d="M20 6L9 17l-5-5"></path>
              </svg>
            </span>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {value.toString()}
          </p>
        ))}
        <Button
          style={{ background: data.color }}
          className="flex items-center mt-auto  border-0 py-2 px-4 w-full  focus:outline-none font-bold text-black rounded-full"
        >
          Subscribe
          {/* <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-auto"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg> */}
        </Button>
        <p className="text-xs  mt-3">
          Literally you probably haven&apos;t heard of them jean shorts.
        </p>
      </div>
    </div>
  );
};

export default PrimiumPlaneCard;
