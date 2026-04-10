import { NextRequest, NextResponse } from "next/server";

import { buildResultUrl } from "@/lib/whatsapp-connect";

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state")?.trim();

  if (!state) {
    return NextResponse.redirect(
      buildResultUrl("error", {
        message: "Missing connection state.",
      }),
      302,
    );
  }

  const launchUrl = new URL("/connect/whatsapp", request.nextUrl.origin);

  launchUrl.searchParams.set("state", state);
  launchUrl.searchParams.set("launch", "1");

  console.log("[whatsapp-connect:start] launchUrl", launchUrl.toString());

  return NextResponse.redirect(launchUrl, 302);
}
