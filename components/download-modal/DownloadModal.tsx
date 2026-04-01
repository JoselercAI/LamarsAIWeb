"use client";

import { useEffect } from "react";

import { siteConfig } from "@/lib/site-config";

import { Button } from "@/components/ui/Button";

import styles from "./DownloadModal.module.scss";

type DownloadModalProps = {
  open: boolean;
  onClose: () => void;
};

export function DownloadModal({ open, onClose }: DownloadModalProps) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        aria-labelledby="download-modal-title"
        aria-modal="true"
        className={styles.modal}
        role="dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          aria-label="Close download modal"
          className={styles.close}
          onClick={onClose}
          type="button"
        >
          ×
        </button>
        <p className={styles.eyebrow}>Download LAMARS</p>
        <h2 id="download-modal-title">Choose your device</h2>
        <p className={styles.copy}>
          Store links are ready to swap later. For now, both buttons point to the
          official stores.
        </p>
        <div className={styles.actions}>
          <Button href={siteConfig.storeUrls.ios} rel="noreferrer" target="_blank">
            Download on App Store
          </Button>
          <Button
            href={siteConfig.storeUrls.android}
            rel="noreferrer"
            target="_blank"
            variant="secondary"
          >
            Download on Google Play
          </Button>
        </div>
      </div>
    </div>
  );
}
