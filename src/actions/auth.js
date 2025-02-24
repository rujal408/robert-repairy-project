"use server";
import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { cookies } from "next/headers";

/**
 * Logs in a user using NextAuth's credentials provider.
 *
 * @async
 * @function loginUser
 * @param {Object} data - The user credentials (e.g., email and password).
 * @returns {Promise<void|string>} Returns `"Error"` if authentication fails, otherwise resolves without returning anything.
 * @throws {Error} If an unexpected error occurs.
 *
 * @example
 * const response = await loginUser({ email: "user@example.com", password: "password123" });
 */
export const loginUser = async (data) => {
  try {
    await signIn("credentials", { ...data, redirect: false });
  } catch (e) {
    if (e instanceof AuthError) {
      return "Error";
    }
    throw e;
  }
};

/**
 * Logs out the currently authenticated user.
 *
 * @async
 * @function logoutUser
 * @returns {Promise<void|string>} Returns an error message if logout fails, otherwise resolves without returning anything.
 * @throws {Error} If a redirect error occurs.
 *
 * @example
 * await logoutUser();
 */
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
