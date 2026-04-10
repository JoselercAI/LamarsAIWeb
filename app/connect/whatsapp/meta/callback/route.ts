import { NextRequest, NextResponse } from "next/server";

import {
  buildResultUrl,
  extractSessionInfoFromSearchParams,
  getWhatsAppConnectConfig,
  parseStoredSessionInfo,
  WHATSAPP_SESSION_COOKIE,
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

  const { apiBaseUrl, redirectUri } = getWhatsAppConnectConfig();
  const querySessionInfo = extractSessionInfoFromSearchParams(searchParams);
  const storedSessionInfo = parseStoredSessionInfo(
    request.cookies.get(WHATSAPP_SESSION_COOKIE)?.value,
  );
  const cookieSessionInfo =
    storedSessionInfo?.state === state ? storedSessionInfo : null;
  const finalSessionInfo = {
    phoneNumberId:
      querySessionInfo.phoneNumberId || cookieSessionInfo?.phoneNumberId,
    wabaId: querySessionInfo.wabaId || cookieSessionInfo?.wabaId,
    metaBusinessAccountId:
      querySessionInfo.metaBusinessAccountId ||
      cookieSessionInfo?.metaBusinessAccountId,
    displayPhoneNumber:
      querySessionInfo.displayPhoneNumber || cookieSessionInfo?.displayPhoneNumber,
  };

  console.log(
    "[whatsapp-connect:callback] receivedSessionInfo",
    cookieSessionInfo ?? querySessionInfo,
  );
  console.log("[whatsapp-connect:callback] sessionFields", {
    phoneNumberId: finalSessionInfo.phoneNumberId ?? null,
    wabaId: finalSessionInfo.wabaId ?? null,
    metaBusinessAccountId: finalSessionInfo.metaBusinessAccountId ?? null,
    displayPhoneNumber: finalSessionInfo.displayPhoneNumber ?? null,
    querySource: querySessionInfo.source ?? null,
    cookieSource: cookieSessionInfo?.source ?? null,
  });

  const payload = {
    state,
    code,
    redirectUri,
    phoneNumberId: finalSessionInfo.phoneNumberId,
    wabaId: finalSessionInfo.wabaId,
    metaBusinessAccountId: finalSessionInfo.metaBusinessAccountId,
    displayPhoneNumber: finalSessionInfo.displayPhoneNumber,
  };

  console.log("[whatsapp-connect:callback] backendPayload", payload);

  try {
    const response = await fetch(
      `${apiBaseUrl}/integrations/whatsapp/embedded-signup/complete`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-store",
      },
    );

    const backendBody = await response.text();
    let backendJson: Record<string, unknown> | null = null;

    console.log("[whatsapp-connect:callback] backendStatus", response.status);
    console.log("[whatsapp-connect:callback] backendBody", backendBody);

    if (backendBody) {
      try {
        backendJson = JSON.parse(backendBody) as Record<string, unknown>;
      } catch {
        backendJson = null;
      }
    }

    if (!response.ok) {
      const redirectResponse = NextResponse.redirect(
        buildResultUrl("error", {
          message:
            (typeof backendJson?.message === "string" && backendJson.message) ||
            (typeof backendJson?.error === "string" && backendJson.error) ||
            backendBody ||
            "Railway returned an error.",
          backendStatus: String(response.status),
          backendBody,
        }),
        302,
      );

      redirectResponse.cookies.set(WHATSAPP_SESSION_COOKIE, "", {
        maxAge: 0,
        path: "/",
      });

      return redirectResponse;
    }

    const redirectResponse = NextResponse.redirect(buildResultUrl("success"), 302);

    redirectResponse.cookies.set(WHATSAPP_SESSION_COOKIE, "", {
      maxAge: 0,
      path: "/",
    });

    return redirectResponse;
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unable to complete WhatsApp connection.";

    console.log("[whatsapp-connect:callback] completeError", message);

    const redirectResponse = NextResponse.redirect(
      buildResultUrl("error", {
        message,
        backendStatus: "network_error",
      }),
      302,
    );

    redirectResponse.cookies.set(WHATSAPP_SESSION_COOKIE, "", {
      maxAge: 0,
      path: "/",
    });

    return redirectResponse;
  }
}
