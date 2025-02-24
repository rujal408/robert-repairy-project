"use client";

import { loginUser } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { EyeClosed, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = (data) => {
    loginUser(data)
      .then((res) => {
        router.push("/analytics");
      })
      .catch((e) => {
        console.log("ErrorResponded", e);
      });
  };

  return (
    <div className="space-y-2">
      <div className="flex flex-col gap-1 items-center mb-3">
        <div className="text-2xl font-bold">Sign In</div>
        <div className="text-sm font-semibold text-gray-400">
          Enter your email and password to get started
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            rules={{ required: "Please provide email" }}
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <div className="relative">
                    <Input label="Email" {...field} />
                    <Mail className="absolute text-blue-300 w-2 right-3 top-1/2 -translate-y-1/2  cursor-pointer" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            type="password"
            rules={{ required: "Please enter password" }}
            render={({ field }) => (
              <FormItem className="relative">
                <FormControl>
                  <div className="relative">
                    <Input label="Password" type="password" {...field} />
                    <EyeClosed className="absolute text-blue-300 w-2 right-3 top-1/2 -translate-y-1/2  cursor-pointer" />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            <span className="text-sm underline text-grey underline-offset-4 cursor-pointer">
              forgot password?
            </span>
            <Button type="submit">Sign In</Button>
            <div className="flex flex-col items-center text-gray-500">
              <div className="text-sm">
                By clicking continue, you agree to our
              </div>
              <div>
                <span className="underline text-sm cursor-pointer">
                  Terms of Service
                </span>
                &nbsp;and&nbsp;
                <span className="underline text-sm cursor-pointer">
                  Privacy Policy
                </span>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
