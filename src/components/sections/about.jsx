"use client";

import { personalData } from "../../lib/resume-data";
import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Button } from "../ui/button";

export function About() {
  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about"
      className="py-16 px-4 sm:py-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-emerald-950/20 z-0" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full text-sm font-medium mb-3">
            Discover My Story
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            About Me
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          {/* Left Side (Image + Decorations) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <div className="relative group w-64 sm:w-80">
              {/* Decorative corners */}
              <div className="hidden sm:block absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-cyan-500 rounded-tl-xl transition-all duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1" />
              <div className="hidden sm:block absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-emerald-500 rounded-br-xl transition-all duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />

              {/* Image area */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl p-2 relative z-10 transition-all duration-500 group-hover:scale-105">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-emerald-500 relative">
                  <div className="absolute inset-1 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 transition-all duration-500 group-hover:from-cyan-800/40 group-hover:to-emerald-800/40">
                      <User className="h-24 w-24 sm:h-32 sm:w-32 text-cyan-700 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-600" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-2 sm:px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full text-xs sm:text-sm font-medium shadow-md"
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {personalData.title}
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 px-2 sm:px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-200 rounded-full text-xs sm:text-sm font-medium shadow-md border border-cyan-400/30"
                initial={{ y: 0 }}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {personalData.location}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side (Text) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-6">
              I'm a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 inline-block">
                {personalData.title}
              </span>{" "}
              based in {personalData.location}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
              {personalData.about}
            </p>

            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get in touch
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
