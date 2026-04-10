"use client";

import { useEffect } from "react";

import {
  extractSessionInfoFromMessageEvent,
  WHATSAPP_SESSION_COOKIE,
  WHATSAPP_SESSION_STORAGE_KEY,
} from "@/lib/whatsapp-connect";

function parseMessage(data: unknown) {
  if (typeof data !== "string") return data;

  try {
    return JSON.parse(data) as unknown;
  } catch {
    return null;
  }
}

export function EmbeddedSignupSessionCapture({ state }: { state: string }) {
  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!event.origin.endsWith("facebook.com")) return;

      const parsed = parseMessage(event.data);
      const sessionInfo = extractSessionInfoFromMessageEvent(parsed);

      if (!sessionInfo) return;

      const stored = {
        ...sessionInfo,
        receivedEmbeddedSignupEvent: true,
        rawEmbeddedSignupPayload: JSON.stringify(parsed),
        state,
      };
      const serialized = JSON.stringify(stored);
      const encoded = encodeURIComponent(serialized);

      window.localStorage.setItem(WHATSAPP_SESSION_STORAGE_KEY, serialized);
      document.cookie = `${WHATSAPP_SESSION_COOKIE}=${encoded}; Path=/; Max-Age=900; SameSite=Lax; Secure`;

      console.log("[whatsapp-connect:session] receivedSessionInfo", stored);
      console.log("[whatsapp-connect:session] sessionFields", {
        phoneNumberId: stored.phoneNumberId ?? null,
        wabaId: stored.wabaId ?? null,
        metaBusinessAccountId: stored.metaBusinessAccountId ?? null,
        displayPhoneNumber: stored.displayPhoneNumber ?? null,
        source: stored.source ?? null,
      });
    };

    window.addEventListener("message", onMessage);

    return () => {
      window.removeEventListener("message", onMessage);
    };
  }, [state]);

  return null;
}
