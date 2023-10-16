export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    "/feed/:path*",
    "/explore/:path*",
    "/profile/:path*",
    "/communities/:path*",
    "/api/:path*",
  ],
};
