import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import Image from "next/image";
import React from "react";

const page = () => {
  const imageUrl =
    "https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&w=1367&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="flex justify-center items-center w-full h-screen bg-secondary">
      <Image
        src={imageUrl}
        width={400}
        height={400}
        className="w-full h-full object-cover absolute opacity-20"
        alt="Music Consert"
      />
      <RegisterForm imageUrl={imageUrl} />
    </div>
  );
};

export default page;
