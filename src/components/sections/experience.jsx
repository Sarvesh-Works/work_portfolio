"use client";

import { experienceData } from "../../lib/resume-data";
import { useState } from "react";
import { Badge } from "../ui/badge";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";

export function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="experience"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-6">
            {experienceData.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8"
              >
                {/* Timeline Line */}
                {index < experienceData.length - 1 && (
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-slate-900 flex-shrink-0" />

                {/* Experience Card */}
                <Card className="p-4 sm:p-6 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2 sm:p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0">
                      <Briefcase className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                        {experience.title}
                      </h3>
                      <h4 className="text-sm sm:text-base text-purple-400">
                        {experience.company}
                      </h4>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-xs text-white/70">
                      <Calendar className="h-3 w-3" />
                      {experience.date}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 text-xs text-white/70">
                      <MapPin className="h-3 w-3" />
                      {experience.location}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="text-xs bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Desktop Snake Layout */}
          <div className="hidden lg:block space-y-12">
            {experienceData.map((experience, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Experience Card */}
                  <div className="w-full max-w-xl relative">
                    <Card
                      className={`p-6 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-500 ${
                        hoveredIndex === index
                          ? "shadow-2xl shadow-purple-500/50 scale-105"
                          : ""
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <motion.div
                          className="p-3 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex-shrink-0"
                          animate={
                            hoveredIndex === index
                              ? { rotate: [0, 5, -5, 0] }
                              : {}
                          }
                          transition={{ duration: 0.5 }}
                        >
                          <Briefcase className="h-6 w-6 text-white" />
                        </motion.div>

                        <div className="flex-1">
                          {/* Title & Company */}
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {experience.title}
                          </h3>
                          <h4 className="text-lg text-purple-400 mb-3">
                            {experience.company}
                          </h4>

                          {/* Meta Info */}
                          <div className="flex flex-wrap gap-3 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                              <Calendar className="h-4 w-4" />
                              {experience.date}
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/70">
                              <MapPin className="h-4 w-4" />
                              {experience.location}
                            </span>
                          </div>

                          {/* Description */}
                          <p className="text-white/70 mb-4 leading-relaxed">
                            {experience.description}
                          </p>

                          {/* Technologies */}
                          <div className="flex flex-wrap gap-2">
                            {experience.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/30 text-purple-300 hover:from-purple-600/30 hover:to-pink-600/30"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full" />
                    </Card>

                    {/* Timeline Dot & Connector */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 ${
                        isLeft ? "-right-6" : "-left-6"
                      }`}
                    >
                      <motion.div
                        className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-slate-900"
                        animate={
                          hoveredIndex === index ? { scale: [1, 1.5, 1] } : {}
                        }
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < experienceData.length - 1 && (
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent`}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Add Space for More Experiences */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-16 text-center"
        ></motion.div>
      </div>
    </section>
  );
}
