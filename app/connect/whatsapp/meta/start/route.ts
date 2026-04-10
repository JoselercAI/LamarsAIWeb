import { NextRequest, NextResponse } from "next/server";

import { buildMetaSignupUrl, buildResultUrl } from "@/lib/whatsapp-connect";

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

  const metaUrl = buildMetaSignupUrl(state);
  const relevantParams = Object.fromEntries(metaUrl.searchParams.entries());

  console.log("[whatsapp-connect:start] metaUrl", metaUrl.toString());
  console.log(
    "[whatsapp-connect:start] hasDisplayPopup",
    metaUrl.searchParams.get("display") === "popup",
  );
  console.log("[whatsapp-connect:start] params", relevantParams);

  return NextResponse.redirect(metaUrl, 302);
}
