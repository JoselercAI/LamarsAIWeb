import { NextRequest, NextResponse } from "next/server";

import {
  buildResultUrl,
  extractSessionInfoFromSearchParams,
} from "@/lib/whatsapp-connect";

export async function GET(request: NextRequest) {
  console.log("[whatsapp-connect:callback] url", request.url);

  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get("code")?.trim();
  const state = searchParams.get("state")?.trim();
  const error = searchParams.get("error")?.trim();
  const errorCode = searchParams.get("error_code")?.trim();
  const errorReason = searchParams.get("error_reason")?.trim();
  const errorDescription = searchParams.get("error_description")?.trim();
  const allParams = Object.fromEntries(searchParams.entries());

  console.log("[whatsapp-connect:callback] params", allParams);
  console.log("[whatsapp-connect:callback] code", code ?? null);
  console.log("[whatsapp-connect:callback] state", state ?? null);
  console.log("[whatsapp-connect:callback] error", error ?? null);
  console.log("[whatsapp-connect:callback] error_code", errorCode ?? null);
  console.log("[whatsapp-connect:callback] error_reason", errorReason ?? null);
  console.log(
    "[whatsapp-connect:callback] error_description",
    errorDescription ?? null,
  );

  if (error || errorCode || errorReason || errorDescription) {
    return NextResponse.redirect(
      buildResultUrl("error", {
        message:
          errorDescription || errorReason || error || "Meta returned an error.",
        error,
        error_code: errorCode,
        error_reason: errorReason,
        error_description: errorDescription,
      }),
      302,
    );
  }

  if (!code || !state) {
    return NextResponse.redirect(
      buildResultUrl("error", {
        message: "Missing code or state from Meta.",
      }),
      302,
    );
  }

  const querySessionInfo = extractSessionInfoFromSearchParams(searchParams);
  console.log("[whatsapp-connect:callback] receivedSessionInfo", querySessionInfo);
  console.log("[whatsapp-connect:callback] sessionFields", {
    phoneNumberId: querySessionInfo.phoneNumberId ?? null,
    wabaId: querySessionInfo.wabaId ?? null,
    metaBusinessAccountId: querySessionInfo.metaBusinessAccountId ?? null,
    displayPhoneNumber: querySessionInfo.displayPhoneNumber ?? null,
    querySource: querySessionInfo.source ?? null,
  });

  return NextResponse.redirect(
    buildResultUrl("pending", {
      code,
      state,
      phoneNumberId: querySessionInfo.phoneNumberId,
      wabaId: querySessionInfo.wabaId,
      metaBusinessAccountId: querySessionInfo.metaBusinessAccountId,
      displayPhoneNumber: querySessionInfo.displayPhoneNumber,
    }),
    302,
  );
}
