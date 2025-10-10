"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // initialize from localStorage or default to dark
    const stored =
      typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initialDark = stored ? stored === "dark" : true;
    setIsDark(initialDark);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", initialDark);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next);
    }
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", next ? "dark" : "light");
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="fixed bottom-4 right-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-full
                 bg-secondary text-secondary-foreground shadow-lg ring-1 ring-border/40
                 hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
