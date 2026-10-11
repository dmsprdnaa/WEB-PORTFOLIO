"use client";

import React from "react";
import {
  IconSparkles,
  IconArrowDown,
  IconDownload,
  IconMail,
  IconCode,
  IconCpu,
  IconMapPin,
  IconBriefcase,
  IconZap,
  IconClock,
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
      {/* About Me + Quick Profile side by side */}
      <div className="hero-about-row">
        {/* Headline & Identitas Utama */}
        <div className="hero-main-copy">
          <h1 className="hero-display-title">
            ABOUT ME
          </h1>

          <p className="hero-bio-paragraph">
            Hai, saya <strong>Dimas Putra Perdana</strong> Saya merupakan mahasiswa semester 7 Program Studi Teknik Informatika di Universitas Buana Perjuangan Karawang yang memiliki ketertarikan pada pengembangan aplikasi berbasis web yang interaktif, responsif, dan ramah pengguna. Saya berfokus pada pengembangan frontend, khususnya dalam merancang antarmuka pengguna, menyusun komponen UI yang terstruktur, serta memastikan tampilan aplikasi optimal di berbagai perangkat.
          </p>
          <p className="hero-bio-paragraph">
            Untuk mendukung proses kerja, saya juga terbiasa memanfaatkan teknologi AI sebagai
            alat bantu dalam menganalisis kebutuhan, memecahkan masalah, serta
            mengoptimalisasi kode agar lebih efisien. Didorong oleh semangat belajar yang tinggi,
            saya terus mengasah kemampuan teknis melalui berbagai pengerjaan proyek web
            secara konsisten.
          </p>
        </div>

        {/* Quick Profile & Availability Widget */}
        <div className="hero-quick-profile-widget">
          <div className="qp-widget-header">
            <span className="qp-widget-dot"></span>
            <span className="qp-widget-title">Quick Profile</span>
          </div>
          <div className="qp-widget-grid">
            <div className="qp-item">
              <span className="qp-item-icon">
                <IconMapPin size={14} color="var(--accent-cyan)" />
              </span>
              <div className="qp-item-content">
                <span className="qp-item-label">Lokasi</span>
                <span className="qp-item-value">Indonesia (WIB / UTC+7)</span>
              </div>
            </div>
            <div className="qp-item">
              <span className="qp-item-icon">
                <IconBriefcase size={14} color="var(--accent-purple)" />
              </span>
              <div className="qp-item-content">
                <span className="qp-item-label">Mode Kerja</span>
                <span className="qp-item-value">Remote / On-site / Hybrid</span>
              </div>
            </div>
            <div className="qp-item">
              <span className="qp-item-icon">
                <IconZap size={14} color="var(--accent-orange)" />
              </span>
              <div className="qp-item-content">
                <span className="qp-item-label">Fokus Saat Ini</span>
                <span className="qp-item-value">Full-Stack Web Apps &amp; Interactive UI</span>
              </div>
            </div>
            <div className="qp-item">
              <span className="qp-item-icon">
                <IconClock size={14} color="var(--accent-green)" />
              </span>
              <div className="qp-item-content">
                <span className="qp-item-label">Waktu Respons</span>
                <span className="qp-item-value">&lt; 24 Jam</span>
              </div>
            </div>
          </div>
        </div>
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
