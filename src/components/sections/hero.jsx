"use client";

import { personalData } from "../../lib/resume-data";
import { Button } from "../ui/button";
import Image from "next/image"; // Add this import
import {
  ArrowDown,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  Download,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Hero() {
  const [typedText, setTypedText] = useState("");
  const textToType = personalData.title;

  useEffect(() => {
    if (typedText.length < textToType.length) {
      const timeout = setTimeout(() => {
        setTypedText(textToType.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, textToType]);

  const getSocialIcon = (iconName) => {
    switch (iconName) {
      case "Github":
        return <Github className="h-5 w-5" />;
      case "Linkedin":
        return <Linkedin className="h-5 w-5" />;
      case "Twitter":
        return <Twitter className="h-5 w-5" />;
      default:
        return <ExternalLink className="h-5 w-5" />;
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/50 via-slate-950 to-slate-950" />

      {/* Subtle animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-indigo-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none" />

      <div className="container max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 space-y-6"
          >
            {/* Name */}
            <div style={{ width: "140%" }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
              >
                {personalData.name}
              </motion.h1>
            </div>

            {/* Typing Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-indigo-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base sm:text-lg text-white/70 leading-relaxed"
            >
              {personalData.about}
            </motion.p>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex-shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/50 mb-0.5">Email</p>
                  <p className="text-xs sm:text-sm text-white font-medium group-hover:text-indigo-400 transition-colors truncate">
                    {personalData.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalData.phone}`}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-600 flex-shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/50 mb-0.5">Phone</p>
                  <p className="text-xs sm:text-sm text-white font-medium group-hover:text-blue-400 transition-colors">
                    {personalData.phone}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 sm:col-span-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex-shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/50 mb-0.5">Location</p>
                  <p className="text-xs sm:text-sm text-white font-medium">
                    {personalData.location}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons & Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="space-y-4"
            >
              {/* Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-indigo-500/30 transition-all hover:scale-105"
                  onClick={() => {
                    window.location.href =
                      "mailto:worksbysarvesh@gmail.com?subject=Let's Connect&body=Hi Sarvesh,";
                  }}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 backdrop-blur-md transition-all hover:scale-105"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/resume.pdf";
                    link.download = "Sarvesh_Sawant_Resume.pdf";
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                {personalData.socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all hover:scale-110"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {getSocialIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-square">
              {/* Glowing Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/30 to-blue-600/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Main Image Container */}
              <div className="relative z-10 w-full h-full p-4">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 clip-blob"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Replace the SVG section with actual image */}
                <div className="absolute inset-6 bg-gradient-to-br from-slate-900 to-indigo-950 clip-blob overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt={personalData.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Floating Badges */}
                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs sm:text-sm font-bold shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  ✨ Available
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-lg"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🚀 5+ Projects
                </motion.div>
              </div>

              {/* Decorative Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-white/10 rounded-full pointer-events-none"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
        >
          <motion.button
            onClick={() => scrollToSection("#experience")}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <ArrowDown className="h-6 w-6 group-hover:text-indigo-400 transition-colors" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
