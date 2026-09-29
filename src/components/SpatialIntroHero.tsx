"use client";

import React from "react";
import {
  IconSparkles,
  IconArrowDown,
  IconDownload,
  IconMail,
  IconCode,
  IconCpu,
} from "./Icons";

interface SpatialIntroHeroProps {
  onScrollToCatalog: () => void;
  onOpenContact: () => void;
}

export default function SpatialIntroHero({
  onScrollToCatalog,
  onOpenContact,
}: SpatialIntroHeroProps) {
  const techPills = [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Node.js",
    "Tailwind Glass",
    "PostgreSQL",
    "Redis",
    "Three.js 3D",
  ];

  return (
    <section className="spatial-intro-hero" aria-label="Perkenalan Developer">
      {/* Efek cahaya specular halus */}
      <div className="hero-specular-light"></div>

      {/* Baris Status & Role */}
      <div className="hero-meta-row">
        <div className="status-indicator-pill">
          <span className="status-beacon">
            <span className="beacon-ping"></span>
            <span className="beacon-dot"></span>
          </span>
          <span className="status-text">Tersedia untuk Proyek &amp; Kolaborasi Baru</span>
        </div>

        <div className="role-badge-pill">
          <IconCpu size={14} color="var(--accent-cyan)" />
          <span>Full-Stack Architect &amp; UI/UX Technologist</span>
        </div>
      </div>

      {/* Headline & Identitas Utama */}
      <div className="hero-main-copy">
        <h1 className="hero-display-title">
          Merancang Antarmuka Spatial Web Berkinerja Tinggi &amp; Sistem yang Tangguh
        </h1>

        <p className="hero-bio-paragraph">
          Hai, saya <strong>Dimas Putra</strong> — menjembatani kesenjangan antara antarmuka glassmorphism sinematik
          dan arsitektur backend yang kokoh. Berspesialisasi dalam <strong>Next.js 15</strong>, <strong>React 19</strong>,
          <strong> TypeScript</strong>, dan layanan mikro terdistribusi dengan latensi sangat rendah.
        </p>
      </div>

      {/* Tombol Aksi & Tech Pills */}
      <div className="hero-interactive-row">
        <div className="hero-cta-group">
          <button
            type="button"
            className="hero-primary-btn"
            onClick={onScrollToCatalog}
          >
            <span>Jelajahi Proyek</span>
            <IconArrowDown size={15} color="currentColor" />
          </button>

          <a
            href="#resume"
            className="hero-secondary-btn"
            onClick={(e) => {
              e.preventDefault();
              alert("Mengunduh CV & Dossier Portfolio Dimas Putra...");
            }}
          >
            <IconDownload size={15} color="currentColor" />
            <span>Unduh CV</span>
          </a>

          <button
            type="button"
            className="hero-ghost-btn"
            onClick={onOpenContact}
          >
            <IconMail size={15} color="currentColor" />
            <span>Hubungi Saya</span>
          </button>
        </div>

        {/* Tech Stack Pills */}
        <div className="hero-tech-strip">
          <span className="tech-strip-label">
            <IconCode size={13} color="var(--text-muted)" />
            <span>ARSENAL INTI:</span>
          </span>
          <div className="tech-pills-list">
            {techPills.map((tech) => (
              <span key={tech} className="hero-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Metrik Performa Utama */}
      <div className="hero-metrics-grid">
        <div className="metric-cell">
          <span className="metric-number">4+</span>
          <span className="metric-label">Tahun Pengalaman</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-cell">
          <span className="metric-number">25+</span>
          <span className="metric-label">Proyek Terdeploy</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-cell">
          <span className="metric-number">99.9%</span>
          <span className="metric-label">Kualitas Kode Bersih</span>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-cell">
          <span className="metric-number">60 FPS</span>
          <span className="metric-label">UI Glass yang Mulus</span>
        </div>
      </div>
    </section>
  );
}
