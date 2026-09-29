"use client";

import React, { useState, useEffect } from "react";
import { playComicSound, toggleSound, isSoundEnabled } from "@/utils/comicAudio";
import "./Navbar.css";

export default function Navbar() {
  const [sfxOn, setSfxOn] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("origin");
  const [activeSfxBadge, setActiveSfxBadge] = useState<string | null>(null);

  useEffect(() => {
    setSfxOn(isSoundEnabled());
  }, []);

  const handleSoundToggle = () => {
    const newState = toggleSound();
    setSfxOn(newState);
    if (newState) {
      playComicSound("pop");
    }
  };

  const handleNavClick = (id: string, sound: 'pow' | 'whoosh' | 'pop' | 'laser' | 'click' = 'whoosh', sfxWord: string = "SWOOSH!") => {
    playComicSound(sound);
    setActiveTab(id);
    setActiveSfxBadge(sfxWord);
    setTimeout(() => setActiveSfxBadge(null), 800);
    setMobileMenuOpen(false);

    const targetEl = document.getElementById(id);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="comic-navbar-container">
      {/* 1. Vintage Comic Issue Masthead Top Bar */}
      <div className="comic-masthead-tape">
        <div className="masthead-left">
          {/* Comic Code Authority Badge */}
          <div className="comic-code-badge" title="Certified 100% Clean Code">
            <span className="code-line-1">APPROVED</span>
            <span className="code-line-2">BY THE</span>
            <span className="code-line-3">CLEAN CODE</span>
            <span className="code-line-4">AUTHORITY</span>
          </div>

          <div className="comic-issue-meta">
            <span className="issue-number">VOL. 01 // ISSUE #2026</span>
            <span className="issue-date">SPECIAL COLLECTOR&apos;S EDITION</span>
          </div>
        </div>

        {/* Ticker banner */}
        <div className="comic-marquee-alert">
          <span className="marquee-content">
            ⚡ BREAKING DISPATCH: HERO AVAILABLE FOR FULLSTACK MISSIONS &amp; EPIC PROJECTS! ⚡
          </span>
        </div>

        <div className="masthead-right">
          {/* SFX Audio Toggle Button */}
          <button 
            type="button"
            className="comic-sfx-toggle" 
            onClick={handleSoundToggle}
            title={sfxOn ? "Disable Comic Sound FX" : "Enable Comic Sound FX"}
          >
            <span className="sfx-icon">{sfxOn ? "🔊" : "🔇"}</span>
            <span className="sfx-text">SFX: {sfxOn ? "ON" : "MUTED"}</span>
          </button>
        </div>
      </div>

      {/* 2. Main Action Comic Navbar Bar */}
      <nav className="comic-main-nav">
        {/* Comic Tape Accents */}
        <div className="comic-tape tape-top-left"></div>
        <div className="comic-tape tape-top-right"></div>

        {/* Logo / Title Block */}
        <a 
          href="#home" 
          className="comic-logo-group"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("home", "pow", "KAPOW!");
          }}
          onMouseEnter={() => playComicSound("pop")}
        >
          <div className="logo-badge-container">
            <span className="logo-prefix">DEV.</span>
            <span className="logo-title">CHRONICLES</span>
            {/* Pop-art starburst floating label */}
            <span className="logo-starburst">POW!</span>
          </div>
          <span className="logo-subtitle">THE HEROIC PORTFOLIO EDITION</span>
        </a>

        {/* Floating temporary onomatopoeia popup */}
        {activeSfxBadge && (
          <div className="floating-sfx-popup">
            {activeSfxBadge}
          </div>
        )}

        {/* Desktop Comic Chapter Tabs */}
        <div className="comic-nav-links">
          <button
            type="button"
            className={`comic-tab-btn ${activeTab === "origin" ? "active" : ""}`}
            onClick={() => handleNavClick("origin", "whoosh", "WHOOSH!")}
            onMouseEnter={() => playComicSound("click")}
          >
            <span className="tab-chapter">CH. 01</span>
            <span className="tab-name">ORIGIN</span>
            <span className="comic-tab-hover-fx">ZAP!</span>
          </button>

          <button
            type="button"
            className={`comic-tab-btn ${activeTab === "superpowers" ? "active" : ""}`}
            onClick={() => handleNavClick("superpowers", "laser", "BZZT!")}
            onMouseEnter={() => playComicSound("click")}
          >
            <span className="tab-chapter">CH. 02</span>
            <span className="tab-name">SUPERPOWERS</span>
            <span className="comic-tab-hover-fx">BAM!</span>
          </button>

          <button
            type="button"
            className={`comic-tab-btn ${activeTab === "missions" ? "active" : ""}`}
            onClick={() => handleNavClick("missions", "pow", "BOOM!")}
            onMouseEnter={() => playComicSound("click")}
          >
            <span className="tab-chapter">CH. 03</span>
            <span className="tab-name">MISSIONS</span>
            <span className="comic-tab-hover-fx">KABOOM!</span>
          </button>

          <button
            type="button"
            className={`comic-tab-btn ${activeTab === "dispatch" ? "active" : ""}`}
            onClick={() => handleNavClick("dispatch", "whoosh", "CALL!")}
            onMouseEnter={() => playComicSound("click")}
          >
            <span className="tab-chapter">CH. 04</span>
            <span className="tab-name">DISPATCH</span>
            <span className="comic-tab-hover-fx">PING!</span>
          </button>
        </div>

        {/* Right CTA Button */}
        <div className="comic-nav-actions">
          <a
            href="#dispatch"
            className="comic-cta-summon"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("dispatch", "pow", "KAPOW!");
            }}
            onMouseEnter={() => playComicSound("pop")}
          >
            <span className="cta-lightning">⚡</span>
            <span className="cta-label">SUMMON HERO!</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className="comic-mobile-toggle"
            onClick={() => {
              playComicSound("pop");
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            aria-label="Toggle Navigation"
          >
            <span className="menu-icon">{mobileMenuOpen ? "✖" : "☰"}</span>
            <span className="menu-label">PANEL</span>
          </button>
        </div>
      </nav>

      {/* Mobile Comic Panel Menu Drawer */}
      {mobileMenuOpen && (
        <div className="comic-mobile-drawer">
          <div className="comic-speech-bubble mobile-bubble">
            <p className="mobile-bubble-title">CHOOSE YOUR CHAPTER DESTINATION:</p>
            <div className="mobile-links-grid">
              <button 
                type="button"
                className="comic-btn mobile-item" 
                onClick={() => handleNavClick("origin", "whoosh", "WHOOSH!")}
              >
                <span>CH. 01</span> ORIGIN STORY
              </button>
              <button 
                type="button"
                className="comic-btn mobile-item comic-btn-blue" 
                onClick={() => handleNavClick("superpowers", "laser", "ZAP!")}
              >
                <span>CH. 02</span> SUPERPOWERS
              </button>
              <button 
                type="button"
                className="comic-btn mobile-item comic-btn-red" 
                onClick={() => handleNavClick("missions", "pow", "BAM!")}
              >
                <span>CH. 03</span> EPIC MISSIONS
              </button>
              <button 
                type="button"
                className="comic-btn mobile-item" 
                onClick={() => handleNavClick("dispatch", "whoosh", "CALL!")}
              >
                <span>CH. 04</span> SECRET DISPATCH
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
