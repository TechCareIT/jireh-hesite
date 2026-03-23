"use client";

import { useEffect } from "react";

export default function SiteProtection() {
  useEffect(() => {
    // Disable right-click context menu
    const onContextMenu = (e: MouseEvent) => {
      e.preventDefault();
    };

    // Block keyboard shortcuts (Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12)
    const onKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J" || e.key === "C")) ||
        (e.ctrlKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S")) ||
        (e.metaKey && e.altKey && (e.key === "i" || e.key === "I" || e.key === "j" || e.key === "J")) ||
        (e.metaKey && (e.key === "u" || e.key === "U" || e.key === "s" || e.key === "S"))
      ) {
        e.preventDefault();
      }
    };

    // Block drag on images
    const onDragStart = (e: DragEvent) => {
      if (e.target instanceof HTMLImageElement) {
        e.preventDefault();
      }
    };

    // Console warning
    console.log(
      "%c⚠️ Stop!",
      "color: red; font-size: 40px; font-weight: bold;"
    );
    console.log(
      "%cThis site is protected. Unauthorized copying or reproduction is not allowed.",
      "color: #D4764E; font-size: 14px;"
    );

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("dragstart", onDragStart);

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("dragstart", onDragStart);
    };
  }, []);

  return null;
}
