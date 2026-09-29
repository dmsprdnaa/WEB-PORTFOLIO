"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProjectItem } from "./SpatialHero";
import { IconPlay, IconPin, IconGrid, IconSearch, IconSparkles, IconCpu } from "./Icons";

interface SpatialGridProps {
  onSelectProject: (project: ProjectItem) => void;
  searchFilter: string;
  categoryFilter: string;
}

interface EvidenceCaseItem extends ProjectItem {
  caseNumber: string;
  suspectArchitect: string;
  clues: string[];
  status: "SOLVED" | "IN_PROGRESS";
  rotationDeg: number;
  sectionType: "client" | "lab";
}

// ─── Sub-komponen Papan Investigasi (reusable) ───────────────────────────────
interface BoardProps {
  cases: EvidenceCaseItem[];
  viewMode: "board" | "grid";
  isLab?: boolean;
  originId: string;
  originLabel: string;
  originName: string;
  originRole: string;
  onSelectProject: (project: ProjectItem) => void;
}

function EvidenceBoard({
  cases,
  viewMode,
  isLab = false,
  originId,
  originLabel,
  originName,
  originRole,
  onSelectProject,
}: BoardProps) {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [pinCoordsMap, setPinCoordsMap] = useState<Record<string, { x: number; y: number }>>({});

  const HOVER_OFFSET_Y = -14;

  const updateCoordinates = React.useCallback(() => {
    if (!canvasRef.current) return;
    const canvasRect = canvasRef.current.getBoundingClientRect();
    const pinElements = canvasRef.current.querySelectorAll<HTMLElement>("[data-pin-id]");
    const coords: Record<string, { x: number; y: number }> = {};
    pinElements.forEach((el) => {
      const id = el.getAttribute("data-pin-id");
      if (!id) return;
      const rect = el.getBoundingClientRect();
      const currentHoverOffset = id === activeHoverId ? HOVER_OFFSET_Y : 0;
      coords[id] = {
        x: rect.left + rect.width / 2 - canvasRect.left,
        y: rect.top + rect.height / 2 - canvasRect.top - currentHoverOffset,
      };
    });
    setPinCoordsMap(coords);
  }, [activeHoverId]);

  useEffect(() => {
    if (viewMode !== "board") return;
    updateCoordinates();
    window.addEventListener("resize", updateCoordinates);
    const t1 = setTimeout(updateCoordinates, 100);
    const t2 = setTimeout(updateCoordinates, 300);
    const t3 = setTimeout(updateCoordinates, 700);
    let observer: ResizeObserver | null = null;
    if (canvasRef.current && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(() => updateCoordinates());
      observer.observe(canvasRef.current);
    }
    return () => {
      window.removeEventListener("resize", updateCoordinates);
      if (observer) observer.disconnect();
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [viewMode, cases.length, updateCoordinates]);

  const threadConnections: [string, string][] = cases.map((c) => [originId, c.id]);

  if (viewMode === "board") {
    return (
      <div className="evidence-canvas" ref={canvasRef}>
        {/* Master Origin Pin Node */}
        <div className="master-evidence-node">
          <div
            className="master-node-pin"
            data-pin-id={originId}
            title="Pusat Investigasi"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/thumbtack.png"
              alt="Origin Pin"
              className="master-thumbtack-img"
            />
            <span className="master-pin-ping"></span>
          </div>
          <div className="master-node-tag">
            <span className="master-node-code">{originLabel}</span>
            <h3 className="master-node-name">{originName}</h3>
            <span className="master-node-role">{originRole}</span>
          </div>
        </div>

        {/* Benang SVG Dinamis */}
        <svg className="evidence-strings-svg" aria-hidden="true">
          {Object.keys(pinCoordsMap).length >= 2 &&
            threadConnections.map(([fromId, toId], index) => {
              const fromPin = pinCoordsMap[fromId];
              const toPin = pinCoordsMap[toId];
              if (!fromPin || !toPin) return null;

              const isConnectedToHovered =
                activeHoverId && (fromId === activeHoverId || toId === activeHoverId);
              const isDimmed = activeHoverId && !isConnectedToHovered;
              const targetY = toPin.y + (activeHoverId === toId ? HOVER_OFFSET_Y : 0);
              const sourceY = fromPin.y + (activeHoverId === fromId ? HOVER_OFFSET_Y : 0);
              const midX = (fromPin.x + toPin.x) / 2;
              const midY = (sourceY + targetY) / 2 + 8;
              const threadClass = [
                "evidence-thread",
                isConnectedToHovered ? "active" : "",
                isDimmed ? "dimmed" : "",
              ]
                .filter(Boolean)
                .join(" ");

              return (
                <path
                  key={`string-${index}`}
                  d={`M ${fromPin.x} ${sourceY} Q ${midX} ${midY} ${toPin.x} ${targetY}`}
                  className={threadClass}
                />
              );
            })}
        </svg>

        {/* Grid Foto Polaroid Kasus */}
        <div className="polaroids-grid-layout">
          {cases.map((item) => {
            const isHovered = activeHoverId === item.id;
            return (
              <div
                key={item.id}
                className={`polaroid-card ${isHovered ? "is-hovered" : ""}`}
                style={{ "--card-rot": `${item.rotationDeg}deg` } as React.CSSProperties}
                onMouseEnter={() => setActiveHoverId(item.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                onClick={() => onSelectProject(item)}
              >
                {/* Jarum Pentul */}
                <div className="evidence-pin" data-pin-id={item.id} title="Jarum Pentul Kasus">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/thumbtack.png" alt="Case Thumbtack Pin" className="evidence-thumbtack-img" />
                </div>

                {/* Stempel SOLVED */}
                <div className="polaroid-stamp">
                  <span>CASE SOLVED</span>
                </div>

                {/* Foto Bukti */}
                <div className="polaroid-photo-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} className="polaroid-photo-img" />
                  <div className="polaroid-photo-overlay"></div>
                  <span className="polaroid-case-tag">{item.caseNumber}</span>
                  {/* Badge tipe proyek */}
                  <span className={`polaroid-type-tag ${item.sectionType === "client" ? "client" : "lab"}`}>
                    {item.sectionType === "client" ? "✦ CLIENT" : "⚗ R&D LAB"}
                  </span>
                </div>

                {/* Caption Kasus */}
                <div className="polaroid-caption-area">
                  <div className="polaroid-title-row">
                    <h4 className="polaroid-title">{item.title}</h4>
                  </div>
                  <div className="polaroid-clues-row">
                    <span className="clues-label">PETUNJUK:</span>
                    <div className="clues-tags">
                      {item.clues.slice(0, 3).map((clue, cIdx) => (
                        <span key={cIdx} className="clue-tag">{clue}</span>
                      ))}
                    </div>
                  </div>
                  <div className="polaroid-footer-action">
                    <span className="architect-stamp">ARCHITECT: {item.suspectArchitect}</span>
                    <button
                      type="button"
                      className="inspect-case-btn"
                      onClick={(e) => { e.stopPropagation(); onSelectProject(item); }}
                    >
                      <IconPlay size={10} />
                      <span>Buka Kasus</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Clean Grid view
  return (
    <div className="cards-row-grid">
      {cases.map((item) => (
        <div
          key={item.id}
          className="showcase-card"
          onClick={() => onSelectProject(item)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={item.title} className="card-bg-img" />
          <div className="card-overlay-gradient"></div>
          <div className="card-top-row">
            <span className="card-genre-tag">{item.category}</span>
            <span className="card-genre-tag" style={{ color: isLab ? "var(--accent-cyan)" : "var(--accent-green)" }}>
              {item.caseNumber}
            </span>
          </div>
          <div className="card-bottom-info">
            <div className="card-text-group">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-synopsis">{item.description}</p>
            </div>
            <button
              type="button"
              className="card-play-btn"
              title={`Buka ${item.title}`}
              onClick={(e) => {
                e.stopPropagation();
                if (item.liveUrl) window.open(item.liveUrl, "_blank");
                else onSelectProject(item);
              }}
            >
              <IconPlay size={13} color="#000000" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Komponen Utama SpatialGrid ───────────────────────────────────────────────
export default function SpatialGrid({
  onSelectProject,
  searchFilter,
  categoryFilter,
}: SpatialGridProps) {
  const [viewMode, setViewMode] = useState<"board" | "grid">("board");

  // ── Data: Proyek Klien / Client Commissions ──
  const clientCases: EvidenceCaseItem[] = [
    {
      id: "nurse-academy-grid",
      caseNumber: "CASE #001",
      title: "NurseAcademy: LMS Klinis & Web Course",
      suspectArchitect: "Dimas Putra Perdana",
      category: "Full-Stack",
      tags: ["Web Course", "LMS Platform", "Tailwind CSS", "SKP Kemenkes"],
      clues: ["Tailwind CSS", "Next.js 15", "Kemenkes SKP"],
      status: "SOLVED",
      rotationDeg: -2.5,
      sectionType: "client",
      description:
        "Platform kursus keperawatan klinis interaktif dengan modul video prosedur, sistem ujian kuisioner studi kasus, dan penerbitan sertifikat digital resmi.",
      image: "/webcourse.png",
      liveUrl: "/demos/client/web-course/index.html",
      githubUrl: "https://github.com",
    },
    {
      id: "pt-aksara-megah-abadi",
      caseNumber: "CASE #002",
      title: "PT. Aksara Megah Abadi: ERP & Warehouse",
      suspectArchitect: "Dimas Putra Perdana",
      category: "Full-Stack",
      tags: ["Laravel 11", "Tailwind CSS", "Alpine.js", "Warehouse ERP"],
      clues: ["Laravel 11", "Warehouse System", "Machining & Fab"],
      status: "SOLVED",
      rotationDeg: 2.8,
      sectionType: "client",
      description:
        "Sistem company profile industri dan portal operasional gudang PT. Aksara Megah Abadi dengan arsitektur multi-role: Administrator dan Pegawai Lapangan.",
      image: "/webptaksara.png",
      liveUrl: "/demos/client/web-ptaksara/index.html",
      githubUrl: "https://github.com",
    },
    {
      id: "bidlytics-eproc",
      caseNumber: "CASE #003",
      title: "BidLytics Pro: E-Procurement & Tender Platform",
      suspectArchitect: "Dimas Putra Perdana",
      category: "Full-Stack",
      tags: ["Laravel 11", "Tailwind CSS", "Alpine.js", "Chart.js", "E-Procurement"],
      clues: ["Laravel 11", "Ionic", "Live Bidding Monitor & Vendor Management"],
      status: "SOLVED",
      rotationDeg: -1.8,
      sectionType: "client",
      description:
        "Sistem pengadaan barang dan jasa (e-procurement) terpadu dengan modul manajemen vendor, evaluasi tender multi-tahap, live bidding monitor, dan verifikasi dokumen legalitas.",
      image: "/webeproc.png",
      liveUrl: "/demos/client/web-eproc/login.html",
      mobileUrl: "/demos/client/web-eproc/mobile/index.html",
      githubUrl: "https://github.com",
    },
    {
      id: "kkn-kertasari-2026",
      caseNumber: "CASE #004",
      title: "KKN Kertasari 2026: Portal Pengabdian Desa",
      suspectArchitect: "Dimas Putra Perdana",
      category: "Full-Stack",
      tags: ["Next.js 15", "Tailwind CSS", "Supabase", "KKN"],
      clues: ["Next.js 15", "Supabase Storage", "UBP Karawang"],
      status: "SOLVED",
      rotationDeg: 1.5,
      sectionType: "client",
      description:
        "Website resmi KKN Desa Kertasari oleh mahasiswa UBP Karawang 2026. Menampilkan profil tim, program kerja, galeri kegiatan, dan portal edukasi UMKM digital berbasis Next.js dan Supabase.",
      image: "/webkkn.png",
      liveUrl: "https://kknkertasari.web.id/",
      githubUrl: "https://github.com",
    },
  ];

  // ── Data: Proyek Mandiri / Independent R&D ──
  const labCases: EvidenceCaseItem[] = [
    {
      id: "elemental-ui",
      caseNumber: "LAB #001",
      title: "Elemental Spatial Design System",
      suspectArchitect: "Dimas Putra",
      category: "UI / UX Design",
      tags: ["Design System", "CSS 3D", "Figma", "Accessibility"],
      clues: ["visionOS Tokens", "CSS 3D Physics", "WCAG AA"],
      status: "SOLVED",
      rotationDeg: 2.8,
      sectionType: "lab",
      description:
        "Pustaka komponen terinspirasi Apple visionOS yang komprehensif dengan fisika fluida, refraksi specular, dan standar aksesibilitas WCAG AA yang ketat.",
      image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=600&auto=format&fit=crop",
      liveUrl: "https://github.com",
    },
    {
      id: "interstellar-movie",
      caseNumber: "LAB #002",
      title: "Interstellar 3D Space Simulator",
      suspectArchitect: "Dimas Putra",
      category: "Open Source",
      tags: ["Three.js", "WebGL Shaders", "Audio API"],
      clues: ["GLSL Shaders", "Three.js", "Audio API"],
      status: "SOLVED",
      rotationDeg: -3.0,
      sectionType: "lab",
      description:
        "Simulator gravitasi planet imersif yang merender mekanika langit real-time, pergeseran Doppler relativistik, dan cakram akresi partikel.",
      image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=600&auto=format&fit=crop",
      liveUrl: "https://github.com",
    },
    {
      id: "cyberpulse-matrix",
      caseNumber: "LAB #003",
      title: "CyberPulse Cluster Telemetry",
      suspectArchitect: "Dimas Putra",
      category: "Web Apps",
      tags: ["WebSockets", "Node.js", "Docker"],
      clues: ["Kubernetes", "Node.js 22", "Docker Swarm"],
      status: "SOLVED",
      rotationDeg: 2.1,
      sectionType: "lab",
      description:
        "Telemetri pemantauan kluster langsung dan visualisasi kesehatan node untuk infrastruktur cloud berkapasitas tinggi.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
      liveUrl: "https://github.com",
    },
  ];

  const filterFn = (item: EvidenceCaseItem) => {
    const matchesSearch =
      searchFilter === "" ||
      item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.tags.some((t) => t.toLowerCase().includes(searchFilter.toLowerCase())) ||
      item.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
      item.caseNumber.toLowerCase().includes(searchFilter.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" ||
      item.category.toLowerCase() === categoryFilter.toLowerCase() ||
      item.tags.some((t) => t.toLowerCase().includes(categoryFilter.toLowerCase()));
    return matchesSearch && matchesCategory;
  };

  const filteredClient = clientCases.filter(filterFn);
  const filteredLab = labCases.filter(filterFn);

  return (
    <div className="spatial-cases-sections-wrapper">

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 01 — CLIENT COMMISSIONS // EXTERNAL OPERATIONS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="evidence-board-container">
        {/* Header */}
        <div className="evidence-header-block">
          <div className="evidence-header-left">
            <div className="evidence-badge-top">
              <span className="case-status-indicator"></span>
              <span className="case-badge-text">SECTION #01 // CLIENT COMMISSIONS</span>
            </div>
            <div className="evidence-title-row">
              <div className="magnifier-badge" title="Inspect Client Architecture">
                <IconSearch size={22} color="currentColor" />
              </div>
              <h2 className="evidence-main-title">EXTERNAL OPERATIONS</h2>
            </div>
            <p className="evidence-subtitle">
              Arsip berkas proyek resmi yang dibangun untuk kebutuhan klien nyata, sistem produksi, dan solusi bisnis komersial.
            </p>
          </div>
          {/* View Mode Switcher */}
          <div className="evidence-view-toggle">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === "board" ? "active" : ""}`}
              onClick={() => setViewMode("board")}
              title="Tampilan Papan Investigasi"
            >
              <IconPin size={14} />
              <span>Evidence Board</span>
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Tampilan Grid Rapi"
            >
              <IconGrid size={14} />
              <span>Clean Grid</span>
            </button>
          </div>
        </div>

        {filteredClient.length > 0 ? (
          <EvidenceBoard
            cases={filteredClient}
            viewMode={viewMode}
            isLab={false}
            originId="master-origin-pin-client"
            originLabel="ORIGIN // LEAD ARCHITECT"
            originName="DIMAS PUTRA"
            originRole="CLIENT SOLUTION BUILDER"
            onSelectProject={onSelectProject}
          />
        ) : (
          <p className="evidence-subtitle" style={{ textAlign: "center", padding: "40px 0" }}>
            Tidak ada kasus yang cocok dengan filter saat ini.
          </p>
        )}
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECTION 02 — INDEPENDENT R&D // LAB EXPERIMENTS
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="evidence-board-container is-lab-board">
        {/* Header */}
        <div className="evidence-header-block">
          <div className="evidence-header-left">
            <div className="evidence-badge-top">
              <span className="case-status-indicator"></span>
              <span className="case-badge-text">SECTION #02 // INDEPENDENT R&D</span>
            </div>
            <div className="evidence-title-row">
              <div className="magnifier-badge" title="Inspect Lab Experiments">
                <IconCpu size={22} color="currentColor" />
              </div>
              <h2 className="evidence-main-title">LAB EXPERIMENTS</h2>
            </div>
            <p className="evidence-subtitle">
              Eksperimen arsitektur mandiri, riset teknologi mutakhir 3D WebGL, design system, dan inovasi performa tinggi tanpa batas klien.
            </p>
          </div>
          {/* View Mode Switcher (shared state, sinkron) */}
          <div className="evidence-view-toggle">
            <button
              type="button"
              className={`view-mode-btn ${viewMode === "board" ? "active" : ""}`}
              onClick={() => setViewMode("board")}
              title="Tampilan Papan Investigasi"
            >
              <IconPin size={14} />
              <span>Evidence Board</span>
            </button>
            <button
              type="button"
              className={`view-mode-btn ${viewMode === "grid" ? "active" : ""}`}
              onClick={() => setViewMode("grid")}
              title="Tampilan Grid Rapi"
            >
              <IconGrid size={14} />
              <span>Clean Grid</span>
            </button>
          </div>
        </div>

        {filteredLab.length > 0 ? (
          <EvidenceBoard
            cases={filteredLab}
            viewMode={viewMode}
            isLab={true}
            originId="master-origin-pin-lab"
            originLabel="ORIGIN // INDEPENDENT R&D"
            originName="DIMAS PUTRA"
            originRole="SOLO RESEARCHER & BUILDER"
            onSelectProject={onSelectProject}
          />
        ) : (
          <p className="evidence-subtitle" style={{ textAlign: "center", padding: "40px 0" }}>
            Tidak ada eksperimen yang cocok dengan filter saat ini.
          </p>
        )}
      </section>

    </div>
  );
}
