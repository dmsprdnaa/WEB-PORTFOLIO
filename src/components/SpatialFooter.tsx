"use client";

import React from "react";
import {
  IconCpu,
  IconSparkles,
  IconMail,
  IconArrowUp,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconGlobe,
  IconFileText,
  IconFolder,
  IconMessageSquare,
} from "./Icons";

interface SpatialFooterProps {
  onScrollToTop?: () => void;
  onScrollToCatalog?: () => void;
  onOpenContact?: () => void;
}

export default function SpatialFooter({
  onScrollToTop,
  onScrollToCatalog,
  onOpenContact,
}: SpatialFooterProps) {
  const currentYear = new Date().getFullYear();

  const handleBackToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="spatial-footer" aria-label="Footer Portfolio">
      {/* 1. Glass CTA Banner Card */}
      <div className="footer-cta-card">
        <div className="footer-cta-specular"></div>
        <div className="footer-cta-content">
          <div className="footer-cta-badge">
            <span className="footer-status-ping"></span>
            <span>SIAP BERKOLABORASI</span>
          </div>
          <h2 className="footer-cta-title">
            Punya ide proyek atau kebutuhan arsitektur sistem berikutnya?
          </h2>
          <p className="footer-cta-desc">
            Mari berdiskusi tentang bagaimana kita bisa membangun antarmuka web spatial berkinerja tinggi,
            skalabilitas backend yang kokoh, dan pengalaman digital yang luar biasa.
          </p>
        </div>

        <div className="footer-cta-actions">
          <button
            type="button"
            className="footer-primary-btn"
            onClick={onOpenContact}
          >
            <IconMail size={16} color="currentColor" />
            <span>Hubungi Saya</span>
          </button>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-secondary-btn"
          >
            <IconGithub size={16} color="currentColor" />
            <span>GitHub Profil</span>
          </a>
        </div>
      </div>

      {/* 2. Main Footer Multi-column Grid */}
      <div className="footer-grid">
        {/* Kolom 1: Profil Developer & Status Sistem */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand-header">
            <div className="footer-brand-logo">
              <IconCpu size={18} color="var(--accent-cyan)" />
            </div>
            <div>
              <span className="footer-brand-name">DIMAS PUTRA</span>
              <span className="footer-brand-tag">Spatial Web Architect</span>
            </div>
          </div>
          <p className="footer-brand-bio">
            Membangun antarmuka spatial glassmorphic sinematik dengan performa tinggi
            dan arsitektur rekayasa perangkat lunak modern yang andal.
          </p>
          <div className="footer-system-status">
            <span className="system-dot-live"></span>
            <span className="system-text">Status Sistem: Online • Latensi 14ms • ID-JKT</span>
          </div>
        </div>

        {/* Kolom 2: Menu Navigasi Cepat (English Menu Names) */}
        <div className="footer-col">
          <h3 className="footer-col-title">Navigation</h3>
          <ul className="footer-nav-list">
            <li>
              <button
                type="button"
                className="footer-nav-link"
                onClick={handleBackToTop}
              >
                Home
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-link"
                onClick={onScrollToCatalog}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-link"
                onClick={onScrollToCatalog}
              >
                Experiments
              </button>
            </li>
            <li>
              <button
                type="button"
                className="footer-nav-link"
                onClick={onOpenContact}
              >
                Profile &amp; About
              </button>
            </li>
            <li>
              <a
                href="#resume"
                className="footer-nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Mengunduh CV & Dossier Portfolio Dimas Putra...");
                }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Arsenal Teknologi */}
        <div className="footer-col">
          <h3 className="footer-col-title">Tech Arsenal</h3>
          <div className="footer-tech-cloud">
            <span className="footer-tech-tag">Next.js 15</span>
            <span className="footer-tech-tag">React 19</span>
            <span className="footer-tech-tag">TypeScript</span>
            <span className="footer-tech-tag">Tailwind Glass</span>
            <span className="footer-tech-tag">PostgreSQL</span>
            <span className="footer-tech-tag">Node.js</span>
            <span className="footer-tech-tag">Three.js 3D</span>
            <span className="footer-tech-tag">Docker</span>
          </div>
        </div>

        {/* Kolom 4: Jaringan & Tautan Eksternal */}
        <div className="footer-col">
          <h3 className="footer-col-title">Connect &amp; Social</h3>
          <p className="footer-connect-text">
            Terbuka untuk diskusi teknologi, konsultasi sistem, dan kemitraan proyek.
          </p>
          <div className="footer-social-row">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              aria-label="GitHub"
              title="GitHub"
            >
              <IconGithub size={16} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <IconLinkedin size={16} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-pill"
              aria-label="Twitter / X"
              title="Twitter / X"
            >
              <IconTwitter size={16} />
            </a>
            <a
              href="mailto:contact@dimasputra.dev"
              className="footer-social-pill"
              aria-label="Email"
              title="Kirim Email"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  alert("Email: dimasputraperdana@example.com");
                }
              }}
            >
              <IconMail size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* 3. Bottom Legal & Back to Top Bar */}
      <div className="footer-bottom-bar">
        <div className="footer-copyright-wrap">
          <span className="footer-copyright">
            &copy; {currentYear} Dimas Putra Perdana. Seluruh hak cipta dilindungi.
          </span>
          <span className="footer-built-with">
            Dirancang dengan Antarmuka Spatial Glass &amp; Next.js 15
          </span>
        </div>

        <button
          type="button"
          className="footer-back-to-top-btn"
          onClick={handleBackToTop}
          aria-label="Kembali ke atas"
        >
          <span>Kembali ke Atas</span>
          <IconArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
