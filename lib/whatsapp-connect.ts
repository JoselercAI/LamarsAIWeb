type CompletePayload = {
  state: string;
  code: string;
  redirectUri: string;
  phoneNumberId?: string;
  wabaId?: string;
  metaBusinessAccountId?: string;
  displayPhoneNumber?: string;
};

type EmbeddedSignupMessage = {
  type?: string;
  event?: string;
  data?: Record<string, unknown>;
};

export type WhatsAppSessionInfo = {
  state?: string;
  phoneNumberId?: string;
  wabaId?: string;
  metaBusinessAccountId?: string;
  displayPhoneNumber?: string;
  source?: string;
  receivedAt?: string;
};

export const WHATSAPP_SESSION_COOKIE = "lamars_wa_session_info";
export const WHATSAPP_SESSION_STORAGE_KEY = "lamars_wa_session_info";

function required(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export function getWhatsAppConnectConfig() {
  return {
    apiBaseUrl: required("LAMARS_API_BASE_URL").replace(/\/$/, ""),
    metaAppId: required("META_APP_ID"),
    embeddedSignupConfigId: required("WHATSAPP_EMBEDDED_SIGNUP_CONFIG_ID"),
    redirectUri: required("WHATSAPP_EMBEDDED_SIGNUP_REDIRECT_URI"),
    connectBaseUrl: required("LAMARS_CONNECT_BASE_URL").replace(/\/$/, ""),
    appReturnUrl:
      process.env.LAMARS_APP_RETURN_URL?.trim() || "lamars://whatsapp/connect",
  };
}

export function buildResultUrl(
  status: "success" | "error",
  params?: Record<string, string | undefined>,
) {
  const { connectBaseUrl } = getWhatsAppConnectConfig();
  const url = new URL("/connect/whatsapp/result", connectBaseUrl);

  url.searchParams.set("status", status);

  if (params) {
    for (const [key, value] of Object.entries(params)) {
      if (value) {
        url.searchParams.set(key, value);
      }
    }
  }

  return url;
}

export function buildMetaSignupUrl(state: string) {
  const { embeddedSignupConfigId, metaAppId, redirectUri } =
    getWhatsAppConnectConfig();
  const url = new URL("https://www.facebook.com/dialog/oauth");

  url.searchParams.set("client_id", metaAppId);
  url.searchParams.set("config_id", embeddedSignupConfigId);
  url.searchParams.set("display", "touch");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("override_default_response_type", "true");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("state", state);

  return url;
}

function pickString(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim() : undefined;
}

function pickFirstString(values: unknown) {
  if (!Array.isArray(values)) return undefined;

  return values
    .map((value) => pickString(value))
    .find((value): value is string => Boolean(value));
}

export function extractSessionInfoFromSearchParams(
  searchParams: URLSearchParams,
): WhatsAppSessionInfo {
  const repeatedWabaIds = searchParams
    .getAll("waba_ids")
    .map((value) => value.trim())
    .filter(Boolean);
  const wabaId =
    getOptionalParam(searchParams, "wabaId", "waba_id") ||
    (repeatedWabaIds.length > 1 ? repeatedWabaIds[0] : undefined) ||
    (() => {
      const raw = searchParams.get("waba_ids");

      if (!raw) return undefined;

      try {
        const parsed = JSON.parse(raw) as unknown;
        return pickFirstString(parsed);
      } catch {
        return raw.split(",").map((value) => value.trim()).find(Boolean);
      }
    })();

  return {
    phoneNumberId: getOptionalParam(searchParams, "phoneNumberId", "phone_number_id"),
    wabaId,
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
    source: "query",
  };
}

export function extractSessionInfoFromMessageEvent(
  message: unknown,
): WhatsAppSessionInfo | null {
  const parsed = (message ?? {}) as EmbeddedSignupMessage;

  if (parsed.type !== "WA_EMBEDDED_SIGNUP") {
    return null;
  }

  const data = parsed.data ?? {};
  const wabaId = pickString(data.waba_id) || pickFirstString(data.waba_ids);
  const phoneNumberId = pickString(data.phone_number_id);
  const metaBusinessAccountId = pickString(data.business_id);
  const displayPhoneNumber = pickString(
    data.display_phone_number ?? data.displayPhoneNumber,
  );

  if (!phoneNumberId && !wabaId && !metaBusinessAccountId && !displayPhoneNumber) {
    return null;
  }

  return {
    phoneNumberId,
    wabaId,
    metaBusinessAccountId,
    displayPhoneNumber,
    source: `message:${pickString(parsed.event) || "unknown"}`,
    receivedAt: new Date().toISOString(),
  };
}

export function parseStoredSessionInfo(raw?: string) {
  if (!raw) return null;

  try {
    const parsed = JSON.parse(decodeURIComponent(raw)) as WhatsAppSessionInfo;
    return parsed;
  } catch {
    return null;
  }
}

export async function completeEmbeddedSignup(payload: CompletePayload) {
  const { apiBaseUrl } = getWhatsAppConnectConfig();
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

  const text = await response.text();
  let data: Record<string, unknown> | null = null;

  if (text) {
    try {
      data = JSON.parse(text) as Record<string, unknown>;
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    const message =
      (typeof data?.message === "string" && data.message) ||
      (typeof data?.error === "string" && data.error) ||
      text ||
      "Unable to complete WhatsApp connection.";

    throw new Error(message);
  }

  return data;
}

export function getOptionalParam(
  searchParams: URLSearchParams,
  ...keys: string[]
) {
  for (const key of keys) {
    const value = searchParams.get(key)?.trim();

    if (value) {
      return value;
    }
  }

  return undefined;
}
