"use client";

import React, { useState, useEffect } from "react";
import {
  IconSearch,
  IconSun,
  IconMoon,
  IconDownload,
  IconChevronDown,
  IconSparkles,
} from "./Icons";

interface SpatialNavbarProps {
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  onOpenProfile: () => void;
  onScrollToCatalog?: () => void;
  onDownloadCV?: () => void;
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}

export default function SpatialNavbar({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  onOpenProfile,
  onScrollToCatalog,
  onDownloadCV,
  theme = "dark",
  onToggleTheme,
}: SpatialNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "web-apps", label: "Web Apps" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "ui-ux", label: "UI / UX" },
    { id: "opensource", label: "Open Source" },
  ];

  return (
    <header className={`full-screen-navbar ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="navbar-container">
        {/* 1. Left Brand / Investigator Identity */}
        <div
          className="navbar-brand-dossier"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Dimas Putra // Lead Architect & Problem Solver"
        >
          <div className="brand-pin-marker">
            <span className="brand-pin-dot"></span>
          </div>
          <div className="brand-meta-info">
            <div className="brand-title-line">
              <span className="brand-agent-name">DIMAS PUTRA</span>
              <span className="brand-confidential-tag">CONFIDENTIAL</span>
            </div>
            <div className="brand-status-row">
              <span className="status-ping-beacon">
                <span className="ping-ring"></span>
                <span className="ping-core"></span>
              </span>
              <span className="brand-role-sub">LEAD ARCHITECT // AVAILABLE</span>
            </div>
          </div>
        </div>

        {/* 2. Center: Category Filter Pills */}
        <div className="navbar-center-group">
          <nav className="navbar-category-tabs" aria-label="Kategori Kasus">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`category-tab-btn ${selectedCategory === cat.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  if (onScrollToCatalog) onScrollToCatalog();
                }}
              >
                {selectedCategory === cat.id && (
                  <span className="tab-active-dot"></span>
                )}
                <span>{cat.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* 3. Right: Search Pill, Quick Actions, Theme Toggle, Profile */}
        <div className="navbar-right-actions">
          {/* Search Pill Input */}
          <div className="navbar-search-pill">
            <span className="navbar-search-icon">
              <IconSearch size={14} color="var(--text-muted)" />
            </span>
            <input
              type="text"
              placeholder="Cari berkas kasus..."
              className="navbar-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="search-clear-btn"
                onClick={() => setSearchQuery("")}
                title="Hapus pencarian"
              >
                &times;
              </button>
            )}
          </div>

          {/* Tombol Unduh CV Dossier */}
          {onDownloadCV && (
            <button
              type="button"
              className="navbar-cv-btn"
              onClick={onDownloadCV}
              title="Unduh CV Dossier Dimas Putra"
              aria-label="Unduh CV Dossier Dimas Putra"
            >
              <IconDownload size={14} />
              <span className="cv-btn-text">Dossier CV</span>
            </button>
          )}

          {/* Theme Mode Toggle Button */}
          {onToggleTheme && (
            <button
              type="button"
              className="navbar-theme-btn"
              onClick={onToggleTheme}
              title={
                theme === "dark"
                  ? "Ganti ke Light Mode (Mode Terang)"
                  : "Ganti ke Dark Mode (Mode Gelap)"
              }
              aria-label={`Ganti ke ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
            >
              {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
            </button>
          )}

          {/* Profile Pill */}
          <div
            className="navbar-profile-pill"
            onClick={onOpenProfile}
            title="Buka Profil Lengkap Lead Architect"
            role="button"
            tabIndex={0}
            aria-label="Buka Profil Lengkap Lead Architect"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onOpenProfile();
              }
            }}
          >
            <div className="navbar-profile-avatar">
              DP
              <span className="avatar-online-dot"></span>
            </div>
            <div className="navbar-profile-info">
              <span className="navbar-profile-name">Dimas Putra</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-bar Mobile: Search, Categories & Theme Toggle on Mobile devices */}
      <div className="navbar-mobile-subbar">
        <div className="mobile-search-row">
          <div className="mobile-search-wrapper">
            <IconSearch size={14} color="var(--text-muted)" />
            <input
              type="text"
              placeholder="Cari kasus, teknologi, keahlian..."
              className="mobile-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {onToggleTheme && (
            <button
              type="button"
              className="navbar-theme-btn mobile-theme-toggle"
              onClick={onToggleTheme}
              title={
                theme === "dark"
                  ? "Ganti ke Light Mode (Mode Terang)"
                  : "Ganti ke Dark Mode (Mode Gelap)"
              }
              aria-label={`Ganti ke ${theme === "dark" ? "Light Mode" : "Dark Mode"}`}
            >
              {theme === "dark" ? <IconSun size={16} /> : <IconMoon size={16} />}
            </button>
          )}
        </div>
        <div className="mobile-categories-scroll">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`mobile-cat-pill ${selectedCategory === cat.id ? "active" : ""}`}
              onClick={() => {
                setSelectedCategory(cat.id);
                if (onScrollToCatalog) onScrollToCatalog();
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
