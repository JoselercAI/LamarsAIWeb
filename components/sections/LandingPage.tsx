"use client";

import { useState } from "react";

import { DownloadModal } from "@/components/download-modal/DownloadModal";
import { PhoneMockup } from "@/components/phone-mockup/PhoneMockup";
import { Button } from "@/components/ui/Button";
import {
  faqItems,
  finalCta,
  footerContent,
  heroContent,
  howItWorksSection,
  navItems,
  problemSection,
  trustSection,
} from "@/lib/site-content";
import { siteConfig } from "@/lib/site-config";

import styles from "./LandingPage.module.scss";

export function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className={styles.header} id="top">
        <div className={styles.headerInner}>
          <a className={styles.logo} href="#top">
            {siteConfig.name}
          </a>
          <nav aria-label="Primary" className={styles.nav}>
            {navItems.map((item) => (
              <a key={item.href} className={styles.navLink} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <Button className={styles.headerCta} onClick={() => setIsModalOpen(true)}>
            Download Free
          </Button>
        </div>
      </header>

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.badge}>
              <span aria-hidden="true" className={styles.badgeDot} />
              {heroContent.badge}
            </p>
            <h1>
              {heroContent.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h1>
            <p className={styles.heroText}>{heroContent.description}</p>
            <div className={styles.heroActions}>
              <Button onClick={() => setIsModalOpen(true)}>{heroContent.cta}</Button>
            </div>
            <p className={styles.heroMeta}>{heroContent.meta}</p>
          </div>
          <PhoneMockup />
        </section>

        <section className={styles.section} id="problem">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>The problem</p>
            <h2>{problemSection.title}</h2>
            <p>{problemSection.description}</p>
          </div>
          <div className={styles.problemGrid}>
            {problemSection.cards.map((card) => (
              <article key={card.eyebrow} className={styles.problemCard}>
                <p className={styles.cardEyebrow}>
                  <span aria-hidden="true">{card.icon}</span>
                  {card.eyebrow}
                </p>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="how-it-works">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>How it works</p>
            <h2>{howItWorksSection.title}</h2>
          </div>
          <div className={styles.steps}>
            {howItWorksSection.steps.map((step) => (
              <article key={step.number} className={styles.stepCard}>
                <p className={styles.stepNumber}>{step.number}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span>{step.meta}</span>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="trust">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Trust & control</p>
            <h2>{trustSection.title}</h2>
          </div>
          <div className={styles.trustGrid}>
            {trustSection.cards.map((card) => (
              <article key={card.title} className={styles.trustCard}>
                <p className={styles.cardEyebrow}>
                  <span aria-hidden="true">{card.icon}</span>
                  {card.title}
                </p>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section} id="faq">
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>FAQ</p>
            <h2>Questions</h2>
          </div>
          <div className={styles.faqList}>
            {faqItems.map((item, index) => (
              <details key={item.question} className={styles.faqItem} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.finalCta} id="final-cta">
          <div>
            <p className={styles.kicker}>Get started</p>
            <h2>
              {finalCta.title.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </h2>
            <p>{finalCta.description}</p>
          </div>
          <div className={styles.finalActions}>
            <Button onClick={() => setIsModalOpen(true)}>{finalCta.button}</Button>
            <p>{finalCta.meta}</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div>
          <a className={styles.logo} href="#top">
            {siteConfig.name}
          </a>
          <p>{footerContent.operator}</p>
        </div>
        <div className={styles.footerLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href={siteConfig.contactHref}>Contact</a>
        </div>
        <p>{footerContent.legal}</p>
      </footer>

      <DownloadModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
