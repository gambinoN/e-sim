import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const userAgent = req.headers.get("user-agent") || "";

  // Ispisivanje celog user-agent stringa
  console.log("User-Agent:", userAgent);

  // Dodavanje user-agent u URL parametar za debugging
  const url = req.nextUrl.clone();
  url.searchParams.set("userAgent", userAgent);

  return NextResponse.rewrite(url);
}
