"use client";

import React, { useState } from "react";
import {
  IconSearch,
  IconDownload,
  IconMail,
  IconFingerprint,
  IconCheck,
  IconExternalLink,
  IconMaximize,
  IconRotateCcw,
  IconSparkles,
  IconCode,
  IconCpu,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandLaravel,
  IconBrandDatabase,
  IconBrandGit,
  IconLayers,
} from "./Icons";

interface DetectiveProfileDossierProps {
  onDownloadCV?: () => void;
  onOpenContact?: () => void;
}

export default function DetectiveProfileDossier({
  onDownloadCV,
  onOpenContact,
}: DetectiveProfileDossierProps) {
  const [pickedIdCard, setPickedIdCard] = useState(false);
  const [revealedSecrets, setRevealedSecrets] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<"normal" | "inspect">("normal");

  const togglePickIdCard = () => {
    setPickedIdCard((prev) => !prev);
  };

  const handleDownload = () => {
    if (onDownloadCV) {
      onDownloadCV();
    } else {
      alert("Mengunduh CV Dossier Dimas Putra...");
    }
  };

  const handleContact = () => {
    if (onOpenContact) {
      onOpenContact();
    } else {
      window.location.href = "mailto:contact@dimasputra.dev";
    }
  };

  return (
    <section
      id="developer-profile"
      className={`detective-dossier-section ${zoomLevel === "inspect" ? "is-inspected" : ""}`}
      aria-label="Berkas Profil Rahasia Developer"
    >
      {/* 1. Header Bagian Profil */}
      <div className="dossier-section-header">
        <div className="dossier-header-badge">
          <span className="dossier-status-dot"></span>
          <span className="dossier-badge-label">SUBJECT FILE #546123 // CLASSIFIED</span>
        </div>
        <div className="dossier-title-row">
          <h2 className="dossier-section-title">DOSSIER INVESTIGASI LEAD ARCHITECT</h2>
          <span className="dossier-subtitle-tag">VERIFIED ARCHIVES • CODE DNA RECORD</span>
        </div>
        <p className="dossier-section-desc">
          Dokumen rekam jejak resmi, bukti otentik arsitektur kode, dan identitas pengembang sistem.
        </p>
      </div>

      {/* 2. Container Meja Kerja & Buku Dossier Terbuka */}
      <div className="dossier-desk-frame">
        {/* Kontrol Cepat di Pojok Kanan (Mirip UI Game Investigasi) */}
        <div className="dossier-floating-controls">
          <button
            type="button"
            className="dossier-control-btn"
            title={zoomLevel === "normal" ? "Perbesar Tampilan Berkas" : "Kembalikan Ukuran"}
            onClick={() => setZoomLevel(zoomLevel === "normal" ? "inspect" : "normal")}
            aria-label="Toggle Zoom Berkas"
          >
            <IconMaximize size={16} />
          </button>
          <button
            type="button"
            className="dossier-control-btn"
            title="Reset Posisi Kartu ID"
            onClick={() => {
              setPickedIdCard(false);
              setRevealedSecrets(false);
            }}
            aria-label="Reset Berkas"
          >
            <IconRotateCcw size={16} />
          </button>
        </div>

        {/* Buku Berkas Terbuka (Spread 2 Halaman) */}
        <div className="dossier-binder-spread">
          {/* Garis Lipatan / Binder Spine Tengah */}
          <div className="dossier-spine-seam"></div>

          {/* ================================================================
              HALAMAN KIRI: ARSIP FOTO BUKTI & FORENSIK CODE DNA
             ================================================================ */}
          <div className="dossier-page dossier-page-left">
            {/* 1. Dokumen TESTIMONY Miring di Kiri Atas */}
            <div className="dossier-testimony-paper" title="Client & Peer Testimony Record">
              <div className="testimony-corner-badge">TESTIMONY</div>
              <div className="testimony-stamp">TOP SECRET</div>
              <p className="testimony-quote">
                &ldquo;Arsitek kode yang luar biasa cermat. Menghadirkan antarmuka spatial dengan latensi di bawah 20ms tanpa kompromi pada keamanan.&rdquo;
              </p>
              <span className="testimony-source">— VP of Engineering, Tech Corp</span>
            </div>

            {/* 2. Foto Arsip Hitam Putih dengan Lingkaran Spidol Merah */}
            <div className="dossier-archive-photo-frame">
              {/* Pin Jarum Pentul 3D (Tampak Miring Realistis Sesuai Gambar 2) */}
              {/* Pin Jarum Pentul Asli (Dari Gambar thumbtack.png) */}
              <div className="dossier-paper-pin" title="Evidence Pin">
                <div className="thumbtack-shadow"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/thumbtack.png"
                  alt="Red Thumbtack Pin"
                  className="thumbtack-img-element"
                />
              </div>

              <div className="archive-photo-inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bgprofile.png"
                  alt="Bukti Forensik Profil GitHub Developer Dimas Putra"
                  className="archive-photo-img"
                />

                {/* Lingkaran Spidol Merah (Red Ink Target Marker pada foto profil avatar GitHub) */}
                <div className="red-marker-circle" title="Subject Avatar Identified">
                  <span className="marker-dot"></span>
                </div>

                {/* Tulisan Tangan Tanggal Arsip Merah */}
                <div className="red-marker-date">RECORD // ARCHIVED</div>
              </div>
              <div className="archive-photo-caption">
                <span className="caption-tag">EXHIBIT #A</span>
                <span className="caption-text">GitHub Operational Record &amp; Repository Dossier</span>
              </div>
            </div>

            {/* 3. Lembar Forensik Senjata Teknis (Technical Arsenal // Core Stack) */}
            <div className="dossier-fingerprint-sheet">
              <div className="fingerprint-sheet-header">
                <div className="fingerprint-title-group">
                  <IconCpu size={16} color="var(--accent-cyan)" />
                  <span className="fingerprint-title">TECHNICAL ARSENAL // CORE STACK</span>
                </div>
                <span className="fingerprint-case-id">RECORD #8892-CL • VERIFIED</span>
              </div>

              {/* Grid 10 Slot Teknologi & Alat Operasional */}
              <div className="fingerprint-grid-cards">
                {[
                  { label: "1. Next.js 15", icon: IconBrandNextjs, status: "ADVANCED", color: "var(--text-primary)" },
                  { label: "2. React 19", icon: IconBrandReact, status: "EXPERT", color: "#0ea5e9" },
                  { label: "3. TypeScript", icon: IconBrandTypescript, status: "STRICT", color: "#3178c6" },
                  { label: "4. Tailwind", icon: IconBrandTailwind, status: "MODERN", color: "#06b6d4" },
                  { label: "5. Node.js", icon: IconBrandNodejs, status: "BACKEND", color: "#22c55e" },
                  { label: "6. Laravel", icon: IconBrandLaravel, status: "FRAMEWORK", color: "#ff2d20" },
                  { label: "7. SQL / Data", icon: IconBrandDatabase, status: "OPTIMIZED", color: "#336791" },
                  { label: "8. Git Ops", icon: IconBrandGit, status: "CI/CD", color: "#f05032" },
                  { label: "9. Spatial UI", icon: IconSparkles, status: "CREATIVE", color: "#8b5cf6" },
                  { label: "10. Clean Arch", icon: IconLayers, status: "MODULAR", color: "#10b981" },
                ].map((item, idx) => {
                  const TechIcon = item.icon;
                  return (
                    <div key={idx} className="fingerprint-cell" title={`${item.label} — ${item.status}`}>
                      <span className="fingerprint-cell-label">{item.label}</span>
                      <div className="fingerprint-ink-icon" style={{ color: item.color }}>
                        <TechIcon size={22} color="currentColor" />
                      </div>
                      <span className="fingerprint-cell-status">
                        <IconCheck size={9} color="#16a34a" /> {item.status}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================================================================
              HALAMAN KANAN: LEMBAR ONBOARDING MEMORANDUM & AGENT ID CARD
             ================================================================ */}
          <div className="dossier-page dossier-page-right">
            {/* Header Memo Dokumen */}
            <div className="onboarding-memo-header">
              <div className="memo-title-block">
                <span className="memo-classified-tag">ONBOARDING DOSSIER</span>
                <span className="memo-reagent-id">REAGENT #281204</span>
              </div>
              <div className="memo-date-stamp">SEPTEMBER 2026 // CONFIDENTIAL</div>
            </div>

            {/* Baris Atas: Mugshot Foto & Pick-Up ID Card Interaktif */}
            <div className="dossier-identity-row">
              {/* Mugshot Pas Foto dengan Klip Logam */}
              <div className="dossier-mugshot-card">
                <div className="mugshot-metal-clip"></div>
                <div className="mugshot-card-header">
                  <span className="mugshot-tag">#01</span>
                </div>
                <div className="mugshot-img-wrapper">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/fotoprofile.jpeg"
                    alt="Foto Profil Dimas Putra Perdana"
                    className="mugshot-img"
                  />
                </div>
                <span className="mugshot-role-stamp">SUBJECT IDENTIFIED</span>
              </div>

              {/* Interactive Pick up ID Card */}
              <div
                className={`dossier-agent-id-card ${pickedIdCard ? "is-picked" : ""}`}
                onClick={togglePickIdCard}
                title="Klik untuk mengangkat / menginspeksi Kartu Identitas Agen"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    togglePickIdCard();
                  }
                }}
                aria-pressed={pickedIdCard}
              >
                <div className="id-card-top-tape">
                  <span>SPECIAL OPERATIVE BADGE</span>
                  <span className="id-barcode-micro">||||| | |||| |||</span>
                </div>

                <div className="id-card-body">
                  <div className="id-card-avatar-outer">
                    <div className="id-card-avatar-wrap">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/fotoprofile.jpeg"
                        alt="DP Avatar"
                        className="id-card-avatar-img"
                      />
                    </div>
                    <span className="id-active-beacon"></span>
                  </div>

                  <div className="id-card-fields">
                    <div className="id-field-row">
                      <span className="id-key">NAME:</span>
                      <span className="id-val">DIMAS PUTRA PERDANA</span>
                    </div>
                    <div className="id-field-row">
                      <span className="id-key">ROLE:</span>
                      <span className="id-val highlight">LEAD SYSTEM ARCHITECT</span>
                    </div>
                    <div className="id-field-row">
                      <span className="id-key">STATUS:</span>
                      <span className="id-val status-live">ACTIVE • AVAILABLE</span>
                    </div>
                    <div className="id-field-row">
                      <span className="id-key">EXP:</span>
                      <span className="id-val">4+ YEARS CONTINUOUS OPS</span>
                    </div>
                  </div>

                  <div className="id-card-thumb-stamp">
                    <IconFingerprint size={28} color="#dc2626" />
                  </div>
                </div>

                {/* Tombol Interaktif 'Pick up ID card' persis seperti di gambar referensi */}
                <div className="pick-id-card-prompt">
                  <span className="pick-hand-icon">👆</span>
                  <span className="pick-card-text">
                    {pickedIdCard ? "Put down ID card" : "Pick up ID card"}
                  </span>
                </div>
              </div>
            </div>

            {/* Isi Memo Ketikan Monospace & Bar Sensor Hitam Interaktif */}
            <div className="dossier-memorandum-body">
              <div className="memo-rule-header">
                <span className="memo-corp-name">MEMORANDUM FOR CLIENTS &amp; COLLABORATORS</span>
                <span className="memo-notes-subject">NOTES: ARCHITECTURE — SPEED — CRAFTSMANSHIP</span>
              </div>

              <p className="typewriter-paragraph">
                Rekam investigasi mengonfirmasi bahwa <strong>Dimas Putra Perdana</strong> telah menyelesaikan berbagai tantangan rekayasa perangkat lunak tingkat lanjut. Mengkhususkan diri dalam{" "}
                <span
                  className={`redacted-bar ${revealedSecrets ? "revealed" : ""}`}
                  onClick={() => setRevealedSecrets(!revealedSecrets)}
                  title="Klik untuk membuka sensor rahasia"
                >
                  arsitektur Next.js 15 &amp; React 19 spatial
                </span>{" "}
                dengan optimasi performa tinggi, sistem perpesanan waktu nyata, serta{" "}
                <span
                  className={`redacted-bar ${revealedSecrets ? "revealed" : ""}`}
                  onClick={() => setRevealedSecrets(!revealedSecrets)}
                  title="Klik untuk membuka sensor rahasia"
                >
                  desain UI sinematik zero-downtime
                </span>
                .
              </p>

              <p className="typewriter-paragraph sub-paragraph">
                Setiap baris kode yang ditulis telah melalui inspeksi ketat: arsitektur modular terdistribusi, pengujian keamanan tanpa kompromi, dan pengalaman pengguna interaktif berkecepatan 60 FPS.
              </p>
            </div>

            {/* Tombol Aksi Dossier */}
            <div className="dossier-actions-row">
              <button
                type="button"
                className="dossier-primary-action-btn"
                onClick={handleDownload}
              >
                <IconDownload size={15} color="currentColor" />
                <span>Unduh Dossier Lengkap (CV)</span>
              </button>

              <button
                type="button"
                className="dossier-secondary-action-btn"
                onClick={handleContact}
              >
                <IconMail size={15} color="currentColor" />
                <span>Hubungi Lead Architect</span>
              </button>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="dossier-link-action-btn"
                title="Buka Repositori GitHub Bukti Kode"
              >
                <IconExternalLink size={14} color="currentColor" />
                <span>Bukti GitHub</span>
              </a>
            </div>

            {/* Bagian Bawah: Tanda Tangan Resmi & Stempel Merah */}
            <div className="dossier-footer-sign-row">
              <div className="dossier-seal-badge">
                <span className="seal-ring"></span>
                <span className="seal-text">VERIFIED // CLASSIFIED ARCHITECT</span>
              </div>

              <div className="dossier-signature-block">
                <span className="sign-title">Lead Architect Signature</span>
                <div className="handwritten-signature">Dimas Putra Perdana</div>
              </div>

              {/* Stempel Merah CASE SOLVED */}
              <div className="dossier-red-stamp">CASE SOLVED</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
