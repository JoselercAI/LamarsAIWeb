"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  extractSessionInfoFromMessageEvent,
  WHATSAPP_SESSION_COOKIE,
} from "@/lib/whatsapp-connect";

declare global {
  interface Window {
    FB?: {
      init: (options: Record<string, unknown>) => void;
      login: (
        callback: (response: { authResponse?: { code?: string } }) => void,
        options: Record<string, unknown>,
      ) => void;
    };
    fbAsyncInit?: () => void;
  }
}

const SDK_URL = "https://connect.facebook.net/en_US/sdk.js";

function upsertScript(src: string) {
  const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);

  if (existing) return existing;

  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  script.defer = true;
  script.crossOrigin = "anonymous";
  document.body.appendChild(script);

  return script;
}

function buildCookieValue(state: string, sessionInfo: ReturnType<typeof extractSessionInfoFromMessageEvent>) {
  if (!sessionInfo) return null;

  return encodeURIComponent(
    JSON.stringify({
      ...sessionInfo,
      state,
    }),
  );
}

export function EmbeddedSignupLauncher({
  autoLaunch,
  embeddedSignupConfigId,
  metaAppId,
  redirectUri,
  state,
}: {
  autoLaunch: boolean;
  embeddedSignupConfigId: string;
  metaAppId: string;
  redirectUri: string;
  state: string;
}) {
  const [isReady, setIsReady] = useState(false);
  const [launchError, setLaunchError] = useState<string | null>(null);
  const hasLaunched = useRef(false);
  const pendingCode = useRef<string | null>(null);
  const redirectStarted = useRef(false);

  const redirectToCallback = useCallback(
    (code: string) => {
      if (redirectStarted.current) return;

      redirectStarted.current = true;

      const callbackUrl = new URL(redirectUri, window.location.origin);

      callbackUrl.searchParams.set("code", code);
      callbackUrl.searchParams.set("state", state);

      console.log("[whatsapp-connect:launch] redirectingWithCode", {
        code,
        state,
      });

      window.location.assign(callbackUrl.toString());
    },
    [redirectUri, state],
  );

  const launch = useCallback(() => {
    if (!window.FB) {
      setLaunchError("Meta SDK not ready.");
      return;
    }

    setLaunchError(null);

    window.FB.login(
      (response) => {
        const code = response.authResponse?.code;

        console.log("[whatsapp-connect:launch] code", code ?? null);

        if (!code) {
          setLaunchError("Meta did not return an authorization code.");
          return;
        }

        pendingCode.current = code;
        window.setTimeout(() => {
          redirectToCallback(code);
        }, 500);
      },
      {
        config_id: embeddedSignupConfigId,
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
        },
      },
    );
  }, [embeddedSignupConfigId, redirectToCallback]);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("facebook.com")) return;

      let parsed: unknown = event.data;

      if (typeof event.data === "string") {
        try {
          parsed = JSON.parse(event.data);
        } catch {
          parsed = null;
        }
      }

      const sessionInfo = extractSessionInfoFromMessageEvent(parsed);

      if (!sessionInfo) return;

      const cookieValue = buildCookieValue(state, sessionInfo);

      if (cookieValue) {
        document.cookie = `${WHATSAPP_SESSION_COOKIE}=${cookieValue}; Path=/; Max-Age=900; SameSite=Lax; Secure`;
      }

      console.log("[whatsapp-connect:session] receivedSessionInfo", {
        ...sessionInfo,
        state,
      });

      if (pendingCode.current) {
        redirectToCallback(pendingCode.current);
      }
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [redirectToCallback, state]);

  useEffect(() => {
    window.fbAsyncInit = () => {
      window.FB?.init({
        appId: metaAppId,
        autoLogAppEvents: true,
        xfbml: false,
        version: "v23.0",
      });
      setIsReady(true);
    };

    const script = upsertScript(SDK_URL);
    const onLoad = () => {
      if (window.fbAsyncInit) {
        window.fbAsyncInit();
      }
    };

    script.addEventListener("load", onLoad);

    if (window.FB) {
      onLoad();
    }

    return () => {
      script.removeEventListener("load", onLoad);
    };
  }, [metaAppId]);

  useEffect(() => {
    if (!autoLaunch || !isReady || hasLaunched.current) return;

    hasLaunched.current = true;

    const timer = window.setTimeout(() => {
      launch();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [autoLaunch, isReady, launch]);

  return (
    <div>
      <div style={{ display: "grid", gap: "0.75rem" }}>
        <Button onClick={launch}>Continue with Meta</Button>
        {launchError ? <p>{launchError}</p> : null}
      </div>
    </div>
  );
}
