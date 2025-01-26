import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const nextVersion = "nuxt";

  const response = NextResponse.json({ version: nextVersion });

  response.cookies.set("version", nextVersion, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
  });

  return response;
}
