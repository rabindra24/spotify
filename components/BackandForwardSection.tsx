"use client";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const BackandForwardSection = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  const goForward = () => {
    window.history.forward();
  };

  return (
    <div className="flex gap-5 ">
      <ChevronLeftCircle className="h-8 w-8" onClick={() => goBack()} />

      <ChevronRightCircle className="h-8 w-8" onClick={() => goForward()} />
    </div>
  );
};

export default BackandForwardSection;
