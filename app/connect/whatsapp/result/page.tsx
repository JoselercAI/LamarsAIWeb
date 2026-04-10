import Link from "next/link";

import { Button } from "@/components/ui/Button";

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
  const status = getValue(params, "status") === "success" ? "success" : "error";
  const message = getValue(params, "message");
  const appReturnUrl =
    process.env.LAMARS_APP_RETURN_URL?.trim() || "lamars://whatsapp/connect";

  return (
    <main className={styles.page}>
      <p className={styles.eyebrow}>LAMARS onboarding</p>
      <span
        className={`${styles.status} ${
          status === "success" ? styles.statusSuccess : styles.statusError
        }`}
      >
        {status === "success" ? "Connection complete" : "Connection error"}
      </span>
      <h1 className={styles.title}>
        {status === "success"
          ? "Your WhatsApp account is now linked to Lamars"
          : "We couldn't complete the WhatsApp connection"}
      </h1>
      <p className={styles.lede}>
        {status === "success"
          ? "Return to the Lamars app and refresh the connection status."
          : message ||
            "Please go back to the Lamars app and try the connection flow again."}
      </p>

      <section className={styles.card}>
        <div className={styles.actions}>
          <Button href={appReturnUrl}>Back to Lamars</Button>
          {status === "error" ? (
            <Button href="/" variant="secondary">
              Back to lamars.ai
            </Button>
          ) : null}
        </div>
      </section>

      <Link className={styles.backLink} href="/">
        Back to home
      </Link>
    </main>
  );
}
