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
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/20 to-emerald-950/20 z-0"></div>

      <div className="container max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full text-sm font-medium mb-3 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50 cursor-default">
            Discover My Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <div className="relative group">
              {/* Decorative corners with hover effect */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-t-4 border-l-4 border-cyan-500 rounded-tl-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-2 group-hover:-translate-y-2"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-4 border-r-4 border-emerald-500 rounded-br-xl transition-all duration-300 group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-2"></div>

              {/* Image container with hover effects */}
              <div className="bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-2xl p-2 relative z-10 transition-all duration-500 group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-cyan-500/30">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500 to-emerald-500 relative">
                  <div className="absolute inset-1 rounded-lg overflow-hidden bg-white dark:bg-gray-900 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-900/30 to-emerald-900/30 transition-all duration-500 group-hover:from-cyan-800/40 group-hover:to-emerald-800/40">
                        <User className="h-32 w-32 text-cyan-700 transition-all duration-500 group-hover:scale-110 group-hover:text-cyan-600" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges with enhanced hover */}
              <motion.div
                className="absolute -top-4 -right-4 px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-full text-sm font-medium shadow-lg cursor-default transition-all duration-300 hover:scale-125 hover:rotate-3 hover:shadow-cyan-500/50"
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                {personalData.title}
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 px-3 py-1 bg-white/10 backdrop-blur-sm text-cyan-200 rounded-full text-sm font-medium shadow-lg cursor-default border border-cyan-400/30 transition-all duration-300 hover:scale-125 hover:-rotate-3 hover:bg-cyan-500/20 hover:border-cyan-400 hover:shadow-emerald-500/50"
                initial={{ y: 0 }}
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {personalData.location}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              I'm a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-emerald-400 inline-block transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.5)] cursor-default">
                {personalData.title}
              </span>{" "}
              based in {personalData.location}
            </h3>

            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                {personalData.about}
              </p>
            </div>

            <div className="mt-6">
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
