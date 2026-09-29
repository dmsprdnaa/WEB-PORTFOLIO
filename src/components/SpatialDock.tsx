"use client";

import React from "react";
import { IconHome, IconFolder, IconCode, IconFileText, IconUser } from "./Icons";

interface SpatialDockProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
}

export default function SpatialDock({ activeTab, onSelectTab }: SpatialDockProps) {
  const dockItems = [
    { id: "home", label: "Home", icon: <IconHome size={20} /> },
    { id: "projects", label: "Projects", icon: <IconFolder size={20} /> },
    { id: "skills", label: "Tech Stack", icon: <IconCode size={20} /> },
    { id: "resume", label: "Resume CV", icon: <IconFileText size={20} /> },
    { id: "profile", label: "About Me", icon: <IconUser size={20} /> },
  ];

  return (
    <aside className="spatial-dock" aria-label="Portfolio Navigation">
      {dockItems.map((item) => (
        <button
          key={item.id}
          type="button"
          className={`dock-item ${activeTab === item.id ? "active" : ""}`}
          onClick={() => onSelectTab(item.id)}
          aria-label={item.label}
        >
          {item.icon}
          <span className="dock-tooltip">{item.label}</span>
        </button>
      ))}
    </aside>
  );
}
