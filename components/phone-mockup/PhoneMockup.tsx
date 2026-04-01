import { briefingSections } from "@/lib/site-content";

import styles from "./PhoneMockup.module.scss";

export function PhoneMockup() {
  return (
    <div className={styles.shell} aria-label="LAMARS daily briefing preview">
      <div className={styles.phone}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.topline}>8:00 AM - Tuesday</div>
          <h2>Your morning briefing</h2>
          {briefingSections.map((section) => (
            <section key={section.title} className={styles.card}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
      <div className={styles.floatCard}>
        <span className={styles.dot} />
        Knows who needs you first
      </div>
    </div>
  );
}
