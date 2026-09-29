"use client";

import React, { useState } from "react";
import {
  IconPlay,
  IconDownload,
  IconMoreHorizontal,
  IconChevronLeft,
  IconChevronRight,
  IconChevronDown,
  IconSparkles,
} from "./Icons";

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  caseNumber?: string;
  suspectArchitect?: string;
  clues?: string[];
  status?: "SOLVED" | "IN_PROGRESS";
}

interface SpatialHeroProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function SpatialHero({ onSelectProject }: SpatialHeroProps) {
  const [heroIndex, setHeroIndex] = useState(0);

  // Slide Utama Proyek Unggulan
  const heroSlides: ProjectItem[] = [
    {
      id: "nurse-academy",
      title: "NurseAcademy: Platform Web Course & LMS Klinis",
      category: "Full-Stack",
      tags: ["Web Course", "LMS Platform", "Tailwind CSS", "Sertifikasi SKP"],
      description: "Platform edukasi dan kursus keperawatan klinis terintegrasi dengan modul video materi 4K, ujian studi kasus adaptif, sistem streak belajar 90 hari, dan penerbitan sertifikat SKP Kemenkes resmi terverifikasi.",
      image: "/webcourse.png",
      liveUrl: "/demos/web-course/index.html",
      githubUrl: "https://github.com",
    },
    {
      id: "spiderman",
      title: "Spider-Verse Web Matrix: Pengalaman Spatial",
      category: "Full-Stack",
      tags: ["Spatial UI", "Next.js 15", "React 19", "Three.js"],
      description: "Aplikasi web spatial unggulan yang dirancang dengan arsitektur micro-frontend, shader partikel WebGL, dan glassmorphism Apple visionOS. Menghadirkan animasi 60fps dengan sinkronisasi state yang responsif.",
      image: "https://images.unsplash.com/photo-1635805737707-575885ab0820?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "interstellar",
      title: "Interstellar 3D: Simulator Luar Angkasa",
      category: "Web Apps",
      tags: ["WebGL", "Three.js", "GLSL Shaders", "Physics Engine"],
      description: "Simulasi fisika planet volumetrik interaktif dengan lensa gravitasi realistis dan suara spatial audio-reaktif yang disintesis langsung di browser.",
      image: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
    {
      id: "manifest",
      title: "Manifest: Mesin Alur Kerja Terdistribusi",
      category: "Full-Stack",
      tags: ["Go", "Node.js", "Redis", "Kafka Streams"],
      description: "Platform microservices berbasis event berkapasitas tinggi yang memproses ribuan transaksi asinkron per detik dengan latensi di bawah 5ms.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      liveUrl: "https://github.com",
      githubUrl: "https://github.com",
    },
  ];

  const currentHero = heroSlides[heroIndex];

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeroIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHeroIndex((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="spatial-upper-grid">
      {/* Showcase Sinematik Proyek Unggulan (Full Width) */}
      <div 
        className="spatial-hero-banner"
        onClick={() => onSelectProject(currentHero)}
        style={{ cursor: "pointer" }}
      >
        {/* Gambar Latar Sinematik */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={currentHero.image} 
          alt={currentHero.title} 
          className="hero-backdrop-img" 
        />

        {/* Overlay Gradien Kontras */}
        <div className="hero-gradient-overlay"></div>

        {/* Badge Proyek Unggulan */}
        <div className="hero-top-badge">
          <IconSparkles size={13} color="var(--accent-orange)" />
          <span>Proyek Unggulan</span>
        </div>

        {/* Navigasi Carousel */}
        <div className="hero-carousel-nav">
          <button 
            type="button" 
            className="carousel-btn" 
            title="Sebelumnya" 
            onClick={handlePrev}
          >
            <IconChevronLeft size={16} />
          </button>
          <button 
            type="button" 
            className="carousel-btn" 
            title="Selanjutnya" 
            onClick={handleNext}
          >
            <IconChevronRight size={16} />
          </button>
        </div>

        {/* Blok Konten Utama */}
        <div className="hero-content-block">
          <div className="hero-tags-row">
            {currentHero.tags.map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="hero-headline">{currentHero.title}</h1>

          <p className="hero-description">{currentHero.description}</p>

          <div className="hero-actions-row">
            <button 
              type="button" 
              className="hero-btn-primary"
              onClick={(e) => {
                e.stopPropagation();
                if (currentHero.liveUrl) {
                  window.open(currentHero.liveUrl, "_blank");
                } else {
                  onSelectProject(currentHero);
                }
              }}
            >
              <IconPlay size={13} color="#000000" />
              <span>Live Demo</span>
            </button>

            <a 
              href="#resume" 
              className="hero-btn-secondary"
              onClick={(e) => {
                e.stopPropagation();
                alert("Mengunduh CV & Dossier Portfolio Dimas Putra...");
              }}
            >
              <IconDownload size={14} color="#ffffff" />
              <span>Unduh CV</span>
            </a>

            <button 
              type="button" 
              className="hero-btn-icon"
              title="Detail Selengkapnya"
              onClick={(e) => {
                e.stopPropagation();
                onSelectProject(currentHero);
              }}
            >
              <IconMoreHorizontal size={15} color="#ffffff" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
