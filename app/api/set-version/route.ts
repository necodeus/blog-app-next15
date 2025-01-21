import { NextResponse } from "next/server";

const versions = ["astro", "nuxt"];

const getCookieValue = (cookies: string, key: string) => {
  return cookies?.split("; ").find((cookie) => cookie.startsWith(`${key}=`))?.split("=")[1];
};

const getNewVersion = (currentVersion: string) => {
  const currentIndex = versions.indexOf(currentVersion);
  const nextIndex = (currentIndex + 1) % versions.length;
  return versions[nextIndex];
};

export async function GET(req: Request) {
  const nextVersion = getNewVersion(getCookieValue(req.headers.get("cookie") || '', "version") || '');

  const response = NextResponse.json({ version: nextVersion });
  response.cookies.set("version", nextVersion, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
