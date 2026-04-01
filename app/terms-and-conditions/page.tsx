import Link from "next/link";

import styles from "../legal.module.scss";

export default function TermsAndConditionsPage() {
  return (
    <main className={styles.page}>
      <Link className={styles.back} href="/">
        Back to home
      </Link>
      <h1>Terms & Conditions</h1>
      <p className={styles.lede}>
        These terms govern access to the LAMARS website, beta onboarding flow,
        and related product materials provided by Clearpoint Information
        Technology - FZCO, Dubai, UAE.
      </p>

      <section>
        <h2>Use of the service</h2>
        <p>
          LAMARS is provided to help users prioritize leads and follow-ups. You
          are responsible for the actions you take inside your business and for
          complying with local laws, platform rules, and brokerage policies.
        </p>
      </section>

      <section>
        <h2>Beta availability</h2>
        <p>
          During beta, features may change, be limited, or be removed. We may
          update store links, onboarding methods, and supported devices without
          prior notice while the product evolves.
        </p>
      </section>

      <section>
        <h2>Intellectual property</h2>
        <p>
          The LAMARS brand, software, interface, and related materials remain
          the property of their respective owners. You may not copy, resell, or
          reverse engineer the service except where the law expressly allows it.
        </p>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          The service is provided on an as-available basis during beta. To the
          maximum extent allowed by law, we are not liable for indirect losses,
          missed deals, or business interruption resulting from beta use.
        </p>
      </section>
    </main>
  );
}
