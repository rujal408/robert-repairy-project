"use server";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { cookies } from "next/headers";

export const loginUser = async (data: any) => {
  try {
    await signIn("credentials", { ...data, redirect: false });
  } catch (e) {
    //
    if (e instanceof AuthError) {
      return "Error";
    }

    throw e;
  }
};

export const logoutUser = async () => {
  try {
    (await cookies()).delete("authjs.csrf-token");
    (await cookies()).delete("authjs.session-token");
    await signOut();
  } catch (e) {
    if (isRedirectError(e)) {
      throw e;
    }

    return e instanceof Error ? e.message : "Error";
  }
};
