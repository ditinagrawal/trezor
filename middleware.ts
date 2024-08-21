import NextAuth from "next-auth";
import authConfig from "./auth.config";

const { auth } = NextAuth(authConfig);
export default auth((req): any => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  console.log("🚀 ~ file: middleware.ts:9 ~ auth ~ isLoggedIn:", isLoggedIn);

  const isApiAuthRoute = nextUrl.pathname.startsWith("/api");
  const isPublicRoute = ["/"].includes(nextUrl.pathname);
  const isAuthRoute = ["/auth/sign-in"].includes(nextUrl.pathname);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL("/dashboard", nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/auth/sign-in", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
