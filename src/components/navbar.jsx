"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./theme-toggle";
import { personalData } from "../lib/resume-data";
import { cn } from "../lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Disable background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        "bg-background/80 backdrop-blur-sm border-b shadow-sm"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-colors"
        >
          {personalData.name.split(" ")[0]}
          <span className="text-primary">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              className="text-foreground/80 hover:text-foreground"
              onClick={(e) => scrollToSection(e, item.href)}
            >
              {item.name}
            </Button>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            className="ml-2 z-[60]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Clickable dark overlay */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 49,
            }}
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Menu container */}
          <div
            style={{
              width: "100%",
              backgroundColor: "rgb(2 6 24 / 71%);",
              padding: "4rem 1rem",
              display: "flex",
              color: "#111",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.5rem",
              boxShadow: "-5px 0 15px rgba(0,0,0,0.5)",
              borderLeft: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="lg"
                className="text-xl text-white"
                onClick={(e) => scrollToSection(e, item.href)}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </>
      )}
    </header>
  );
}
