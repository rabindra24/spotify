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
import Link from "next/link";
import { register } from "@/actions/register";

const RegisterForm = ({ imageUrl }: { imageUrl: string }) => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    register(values).then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="max-w-[700px] min-h-[400px] w-full px-5 flex">
      <div className="w-[300px]  bg-red-500 relative">
        <Image
          src={imageUrl}
          width={400}
          height={400}
          className="w-full h-full object-cover"
          alt="Music Consert"
        />
      </div>
      <div className="inset-0 bg-white bg-opacity-15 backdrop-blur-sm  flex-1 px-5  flex items-center flex-col justify-center py-10">
        <h1 className="text-3xl mb-5 font-bold  w-full text-white">
          Register User
        </h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-2 w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your Name"
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
              Create Account
            </Button>
          </form>
        </Form>
        <Link href={"/auth/login"} className="w-full mt-3">
          <Button className="w-full text-white border-white border-2 bg-transparent hover:text-black hover:bg-white  ">
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
