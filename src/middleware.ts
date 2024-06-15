import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getProfile } from "./app/data/services/get-profile";

export async function middleware(request: NextRequest) {
  const user = await getProfile();

  if (user.ok && request.nextUrl.pathname.startsWith("/auth")) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  if (!user.ok && request.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
