"use client";

import React, { useEffect } from "react";
import { ProjectItem } from "./SpatialHero";
import { IconClose, IconPlay, IconExternalLink, IconSparkles } from "./Icons";

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const caseNumber = project.caseNumber || "CASE #001";
  const architect = project.suspectArchitect || "Dimas Putra";
  const clues = project.clues || project.tags || ["Next.js 15", "TypeScript", "Tailwind CSS"];

  return (
    <div
      className="spatial-modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detail Kasus ${project.title}`}
    >
      {/* Container Kotak Modal berbentuk Folder File Kasus (modalcase.png) */}
      <div
        className="case-folder-modal-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gambar Folder Kasus sebagai Frame Background */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/modalcase.png"
          alt="Folder Kasus"
          className="folder-frame-bg"
          aria-hidden="true"
        />

        {/* Tab Label PERSIS di dalam Kotak Coklat Tua di Tab Folder */}
        <div className="folder-tab-badge">
          <span className="folder-tab-text">{caseNumber}</span>
        </div>

        {/* Tombol Aksi Langsung PERSIS di Dalam Kotak Cream Klip Kertas (Bottom-Left) */}
        <div className="folder-cream-box-actions">
          <span className="cream-box-label">QUICK ACTION</span>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cream-action-btn primary"
              title="Buka Aplikasi Live"
            >
              <IconPlay size={11} color="#ffffff" />
              <span>Buka Live</span>
            </a>
          )}

          {project.mobileUrl && (
            <a
              href={project.mobileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cream-action-btn mobile"
              title="Buka Demo Mobile App"
            >
              <span style={{ fontSize: "11px", lineHeight: 1 }}>📱</span>
              <span>Mobile App</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cream-action-btn secondary"
              title="Lihat Source Code"
            >
              <IconExternalLink size={12} color="#0f172a" />
              <span>Source Code</span>
            </a>
          )}
        </div>

        {/* Area Isi Konten di Dalam Lembaran Folder */}
        <div className="folder-content-wrapper">
          <div className="folder-inner-grid">
            {/* Kolom Kiri: Gambar Kasus Rasio 16:9 */}
            <div className="folder-left-col">
              <div className="folder-case-photo-frame">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="folder-case-img"
                />
                <span className="folder-photo-badge">DOKUMENTASI SISTEM</span>
              </div>
            </div>

            {/* Kolom Kanan: Judul, Ringkasan Kasus, dan Tech Stack */}
            <div className="folder-right-col">
              <div className="folder-header-row">
                <span className="folder-category-tag">{project.category}</span>
                <span className="folder-status-pill">
                  <IconSparkles size={11} color="#16a34a" />
                  <span>{project.status || "VERIFIED // SOLVED"}</span>
                </span>
              </div>

              {/* Baris Judul Kasus Sejejer dengan Tombol Tutup (X) */}
              <div className="folder-title-row">
                <h2 className="folder-case-title">{project.title}</h2>
                <button
                  type="button"
                  className="folder-modal-close-btn"
                  onClick={onClose}
                  title="Tutup (Esc)"
                >
                  <IconClose size={16} color="#1e293b" />
                </button>
              </div>

              <p className="folder-case-desc">{project.description}</p>

              {/* Tech Stack & Clues */}
              <div className="folder-clues-section">
                <span className="folder-clues-title">TECH STACK &amp; ARSITEKTUR:</span>
                <div className="folder-tech-tags">
                  {clues.map((tag, idx) => (
                    <span key={idx} className="folder-tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lead Architect Note */}
              <div className="folder-architect-footer">
                <span className="folder-architect-label">LEAD ARCHITECT:</span>
                <span className="folder-architect-name">{architect}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
