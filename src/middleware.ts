import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const authenticatedRoutes = ["/settings", "/analytics", "/calendar"];

// Implement Middleware on authenticated routes given above

export async function middleware(request: NextRequest) {
  const authenticated = await auth();
  const pathname = request?.nextUrl?.pathname;

  // If user is loged in and tries to access login page then return to dashboard
  if (authenticated && pathname === "/") {
    return NextResponse.redirect(new URL("/analytics", request.url));
  }
  // If user tries to access dashboard pages check for authentication
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
  matcher: ["/:path*"],
};
