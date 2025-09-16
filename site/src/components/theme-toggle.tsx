"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";
  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="h-8 w-8 grid place-items-center rounded-md border border-border hover:bg-foreground/5"
    >
      <span className="text-sm">{isDark ? "☀️" : "🌙"}</span>
    </button>
  );
}


