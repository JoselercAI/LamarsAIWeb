import { NextRequest, NextResponse } from "next/server";

import { buildMetaSignupUrl, buildResultUrl } from "@/lib/whatsapp-connect";

export async function GET(request: NextRequest) {
  const state = request.nextUrl.searchParams.get("state")?.trim();

  if (!state) {
    return NextResponse.redirect(
      buildResultUrl("error", "Missing connection state."),
      302,
    );
  }

  return NextResponse.redirect(buildMetaSignupUrl(state), 302);
}
