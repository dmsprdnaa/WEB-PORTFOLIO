"use client";

import React, { useState } from "react";
import {
  IconChevronLeft,
  IconChevronRight,
  IconRefresh,
  IconLock,
  IconShare,
  IconPlus,
  IconMoreHorizontal,
  IconCheck,
  IconSun,
  IconMoon,
} from "./Icons";

interface SpatialBrowserBarProps {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}

export default function SpatialBrowserBar({
  theme = "dark",
  onToggleTheme,
}: SpatialBrowserBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  return (
    <div className="spatial-browser-bar">
      {/* Left Navigation controls */}
      <div className="browser-nav-group">
        <button 
          type="button" 
          className="browser-btn" 
          title="Back"
          onClick={() => { if (typeof window !== "undefined") window.history.back(); }}
        >
          <IconChevronLeft size={16} />
        </button>
        <button 
          type="button" 
          className="browser-btn" 
          title="Forward"
          onClick={() => { if (typeof window !== "undefined") window.history.forward(); }}
        >
          <IconChevronRight size={16} />
        </button>
        <button 
          type="button" 
          className="browser-btn" 
          title="Reload"
          onClick={() => { if (typeof window !== "undefined") window.location.reload(); }}
        >
          <IconRefresh size={14} />
        </button>
      </div>

      {/* Center URL capsule */}
      <div className="browser-url-pill">
        <span className="url-lock">
          <IconLock size={13} color="var(--text-secondary)" />
        </span>
        <span className="url-text">dimasputra.dev</span>
        <span className="url-sub">/portfolio</span>
      </div>

      {/* Right action controls */}
      <div className="browser-actions-group">
        {onToggleTheme && (
          <button
            type="button"
            className="browser-btn"
            title={theme === "dark" ? "Ganti ke Light Mode (Putih Pekat)" : "Ganti ke Dark Mode (Hitam Pekat)"}
            onClick={onToggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <IconSun size={15} /> : <IconMoon size={15} />}
          </button>
        )}
        <button 
          type="button" 
          className="browser-btn" 
          title={copied ? "Copied!" : "Share Link"}
          onClick={handleCopy}
        >
          {copied ? <IconCheck size={14} color="var(--accent-green)" /> : <IconShare size={15} />}
        </button>
        <button 
          type="button" 
          className="browser-btn" 
          title="New Tab"
          onClick={() => { if (typeof window !== "undefined") window.open("/", "_blank"); }}
        >
          <IconPlus size={16} />
        </button>
        <button 
          type="button" 
          className="browser-btn" 
          title="Options"
        >
          <IconMoreHorizontal size={15} />
        </button>
      </div>
    </div>
  );
}
