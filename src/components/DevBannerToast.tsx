"use client";

import React, { useEffect, useState } from "react";

export default function DevBannerToast() {
  const [visible, setVisible] = useState(false);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Muncul hanya sekali per session browser
    const alreadyShown = sessionStorage.getItem("dev_banner_shown");
    if (!alreadyShown) {
      // Delay sedikit agar render halaman selesai duluan
      const timer = setTimeout(() => {
        setVisible(true);
        sessionStorage.setItem("dev_banner_shown", "true");
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setExiting(true);
    setTimeout(() => setVisible(false), 400);
  };

  // Auto-dismiss setelah 8 detik
  useEffect(() => {
    if (!visible) return;
    const auto = setTimeout(() => handleClose(), 8000);
    return () => clearTimeout(auto);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`dev-banner-toast ${exiting ? "dev-banner-exit" : "dev-banner-enter"}`}
      role="status"
      aria-live="polite"
    >
      {/* Glow accent bar */}
      <div className="dev-banner-glow-bar" />

      <div className="dev-banner-inner">
        {/* Icon area */}
        <div className="dev-banner-icon-wrap" aria-hidden="true">
          <span className="dev-banner-pulse-ring" />
          <span className="dev-banner-icon">⚙</span>
        </div>

        {/* Text content */}
        <div className="dev-banner-text">
          <p className="dev-banner-title">
            Portofolio Sedang Dikembangkan
          </p>
          <p className="dev-banner-subtitle">
            Beberapa fitur &amp; konten masih dalam proses penyelesaian.
            Terima kasih telah berkunjung! ✦
          </p>
        </div>

        {/* Close button */}
        <button
          className="dev-banner-close"
          onClick={handleClose}
          aria-label="Tutup notifikasi"
          title="Tutup"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      {/* Progress bar auto-dismiss */}
      <div className="dev-banner-progress" />
    </div>
  );
}
