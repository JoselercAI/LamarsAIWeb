import { NextRequest, NextResponse } from "next/server";

import {
  buildResultUrl,
  completeEmbeddedSignup,
  getOptionalParam,
  getWhatsAppConnectConfig,
} from "@/lib/whatsapp-connect";

export async function GET(request: NextRequest) {
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

  const { redirectUri } = getWhatsAppConnectConfig();

  try {
    await completeEmbeddedSignup({
      state,
      code,
      redirectUri,
      phoneNumberId: getOptionalParam(
        searchParams,
        "phoneNumberId",
        "phone_number_id",
      ),
      wabaId: getOptionalParam(searchParams, "wabaId", "waba_id"),
      metaBusinessAccountId: getOptionalParam(
        searchParams,
        "metaBusinessAccountId",
        "meta_business_account_id",
        "business_id",
      ),
      displayPhoneNumber: getOptionalParam(
        searchParams,
        "displayPhoneNumber",
        "display_phone_number",
      ),
    });

    return NextResponse.redirect(buildResultUrl("success"), 302);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to complete WhatsApp connection.";

    console.log("[whatsapp-connect:callback] completeError", message);

    return NextResponse.redirect(
      buildResultUrl("error", {
        message,
      }),
      302,
    );
  }
}
