"use client";

import { useEffect, useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  parseStoredSessionInfo,
  WHATSAPP_SESSION_COOKIE,
  WHATSAPP_SESSION_STORAGE_KEY,
  type WhatsAppSessionInfo,
} from "@/lib/whatsapp-connect";

import styles from "../whatsapp-connect.module.scss";

type CompletionStatus = "pending" | "success" | "error";

type DebugState = {
  cookieValue?: string;
  localStorageValue?: string;
  sessionStorageValue?: string;
  rawQueryParams: Record<string, string | undefined>;
  phoneNumberIdSource?: string;
  wabaIdSource?: string;
  metaBusinessAccountIdSource?: string;
  receivedEmbeddedSignupEvent?: boolean;
  rawEmbeddedSignupPayload?: string;
};

type WhatsAppCompletionClientProps = {
  apiBaseUrl: string;
  appReturnUrl: string;
  code?: string;
  state?: string;
  redirectUri: string;
  initialError?: string;
  initialErrorCode?: string;
  initialErrorDescription?: string;
  initialErrorReason?: string;
  initialBackendBody?: string;
  initialBackendStatus?: string;
  initialMessage?: string;
  initialPhoneNumberId?: string;
  initialWabaId?: string;
  initialMetaBusinessAccountId?: string;
  initialDisplayPhoneNumber?: string;
  initialStatus: CompletionStatus;
};

function readCookieValue(name: string) {
  const cookies = document.cookie
    .split(";")
    .map((item) => item.trim())
    .filter(Boolean);

  for (const cookie of cookies) {
    if (!cookie.startsWith(`${name}=`)) continue;

    return cookie.slice(name.length + 1);
  }

  return undefined;
}

function mergeSessionInfo(
  initial: Partial<WhatsAppSessionInfo>,
  cookieValue?: string,
): WhatsAppSessionInfo {
  const localValue = window.localStorage.getItem(WHATSAPP_SESSION_STORAGE_KEY);
  const localSession = parseStoredSessionInfo(localValue || undefined);
  const cookieSession = parseStoredSessionInfo(cookieValue);

  return {
    phoneNumberId:
      initial.phoneNumberId ||
      localSession?.phoneNumberId ||
      cookieSession?.phoneNumberId,
    wabaId: initial.wabaId || localSession?.wabaId || cookieSession?.wabaId,
    metaBusinessAccountId:
      initial.metaBusinessAccountId ||
      localSession?.metaBusinessAccountId ||
      cookieSession?.metaBusinessAccountId,
    displayPhoneNumber:
      initial.displayPhoneNumber ||
      localSession?.displayPhoneNumber ||
      cookieSession?.displayPhoneNumber,
    source:
      localSession?.source ||
      cookieSession?.source ||
      initial.source ||
      "unavailable",
  };
}

function pickSource(
  field: keyof Pick<
    WhatsAppSessionInfo,
    "phoneNumberId" | "wabaId" | "metaBusinessAccountId"
  >,
  initial: Partial<WhatsAppSessionInfo>,
  localSession: WhatsAppSessionInfo | null,
  cookieSession: WhatsAppSessionInfo | null,
) {
  if (initial[field]) return "query";
  if (localSession?.[field]) return "localStorage";
  if (cookieSession?.[field]) return "cookie";
  return "none";
}

export function WhatsAppCompletionClient({
  apiBaseUrl,
  appReturnUrl,
  code,
  state,
  redirectUri,
  initialError,
  initialErrorCode,
  initialErrorDescription,
  initialErrorReason,
  initialBackendBody,
  initialBackendStatus,
  initialMessage,
  initialPhoneNumberId,
  initialWabaId,
  initialMetaBusinessAccountId,
  initialDisplayPhoneNumber,
  initialStatus,
}: WhatsAppCompletionClientProps) {
  const hasRequiredCallbackData = Boolean(code && state);
  const initialResolvedStatus =
    initialStatus === "pending" && !hasRequiredCallbackData ? "error" : initialStatus;
  const initialResolvedMessage =
    initialStatus === "pending" && !hasRequiredCallbackData
      ? "Missing code or state from Meta."
      : initialMessage;

  const [status, setStatus] = useState<CompletionStatus>(initialResolvedStatus);
  const [message, setMessage] = useState<string | undefined>(initialResolvedMessage);
  const [backendStatus, setBackendStatus] = useState<string | undefined>(
    initialBackendStatus,
  );
  const [backendBody, setBackendBody] = useState<string | undefined>(
    initialBackendBody,
  );

  const [sessionFields, setSessionFields] = useState<WhatsAppSessionInfo>({
    phoneNumberId: initialPhoneNumberId,
    wabaId: initialWabaId,
    metaBusinessAccountId: initialMetaBusinessAccountId,
    displayPhoneNumber: initialDisplayPhoneNumber,
  });
  const [debugState, setDebugState] = useState<DebugState>({
    rawQueryParams: {
      code,
      state,
      phoneNumberId: initialPhoneNumberId,
      wabaId: initialWabaId,
      metaBusinessAccountId: initialMetaBusinessAccountId,
      displayPhoneNumber: initialDisplayPhoneNumber,
    },
  });

  const errorDetails = useMemo(
    () => ({
      error: initialError,
      errorCode: initialErrorCode,
      errorDescription: initialErrorDescription,
      errorReason: initialErrorReason,
    }),
    [initialError, initialErrorCode, initialErrorDescription, initialErrorReason],
  );

  useEffect(() => {
    if (initialStatus !== "pending") return;
    if (!hasRequiredCallbackData) {
      return;
    }

    const cookieValue = readCookieValue(WHATSAPP_SESSION_COOKIE);
    console.log("[whatsapp-connect:result] cookieValue", cookieValue ?? null);
    const localStorageValue = window.localStorage.getItem(WHATSAPP_SESSION_STORAGE_KEY);
    const sessionStorageValue = window.sessionStorage.getItem(
      WHATSAPP_SESSION_STORAGE_KEY,
    );
    const localSession = parseStoredSessionInfo(localStorageValue || undefined);
    const cookieSession = parseStoredSessionInfo(cookieValue);

    const mergedSession = mergeSessionInfo(
      {
        phoneNumberId: initialPhoneNumberId,
        wabaId: initialWabaId,
        metaBusinessAccountId: initialMetaBusinessAccountId,
        displayPhoneNumber: initialDisplayPhoneNumber,
      },
      cookieValue,
    );
    const nextDebugState: DebugState = {
      cookieValue,
      localStorageValue: localStorageValue || undefined,
      sessionStorageValue: sessionStorageValue || undefined,
      rawQueryParams: {
        code,
        state,
        phoneNumberId: initialPhoneNumberId,
        wabaId: initialWabaId,
        metaBusinessAccountId: initialMetaBusinessAccountId,
        displayPhoneNumber: initialDisplayPhoneNumber,
      },
      phoneNumberIdSource: pickSource(
        "phoneNumberId",
        {
          phoneNumberId: initialPhoneNumberId,
        },
        localSession,
        cookieSession,
      ),
      wabaIdSource: pickSource(
        "wabaId",
        {
          wabaId: initialWabaId,
        },
        localSession,
        cookieSession,
      ),
      metaBusinessAccountIdSource: pickSource(
        "metaBusinessAccountId",
        {
          metaBusinessAccountId: initialMetaBusinessAccountId,
        },
        localSession,
        cookieSession,
      ),
      receivedEmbeddedSignupEvent:
        localSession?.receivedEmbeddedSignupEvent ||
        cookieSession?.receivedEmbeddedSignupEvent ||
        false,
      rawEmbeddedSignupPayload:
        localSession?.rawEmbeddedSignupPayload ||
        cookieSession?.rawEmbeddedSignupPayload,
    };

    console.log("[whatsapp-connect:result] sessionFields", mergedSession);
    const sessionTimer = window.setTimeout(() => {
      setSessionFields(mergedSession);
      setDebugState(nextDebugState);
    }, 0);

    const backendPayload = {
      state,
      code,
      redirectUri,
      phoneNumberId: mergedSession.phoneNumberId,
      wabaId: mergedSession.wabaId,
      metaBusinessAccountId: mergedSession.metaBusinessAccountId,
      displayPhoneNumber: mergedSession.displayPhoneNumber,
    };

    console.log("[whatsapp-connect:result] backendPayload", backendPayload);

    let cancelled = false;

    async function complete() {
      try {
        const response = await fetch(
          `${apiBaseUrl}/integrations/whatsapp/embedded-signup/complete`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(backendPayload),
          },
        );

        const text = await response.text();

        console.log("[whatsapp-connect:result] backendStatus", response.status);
        console.log("[whatsapp-connect:result] backendBody", text);

        if (cancelled) return;

        setBackendStatus(String(response.status));
        setBackendBody(text || undefined);

        if (!response.ok) {
          setStatus("error");
          setMessage(text || "Railway returned an error.");
          return;
        }

        setStatus("success");
        setMessage("Return to the Lamars app and refresh the connection status.");
        window.localStorage.removeItem(WHATSAPP_SESSION_STORAGE_KEY);
        document.cookie = `${WHATSAPP_SESSION_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax; Secure`;
      } catch (error) {
        if (cancelled) return;

        const networkMessage =
          error instanceof Error
            ? error.message
            : "Unable to complete WhatsApp connection.";

        console.log("[whatsapp-connect:result] completeError", networkMessage);
        setStatus("error");
        setBackendStatus("network_error");
        setMessage(networkMessage);
      }
    }

    void complete();

    return () => {
      window.clearTimeout(sessionTimer);
      cancelled = true;
    };
  }, [
    apiBaseUrl,
    code,
    hasRequiredCallbackData,
    initialDisplayPhoneNumber,
    initialMetaBusinessAccountId,
    initialPhoneNumberId,
    initialStatus,
    initialWabaId,
    redirectUri,
    state,
  ]);

  return (
    <section className={styles.card}>
      {status === "pending" ? (
        <p className={styles.lede}>Completing your WhatsApp connection...</p>
      ) : null}

      {status === "error" ? (
        <div className={styles.errorDetails}>
          <p>
            <strong>Backend status:</strong> {backendStatus || "-"}
          </p>
          <p>
            <strong>Message:</strong> {message || "-"}
          </p>
          <p>
            <strong>Backend body:</strong> {backendBody || "-"}
          </p>
          <p>
            <strong>Error:</strong> {errorDetails.error || "-"}
          </p>
          <p>
            <strong>Error description:</strong> {errorDetails.errorDescription || "-"}
          </p>
          <p>
            <strong>Error reason:</strong> {errorDetails.errorReason || "-"}
          </p>
          <p>
            <strong>Error code:</strong> {errorDetails.errorCode || "-"}
          </p>
          <p>
            <strong>phoneNumberId:</strong> {sessionFields.phoneNumberId || "-"}
          </p>
          <p>
            <strong>wabaId:</strong> {sessionFields.wabaId || "-"}
          </p>
          <p>
            <strong>metaBusinessAccountId:</strong>{" "}
            {sessionFields.metaBusinessAccountId || "-"}
          </p>
        </div>
      ) : null}

      <div className={styles.errorDetails}>
        <p>
          <strong>Query params:</strong>{" "}
          {JSON.stringify(debugState.rawQueryParams)}
        </p>
        <p>
          <strong>Cookie value:</strong> {debugState.cookieValue || "-"}
        </p>
        <p>
          <strong>localStorage value:</strong> {debugState.localStorageValue || "-"}
        </p>
        <p>
          <strong>sessionStorage value:</strong>{" "}
          {debugState.sessionStorageValue || "-"}
        </p>
        <p>
          <strong>phoneNumberId source:</strong>{" "}
          {debugState.phoneNumberIdSource || "-"}
        </p>
        <p>
          <strong>wabaId source:</strong> {debugState.wabaIdSource || "-"}
        </p>
        <p>
          <strong>metaBusinessAccountId source:</strong>{" "}
          {debugState.metaBusinessAccountIdSource || "-"}
        </p>
        <p>
          <strong>receivedEmbeddedSignupEvent:</strong>{" "}
          {String(debugState.receivedEmbeddedSignupEvent ?? false)}
        </p>
        <p>
          <strong>rawEmbeddedSignupPayload:</strong>{" "}
          {debugState.rawEmbeddedSignupPayload || "-"}
        </p>
      </div>

      <div className={styles.actions}>
        <Button href={appReturnUrl}>Back to Lamars</Button>
        {status === "error" ? (
          <Button href="/" variant="secondary">
            Back to lamars.ai
          </Button>
        ) : null}
      </div>
    </section>
  );
}
