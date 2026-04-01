import Link from "next/link";

import styles from "../legal.module.scss";

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <Link className={styles.back} href="/">
        Back to home
      </Link>
      <h1>Privacy Policy</h1>
      <p className={styles.lede}>
        LAMARS is operated by Clearpoint Information Technology - FZCO, Dubai,
        UAE. This page explains the minimum privacy commitments for the public
        beta landing and app download flow.
      </p>

      <section>
        <h2>What we collect</h2>
        <p>
          We may collect basic contact details, device information, and usage
          events related to the website, download flow, and onboarding process.
          Inside the product, LAMARS analyzes conversation context to generate
          daily briefings for the connected user.
        </p>
      </section>

      <section>
        <h2>How we use data</h2>
        <p>
          Data is used to operate the service, generate product briefings,
          improve reliability, prevent abuse, and support onboarding. We do not
          use your lead data to contact your clients on your behalf.
        </p>
      </section>

      <section>
        <h2>Data sharing</h2>
        <p>
          We do not sell personal data. We may work with infrastructure,
          analytics, and support providers strictly as needed to operate the
          service. We do not share conversations with other agents or
          brokerages without authorization.
        </p>
      </section>

      <section>
        <h2>Your choices</h2>
        <ul>
          <li>You control whether you connect your WhatsApp account.</li>
          <li>You can stop using the service at any time.</li>
          <li>You can request support or data-related help through our contact channels.</li>
        </ul>
      </section>
    </main>
  );
}
