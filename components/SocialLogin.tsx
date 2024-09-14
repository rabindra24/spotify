import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const SocialLogin = () => {
  return (
    <div className="mt-5">
      <Image
        src={"/google.png"}
        alt="Google"
        width={50}
        height={50}
        className="rounded-full h-10 w-10"
        onClick={() => {
          signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
        }}
      />
    </div>
  );
};

export default SocialLogin;
