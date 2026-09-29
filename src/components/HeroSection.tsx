"use client";

import React, { useState } from "react";
import { playComicSound } from "@/utils/comicAudio";
import "./HeroSection.css";

export default function HeroSection() {
  const [clickedSfx, setClickedSfx] = useState<string | null>(null);
  const [characterPose, setCharacterPose] = useState<"ready" | "power" | "code">("ready");

  const triggerSfx = (word: string, sound: "pow" | "whoosh" | "laser" | "pop") => {
    playComicSound(sound);
    setClickedSfx(word);
    setTimeout(() => setClickedSfx(null), 1000);
  };

  return (
    <section id="origin" className="comic-hero-section">
      {/* 1. Comic Strip Narrative Box (Top Caption) */}
      <div className="comic-hero-narrative-bar">
        <div className="comic-narrator-box">
          <span className="narrator-tag">NARRATOR:</span> &quot;IN A DIGITAL WORLD FLOODED BY DULL TEMPLATES AND BROKEN SCRIPTS, ONE VISIONARY CODER RISES TO CRAFT IMMERSIVE EXPERIENCES...&quot;
        </div>
        <div className="comic-issue-tag">
          <span>PAGE 01</span> // <span>THE ORIGIN ARC</span>
        </div>
      </div>

      {/* 2. Main Dual Comic Panels */}
      <div className="comic-panels-grid">
        
        {/* PANEL 1: HERO MANIFESTO & DIALOGUE (Left) */}
        <div className="comic-panel left-action-panel">
          {/* Top panel label */}
          <div className="panel-badge-strip">
            <span className="panel-number">PANEL 1A</span>
            <span className="panel-category">★ SPECIAL ISSUE : DEVELOPER PROCLAMATION ★</span>
          </div>

          {/* Explosive Headline */}
          <div className="hero-headline-wrap">
            <div className="comic-kicker-badge">
              <span>CRITICAL MISSION:</span> FULL-STACK WEB ARCHITECT
            </div>
            
            <h1 className="comic-hero-title">
              <span className="title-row-1">CODE BY DAY.</span>
              <span className="title-row-2">SHIP BY NIGHT.</span>
              <span className="title-row-3">
                BUILD <span className="highlight-text">EPIC APPS!</span>
              </span>
            </h1>
          </div>

          {/* Hero Speech Balloon */}
          <div className="comic-speech-bubble hero-speech">
            <div className="speech-avatar-meta">
              <span className="speech-speaker-name">⚡ HERO&apos;S DIRECT TRANSMISSION:</span>
            </div>
            <p className="speech-dialogue">
              &quot;Greetings, adventurers and recruiters! I&apos;m a <strong>Creative Full-Stack Developer</strong> specializing in 
              blazing-fast React &amp; Next.js applications, bulletproof architectures, and high-impact UI experiences that leave a lasting impression!&quot;
            </p>
          </div>

          {/* Comic Action CTA Buttons */}
          <div className="hero-action-buttons">
            <a 
              href="#missions" 
              className="comic-btn comic-btn-yellow hero-cta"
              onClick={() => triggerSfx("BAM!", "pow")}
              onMouseEnter={() => playComicSound("click")}
            >
              <span className="btn-icon">💥</span>
              <span>EXPLORE MISSIONS</span>
              <span className="btn-burst-badge">BAM!</span>
            </a>

            <a 
              href="#dispatch" 
              className="comic-btn comic-btn-red hero-cta"
              onClick={() => triggerSfx("ZAP!", "laser")}
              onMouseEnter={() => playComicSound("click")}
            >
              <span className="btn-icon">⚡</span>
              <span>DISPATCH CALL</span>
              <span className="btn-burst-badge zap">ZAP!</span>
            </a>

            <button 
              type="button"
              className="comic-btn comic-btn-outline hero-cta"
              onClick={() => triggerSfx("WHOOSH!", "whoosh")}
              onMouseEnter={() => playComicSound("click")}
            >
              <span className="btn-icon">📜</span>
              <span>DOSSIER (CV)</span>
            </button>
          </div>

          {/* Comic Stats / Power Gauges */}
          <div className="hero-power-meters">
            <div className="power-card">
              <span className="power-value">100%</span>
              <span className="power-name">CLEAN CODE XP</span>
            </div>
            <div className="power-card">
              <span className="power-value">60 FPS</span>
              <span className="power-name">FLUID PERFORMANCE</span>
            </div>
            <div className="power-card">
              <span className="power-value">LEVEL 99</span>
              <span className="power-name">PROBLEM SOLVER</span>
            </div>
          </div>
        </div>

        {/* PANEL 2: COMIC COVER ART & CHARACTER CARD (Right) */}
        <div className="comic-panel right-art-panel">
          {/* Decorative Corner Tapes */}
          <div className="comic-tape tape-hero-1"></div>
          <div className="comic-tape tape-hero-2"></div>

          {/* Comic Cover Header Strip */}
          <div className="cover-header-strip">
            <div className="cover-logo-mark">
              <span className="marvelous-text">POWERFUL TECH ENTERPRISES</span>
              <span className="issue-price">25¢ • ALL AGES</span>
            </div>
            <div className="cover-issue-badge">
              #01
            </div>
          </div>

          {/* Interactive Character Showcase Area */}
          <div className="character-stage">
            {/* Background Halftone & Speed Radial Lines */}
            <div className="stage-speed-lines"></div>

            {/* Clickable Onomatopoeia Bursts */}
            <button 
              type="button"
              className="sfx-burst-btn burst-pow"
              onClick={() => triggerSfx("KAPOW!", "pow")}
              title="Click for Sound Effect!"
            >
              ★ KAPOW! ★
            </button>

            <button 
              type="button"
              className="sfx-burst-btn burst-debug"
              onClick={() => triggerSfx("DEBUGGED!", "laser")}
              title="Click for Sound Effect!"
            >
              ⚡ DEBUGGED! ⚡
            </button>

            <button 
              type="button"
              className="sfx-burst-btn burst-turbo"
              onClick={() => triggerSfx("TURBO 60FPS!", "whoosh")}
              title="Click for Sound Effect!"
            >
              🚀 TURBO! 🚀
            </button>

            {/* Dynamic Interactive SFX Notification Pop */}
            {clickedSfx && (
              <div className="comic-giant-sfx">
                {clickedSfx}
              </div>
            )}

            {/* Hero Character Vector Illustration */}
            <div className={`comic-avatar-graphic pose-${characterPose}`}>
              <svg 
                viewBox="0 0 400 420" 
                className="hero-svg-illustration"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Comic Ben-Day Dot Pattern */}
                  <pattern id="comicDots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
                    <circle cx="6" cy="6" r="2.2" fill="#11141A" fillOpacity="0.12" />
                  </pattern>
                  <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFE500" stopOpacity="0.6" />
                    <stop offset="70%" stopColor="#FF3344" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Comic Background Circle Halo */}
                <circle cx="200" cy="205" r="150" fill="url(#haloGlow)" />
                <circle cx="200" cy="205" r="140" fill="#FFDE00" stroke="#11141A" strokeWidth="5" />
                <circle cx="200" cy="205" r="135" fill="url(#comicDots)" />

                {/* Developer Hero Body / Cyber Jacket */}
                <g className="hero-body-group">
                  {/* Shoulders & Jacket */}
                  <path 
                    d="M90 390 C110 320, 140 280, 200 280 C260 280, 290 320, 310 390 Z" 
                    fill="#11141A" 
                    stroke="#11141A" 
                    strokeWidth="6"
                  />
                  {/* Jacket Lapels / Cyber Red Collar */}
                  <path 
                    d="M140 280 L200 350 L260 280 L230 280 L200 320 L170 280 Z" 
                    fill="#FF3344" 
                    stroke="#11141A" 
                    strokeWidth="4"
                  />
                  {/* Cyber Lanyard / Code Key */}
                  <line x1="185" y1="300" x2="195" y2="380" stroke="#00E5FF" strokeWidth="4" />
                  <rect x="188" y="375" width="24" height="30" rx="3" fill="#FFE500" stroke="#11141A" strokeWidth="3" />
                  <text x="194" y="394" fontSize="11" fontFamily="monospace" fontWeight="bold" fill="#11141A">&lt;/&gt;</text>
                </g>

                {/* Hero Head & Face */}
                <g className="hero-head-group">
                  {/* Neck */}
                  <rect x="180" y="240" width="40" height="45" fill="#FFD2A8" stroke="#11141A" strokeWidth="4" />
                  {/* Head base */}
                  <ellipse cx="200" cy="210" rx="60" ry="70" fill="#FFD2A8" stroke="#11141A" strokeWidth="5" />
                  
                  {/* Stylized Anime / Comic Hair */}
                  <path 
                    d="M135 190 C130 140, 150 110, 200 105 C250 110, 270 140, 265 190 C255 160, 240 140, 220 145 C200 130, 180 140, 170 160 C155 150, 145 165, 135 190 Z" 
                    fill="#1E293B" 
                    stroke="#11141A" 
                    strokeWidth="5"
                  />
                  {/* Hair Highlights */}
                  <path d="M165 130 Q190 118 215 130" stroke="#00F5D4" strokeWidth="4" fill="none" strokeLinecap="round" />

                  {/* Cyber HUD Developer Glasses / Visor */}
                  <g className="cyber-visor-group">
                    <rect x="145" y="185" width="110" height="36" rx="6" fill="#00E5FF" stroke="#11141A" strokeWidth="4.5" />
                    {/* Visor Glare Lines */}
                    <line x1="155" y1="192" x2="195" y2="192" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
                    {/* Digital Code HUD text inside visor */}
                    <text x="156" y="210" fontSize="13" fontFamily="monospace" fontWeight="900" fill="#11141A">&gt;_ READY</text>
                    <circle cx="242" cy="203" r="5" fill="#FF3344" stroke="#11141A" strokeWidth="2" />
                  </g>

                  {/* Confident Comic Smirk */}
                  <path d="M190 248 Q202 258 218 248" stroke="#11141A" strokeWidth="4" fill="none" strokeLinecap="round" />
                </g>

                {/* Developer Mech Laptop / Command Terminal */}
                <g className="hero-laptop-group">
                  {/* Laptop base */}
                  <polygon points="120,385 280,385 305,415 95,415" fill="#334155" stroke="#11141A" strokeWidth="5" />
                  {/* Laptop screen back */}
                  <rect x="135" y="325" width="130" height="60" rx="4" fill="#0F172A" stroke="#11141A" strokeWidth="4" />
                  {/* Glowing Logo on laptop back */}
                  <circle cx="200" cy="355" r="14" fill="#FFE500" stroke="#11141A" strokeWidth="2.5" />
                  <text x="194" y="360" fontSize="14" fontWeight="bold" fontFamily="monospace" fill="#11141A">JS</text>
                  {/* Holographic light beams emitting from laptop */}
                  <line x1="150" y1="325" x2="110" y2="280" stroke="#00F5D4" strokeWidth="2" strokeDasharray="4 4" />
                  <line x1="250" y1="325" x2="290" y2="280" stroke="#00F5D4" strokeWidth="2" strokeDasharray="4 4" />
                </g>

                {/* Floating Comic Action Starbursts */}
                <g className="floating-sparkles">
                  <path d="M70 180 L80 190 L70 200 L60 190 Z" fill="#FFE500" stroke="#11141A" strokeWidth="2" />
                  <path d="M320 150 L335 160 L320 170 L305 160 Z" fill="#FF3344" stroke="#11141A" strokeWidth="2" />
                  <path d="M330 260 L342 270 L330 280 L318 270 Z" fill="#00E5FF" stroke="#11141A" strokeWidth="2" />
                </g>
              </svg>
            </div>

            {/* Orbiting Tech Skill Badges */}
            <div className="comic-skills-cloud">
              <span className="skill-pill pill-react" onClick={() => triggerSfx("REACT!", "pop")}>
                ⚛️ React 19
              </span>
              <span className="skill-pill pill-next" onClick={() => triggerSfx("NEXT.JS!", "laser")}>
                ▲ Next.js
              </span>
              <span className="skill-pill pill-ts" onClick={() => triggerSfx("TYPESCRIPT!", "pop")}>
                🛡️ TypeScript
              </span>
              <span className="skill-pill pill-node" onClick={() => triggerSfx("NODE.JS!", "whoosh")}>
                🟩 Node.js
              </span>
            </div>

            {/* Interactive Pose Control Buttons */}
            <div className="pose-selector">
              <span className="pose-label">HERO STANCE:</span>
              <button 
                type="button"
                className={`pose-btn ${characterPose === "ready" ? "active" : ""}`}
                onClick={() => {
                  setCharacterPose("ready");
                  playComicSound("pop");
                }}
              >
                READY
              </button>
              <button 
                type="button"
                className={`pose-btn ${characterPose === "power" ? "active" : ""}`}
                onClick={() => {
                  setCharacterPose("power");
                  playComicSound("pow");
                }}
              >
                POWER ⚡
              </button>
              <button 
                type="button"
                className={`pose-btn ${characterPose === "code" ? "active" : ""}`}
                onClick={() => {
                  setCharacterPose("code");
                  playComicSound("laser");
                }}
              >
                OVERCLOCK 🔥
              </button>
            </div>
          </div>

          {/* Comic Card Bottom Barcode & Serial */}
          <div className="comic-card-footer">
            <div className="barcode-mockup">
              <div className="bar b1"></div>
              <div className="bar b3"></div>
              <div className="bar b2"></div>
              <div className="bar b1"></div>
              <div className="bar b4"></div>
              <div className="bar b2"></div>
              <div className="bar b3"></div>
              <div className="bar b1"></div>
              <span className="barcode-number">ISBN-0-NEXTJS-PRO-2026</span>
            </div>
            <div className="comic-authenticity-seal">
              ★ 100% GENUINE CODE HERO ★
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
