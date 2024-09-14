"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { LoginSchema, RegisterSchema } from "@/schemas";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { login } from "@/actions/login";
import Link from "next/link";
import SocialLogin from "../SocialLogin";

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    await login(values)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="max-w-[700px] w-full px-5 flex">
      <div className="w-[300px] h-full bg-red-500 relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1565035010268-a3816f98589a?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          width={400}
          height={400}
          className="w-full h-full object-cover"
          alt="Music Consert"
        />
      </div>
      <div className="inset-0 bg-white bg-opacity-15 backdrop-blur-sm  flex-1 px-5 py-2 flex items-center flex-col justify-center ">
        <h1 className="text-2xl font-bold ">Login In</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-full"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Email"
                      className="bg-transparent text-white placeholder:text-white border border-white "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      className="bg-transparent text-white placeholder:text-white border border-white "
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-white text-black hover:text-black  "
              type="submit"
            >
              Login
            </Button>
          </form>
        </Form>
        <Link href={"/auth/signup"} className="w-full mt-3">
          <Button className="w-full text-white border-white border-2 bg-transparent hover:text-black hover:bg-white  ">
            Signup
          </Button>
        </Link>
        <SocialLogin />
      </div>
    </div>
  );
};

export default LoginForm;
