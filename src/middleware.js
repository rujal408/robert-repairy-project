import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

const authenticatedRoutes = ["/settings", "/analytics", "/calendar"];

export async function middleware(request) {
  const authenticated = await auth();
  const pathname = request?.nextUrl?.pathname;
  if (authenticatedRoutes.includes(pathname)) {
    if (authenticated) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/settings/:path*", "/analytics", "/calendar"],
};
