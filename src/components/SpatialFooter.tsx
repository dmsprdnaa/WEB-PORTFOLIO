"use client";

import React, { useState, useEffect } from "react";
import {
  IconCpu,
  IconSparkles,
  IconMail,
  IconArrowUp,
  IconGithub,
  IconLinkedin,
  IconTwitter,
  IconFileText,
  IconFingerprint,
  IconLock,
  IconTerminal,
  IconCheck,
  IconCode,
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
  const [jktTime, setJktTime] = useState("02:00:00 WIB");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        });
        setJktTime(`${formatter.format(now)} WIB`);
      } catch {
        setJktTime("02:00:00 WIB");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleBackToTop = () => {
    if (onScrollToTop) {
      onScrollToTop();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    alert("Mengunduh CV & Dossier Portfolio Dimas Putra...");
  };

  return (
    <footer className="spatial-footer dossier-terminal-footer" aria-label="Footer Dossier Investigasi">
      <div className="dossier-footer-content-wrap">
        {/* 1. Caution / Classified Tape Ribbon Header */}
        <div className="dossier-caution-ribbon">
          <div className="caution-ribbon-track">
            <span className="caution-ribbon-text">
              /// RESTRICTED ARCHIVES /// AUTHORIZED CLEARANCE LEVEL: OMNI /// DOSSIER RECORD #2026-DPP /// SECURE TRANSMISSION CHANNEL /// DISPATCH TERMINAL /// VERIFIED CODE DNA /// CLASSIFIED CASE CONCLUDED ///
            </span>
          </div>
        </div>

      {/* 2. Classified Dispatch Terminal Banner (Top CTA) */}
      <div className="footer-dispatch-card">
        <div className="dispatch-header-bar">
          <div className="dispatch-tag-group">
            <span className="dispatch-status-beacon"></span>
            <span className="dispatch-sec-code">FREQUENCY: 142.85 MHz // ENCRYPTED</span>
            <span className="dispatch-doc-id">DOC #DPP-DISPATCH-99</span>
          </div>
          <div className="dispatch-stamp-badge">DECLASSIFIED</div>
        </div>

        <div className="dispatch-content-grid">
          <div className="dispatch-text-col">
            <div className="dispatch-stamp-watermark" aria-hidden="true">
              <IconFingerprint size={120} />
            </div>
            <span className="dispatch-pretitle">OPERATION: SYSTEM ARCHITECTURE &amp; FULLSTACK ENGINEERING</span>
            <h2 className="dispatch-main-title">
              Siap Membuka Kasus Rekayasa Perangkat Lunak Baru?
            </h2>
            <p className="dispatch-description">
              Membangun arsitektur data skalabilitas tinggi, antarmuka spatial interaktif,
              dan ekosistem aplikasi web modern dengan standar keandalan enterprise.
            </p>
          </div>

          <div className="dispatch-actions-col">
            <button
              type="button"
              className="dispatch-primary-btn"
              onClick={onOpenContact}
            >
              <span className="btn-beacon-dot"></span>
              <IconMail size={16} />
              <span>Inisiasi Transmisi (Hubungi)</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="dispatch-secondary-btn"
            >
              <IconGithub size={16} />
              <span>Repositori Kode Operatif</span>
            </a>

            <div className="dispatch-meta-ticker">
              <span className="ticker-label">STATUS:</span>
              <span className="ticker-val">OPEN TO COMMISSIONS &amp; TECH ROLES</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Dossier 4-Column Terminal Desk */}
      <div className="footer-dossier-grid">
        {/* Kolom 1: Profil Operatif & Telemetri Sistem */}
        <div className="dossier-grid-col dossier-col-agent">
          <div className="col-dossier-header">
            <span className="col-index">01</span>
            <span className="col-label">AGENT FILE // IDENTITY</span>
            <span className="col-barcode-nano">||||| | |||</span>
          </div>

          <div className="agent-identity-box">
            <div className="agent-avatar-outer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/fotoprofile.jpeg"
                alt="Dimas Putra"
                className="agent-footer-avatar"
              />
              <span className="agent-live-pip"></span>
            </div>
            <div className="agent-title-wrap">
              <h3 className="agent-name">DIMAS PUTRA PERDANA</h3>
              <span className="agent-role-badge">LEAD SYSTEM ARCHITECT</span>
            </div>
          </div>

          <p className="agent-dossier-bio">
            Rekam jejak spesialisasi rekayasa antarmuka spatial, optimasi latensi,
            dan perancangan arsitektur modular yang presisi.
          </p>

          {/* Telemetri Terminal Monitor */}
          <div className="footer-telemetry-monitor">
            <div className="telemetry-bar-top">
              <div className="terminal-dots">
                <span className="tdot tdot-red"></span>
                <span className="tdot tdot-yellow"></span>
                <span className="tdot tdot-green"></span>
              </div>
              <span className="telemetry-title">TERMINAL MONITOR</span>
            </div>
            <div className="telemetry-body">
              <div className="telemetry-row">
                <span className="tkey">SYS.CORE</span>
                <span className="tval tval-green">● ONLINE (STABLE)</span>
              </div>
              <div className="telemetry-row">
                <span className="tkey">LOCATION</span>
                <span className="tval">JAKARTA, ID</span>
              </div>
              <div className="telemetry-row">
                <span className="tkey">LOCAL.TIME</span>
                <span className="tval tval-cyan">{jktTime}</span>
              </div>
              <div className="telemetry-row">
                <span className="tkey">LATENCY</span>
                <span className="tval">12ms // HTTP/3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom 2: Direktori Kasus / Sitemaps */}
        <div className="dossier-grid-col">
          <div className="col-dossier-header">
            <span className="col-index">02</span>
            <span className="col-label">CASE DIRECTORY // SITEMAP</span>
            <span className="col-barcode-nano">|||| |||||</span>
          </div>

          <ul className="dossier-nav-menu">
            <li>
              <button
                type="button"
                className="dossier-nav-item"
                onClick={handleBackToTop}
              >
                <span className="nav-prefix">// 01</span>
                <span className="nav-text">Command Surface</span>
                <span className="nav-tag">Top</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dossier-nav-item"
                onClick={onScrollToCatalog}
              >
                <span className="nav-prefix">// 02</span>
                <span className="nav-text">Case Archives</span>
                <span className="nav-tag">Projects</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dossier-nav-item"
                onClick={onScrollToCatalog}
              >
                <span className="nav-prefix">// 03</span>
                <span className="nav-text">R&amp;D Experiments</span>
                <span className="nav-tag">Lab</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dossier-nav-item"
                onClick={onOpenContact}
              >
                <span className="nav-prefix">// 04</span>
                <span className="nav-text">Subject Dossier</span>
                <span className="nav-tag">Profile</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className="dossier-nav-item"
                onClick={handleDownloadCV}
              >
                <span className="nav-prefix">// 05</span>
                <span className="nav-text">Curriculum Vitae</span>
                <span className="nav-badge-pdf">PDF ↗</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Peralatan Forensik & Tech Arsenal */}
        <div className="dossier-grid-col">
          <div className="col-dossier-header">
            <span className="col-index">03</span>
            <span className="col-label">OPERATIVE ARSENAL // STACK</span>
            <span className="col-barcode-nano">|||||| |||</span>
          </div>

          <div className="dossier-tech-arsenal">
            {[
              { name: "Next.js 15", code: "PROD" },
              { name: "React 19", code: "CORE" },
              { name: "TypeScript", code: "STRICT" },
              { name: "Tailwind CSS", code: "STYLE" },
              { name: "PostgreSQL", code: "DATA" },
              { name: "Node.js", code: "RUNTIME" },
              { name: "Three.js 3D", code: "SPATIAL" },
              { name: "Docker", code: "OPS" },
              { name: "Laravel", code: "BACKEND" },
              { name: "Redis", code: "CACHE" },
              { name: "Clean Arch", code: "MODULAR" },
              { name: "Git Ops", code: "CI/CD" },
            ].map((tech, idx) => (
              <div key={idx} className="arsenal-chip">
                <span className="chip-code">{tech.code}</span>
                <span className="chip-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom 4: Saluran Komunikasi Terenkripsi */}
        <div className="dossier-grid-col">
          <div className="col-dossier-header">
            <span className="col-index">04</span>
            <span className="col-label">SECURE FREQUENCIES // COMMS</span>
            <span className="col-barcode-nano">|||| ||||||</span>
          </div>

          <p className="comms-intro-text">
            Terbuka untuk investigasi proyek baru, konsultasi arsitektur sistem, dan kemitraan teknologi.
          </p>

          <div className="comms-channel-list">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="comms-channel-card"
              title="Kunjungi Profil GitHub Dimas Putra"
            >
              <div className="channel-icon-wrap">
                <IconGithub size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-title">GitHub Archives</span>
                <span className="channel-freq">github.com/dmsprdnaa</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="comms-channel-card"
              title="Koneksi di LinkedIn"
            >
              <div className="channel-icon-wrap">
                <IconLinkedin size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-title">LinkedIn Network</span>
                <span className="channel-freq">Professional Record</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="comms-channel-card"
              title="Ikuti di X / Twitter"
            >
              <div className="channel-icon-wrap">
                <IconTwitter size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-title">Twitter / X Telemetry</span>
                <span className="channel-freq">@dimasputra</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>

            <a
              href="mailto:contact@dimasputra.dev"
              className="comms-channel-card comms-channel-email"
              title="Kirim Pesan Langsung"
              onClick={(e) => {
                e.preventDefault();
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  window.location.href = "mailto:contact@dimasputra.dev";
                }
              }}
            >
              <div className="channel-icon-wrap email-wrap">
                <IconMail size={18} />
              </div>
              <div className="channel-meta">
                <span className="channel-title">Direct Mail Uplink</span>
                <span className="channel-freq">contact@dimasputra.dev</span>
              </div>
              <span className="channel-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
      </div>

      {/* 4. Bottom Legal, Security Seal & Return To Surface Bar */}
      <div className="dossier-footer-bottom">
        <div className="dossier-bottom-bar-inner">
          <div className="bottom-barcode-block">
            <div className="barcode-graphic">||||| |||| |||||| ||| |||||||| ||||| |||||||</div>
            <div className="barcode-caption">SERIAL #DPP-2026-ARCHIVE-SEC09 // VERIFIED IDENTITY</div>
          </div>

          <div className="bottom-stamp-badge">
            <span className="stamp-red-ring">CONFIDENTIAL</span>
            <span className="stamp-sub">ARCHIVE SIGN-OFF</span>
          </div>

          <div className="bottom-copyright-wrap">
            <span className="dossier-copyright">
              &copy; {currentYear} DIMAS PUTRA PERDANA. ALL RIGHTS RESERVED.
            </span>
            <span className="dossier-tagline">
              SPATIAL WEB ARCHITECTURE &bull; NEXT.JS 15 &bull; DECLASSIFIED CASE RECORD
            </span>
          </div>

          <button
            type="button"
            className="dossier-back-to-top"
            onClick={handleBackToTop}
            aria-label="Kembali ke atas berkas"
          >
            <span className="back-top-icon">▲</span>
            <span className="back-top-label">RETURN TO SURFACE // TOP</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
