type CompletePayload = {
  state: string;
  code: string;
  redirectUri: string;
  phoneNumberId?: string;
  wabaId?: string;
  metaBusinessAccountId?: string;
  displayPhoneNumber?: string;
};

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

export function buildResultUrl(status: "success" | "error", message?: string) {
  const { connectBaseUrl } = getWhatsAppConnectConfig();
  const url = new URL("/connect/whatsapp/result", connectBaseUrl);

  url.searchParams.set("status", status);

  if (message) {
    url.searchParams.set("message", message);
  }

  return url;
}

export function buildMetaSignupUrl(state: string) {
  const { embeddedSignupConfigId, metaAppId, redirectUri } =
    getWhatsAppConnectConfig();
  const url = new URL("https://www.facebook.com/dialog/oauth");

  url.searchParams.set("client_id", metaAppId);
  url.searchParams.set("config_id", embeddedSignupConfigId);
  url.searchParams.set("display", "page");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("override_default_response_type", "true");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("state", state);

  return url;
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
