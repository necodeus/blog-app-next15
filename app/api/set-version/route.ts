import { NextResponse } from "next/server";

const current = "next";
const versions = ["astro", "next", "nuxt"];

export async function GET(req: Request) {
  const cookies = req.headers.get("cookie");
  const currentVersion = cookies
    ?.split("; ")
    .find((cookie) => cookie.startsWith("version="))
    ?.split("=")[1];
  const filteredVersions = versions.filter((version) => version !== current);
  const currentIndex = filteredVersions.indexOf(currentVersion || "");
  const nextIndex = (currentIndex + 1) % filteredVersions.length;
  const nextVersion = filteredVersions[nextIndex];

  const response = NextResponse.json({ version: nextVersion });
  response.cookies.set("version", nextVersion, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
