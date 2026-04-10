import Link from "next/link";

import { getWhatsAppConnectConfig } from "@/lib/whatsapp-connect";

import { WhatsAppCompletionClient } from "./WhatsAppCompletionClient";
import styles from "../whatsapp-connect.module.scss";

type SearchParams = Promise<Record<string, string | string[] | undefined>>;

function getValue(
  source: Record<string, string | string[] | undefined>,
  key: string,
) {
  const value = source[key];

  return Array.isArray(value) ? value[0] : value;
}

export default async function WhatsAppConnectResultPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const params = await searchParams;
  const statusValue = getValue(params, "status");
  const status =
    statusValue === "success" || statusValue === "pending" ? statusValue : "error";
  const message = getValue(params, "message");
  const backendStatus = getValue(params, "backendStatus");
  const backendBody = getValue(params, "backendBody");
  const error = getValue(params, "error");
  const errorCode = getValue(params, "error_code");
  const errorReason = getValue(params, "error_reason");
  const errorDescription = getValue(params, "error_description");
  const code = getValue(params, "code");
  const state = getValue(params, "state");
  const phoneNumberId = getValue(params, "phoneNumberId");
  const wabaId = getValue(params, "wabaId");
  const metaBusinessAccountId = getValue(params, "metaBusinessAccountId");
  const displayPhoneNumber = getValue(params, "displayPhoneNumber");
  const { apiBaseUrl, appReturnUrl, redirectUri } = getWhatsAppConnectConfig();

  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>LAMARS onboarding</p>
      <span
        className={`${styles.status} ${
          status === "success" ? styles.statusSuccess : styles.statusError
        }`}
      >
        {status === "success"
          ? "Connection complete"
          : status === "pending"
            ? "Completing connection"
            : "Connection error"}
      </span>
      <h1 className={styles.title}>
        {status === "success"
          ? "Your WhatsApp account is now linked to Lamars"
          : status === "pending"
            ? "We're finalizing the WhatsApp connection"
          : "We couldn't complete the WhatsApp connection"}
      </h1>
      <p className={styles.lede}>
        {status === "success"
          ? "Return to the Lamars app and refresh the connection status."
          : status === "pending"
            ? "Please stay on this page while Lamars completes the final setup."
          : message ||
            "Please go back to the Lamars app and try the connection flow again."}
      </p>
      <WhatsAppCompletionClient
        apiBaseUrl={apiBaseUrl}
        appReturnUrl={appReturnUrl}
        code={code}
        initialBackendBody={backendBody}
        initialBackendStatus={backendStatus}
        initialDisplayPhoneNumber={displayPhoneNumber}
        initialError={error}
        initialErrorCode={errorCode}
        initialErrorDescription={errorDescription}
        initialErrorReason={errorReason}
        initialMessage={message}
        initialMetaBusinessAccountId={metaBusinessAccountId}
        initialPhoneNumberId={phoneNumberId}
        initialStatus={status}
        initialWabaId={wabaId}
        redirectUri={redirectUri}
        state={state}
      />

      <Link className={styles.backLink} href="/">
        Back to home
      </Link>
    </main>
  );
}
