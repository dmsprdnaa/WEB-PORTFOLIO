"use client";

import React, { useState, useEffect } from "react";
import SpatialNavbar from "@/components/SpatialNavbar";
import SpatialIntroHero from "@/components/SpatialIntroHero";
import type { ProjectItem } from "@/components/SpatialHero";
import SpatialGrid from "@/components/SpatialGrid";
import SpatialFooter from "@/components/SpatialFooter";
import ProjectModal from "@/components/ProjectModal";
import DetectiveProfileDossier from "@/components/DetectiveProfileDossier";
import DevBannerToast from "@/components/DevBannerToast";
import "@/components/spatial.css";

export default function Home() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Inisialisasi tema dari localStorage
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("portfolio_theme") as "dark" | "light" | null;
      const initialTheme = (savedTheme === "light" || savedTheme === "dark") ? savedTheme : "dark";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
      if (document.body) document.body.setAttribute("data-theme", initialTheme);
    } catch {
      // Fallback
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    try {
      localStorage.setItem("portfolio_theme", nextTheme);
    } catch {
      // Ignore storage errors
    }
    document.documentElement.setAttribute("data-theme", nextTheme);
    if (document.body) document.body.setAttribute("data-theme", nextTheme);
  };

  const scrollToProfile = () => {
    const el = document.getElementById("developer-profile");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpenProfile = () => {
    scrollToProfile();
  };

  const scrollToCatalog = () => {
    const el = document.getElementById("projects-catalog");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    alert("Mengunduh CV & Dossier Portfolio Dimas Putra...");
  };

  return (
    <div className="portfolio-app-root" data-theme={theme}>
      {/* 1. Full-Width Detective Sticky Navbar */}
      <SpatialNavbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onOpenProfile={scrollToProfile}
        onScrollToCatalog={scrollToCatalog}
        onDownloadCV={handleDownloadCV}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* 2. Main Full-Screen Layout */}
      <main className="portfolio-main-content">
        {/* Intro Hero Section Perkenalan Developer */}
        <SpatialIntroHero
          onScrollToCatalog={scrollToCatalog}
          onOpenContact={scrollToProfile}
        />

        {/* Detective Profile Dossier Section (Layout Terbuka Meja Investigasi) */}
        <DetectiveProfileDossier
          onDownloadCV={handleDownloadCV}
          onOpenContact={handleOpenProfile}
        />

        {/* Detective Evidence Board (Papan Investigasi Kasus) */}
        <div id="projects-catalog" style={{ scrollMarginTop: "90px" }}>
          <SpatialGrid
            onSelectProject={setSelectedProject}
            searchFilter={searchQuery}
            categoryFilter={selectedCategory}
          />
        </div>

        {/* Footer Section Spatial Full-Width */}
        <SpatialFooter
          onScrollToTop={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onScrollToCatalog={scrollToCatalog}
          onOpenContact={scrollToProfile}
        />
      </main>

      {/* Modal Interaktif Proyek & Profil */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Dev Banner Toast — muncul sekali per session */}
      <DevBannerToast />
    </div>
  );
}
