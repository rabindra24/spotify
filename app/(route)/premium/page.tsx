import PrimiumPlaneCard from "@/components/PrimiumPlaneCard";
import { PremiumPlans } from "@/constants";
import React from "react";

const page = () => {
  return (
    <section className=" body-font overflow-hidden">
      <div className="container px-5 pt-10 pb-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 ">
            Pricing
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base ">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
          </p>
          <div className="flex mx-auto border-2  rounded overflow-hidden mt-6">
            <button className="py-1 px-4  text-white focus:outline-none">
              Monthly
            </button>
            <button className="py-1 px-4 focus:outline-none">Annually</button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {PremiumPlans.map((item, idx) => (
            <PrimiumPlaneCard key={idx} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
