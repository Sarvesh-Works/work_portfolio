"use client";

import { educationData } from "../../lib/resume-data";
import { Card, CardContent } from "../ui/card";
import {
  BookOpen,
  Award,
  Calendar,
  MapPin,
  Trophy,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export function Education() {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="education"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/30 via-slate-950 to-slate-950" />

      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-indigo-600 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl animate-pulse"
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
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            Educational Background
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Education & Qualifications
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto mb-6">
            My academic journey and professional certifications that have shaped
            my expertise
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        {/* Education Cards - Better Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 md:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="transform transition-all duration-300 hover:-translate-y-2"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className="h-full overflow-hidden border-none rounded-xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/20 bg-white/5 backdrop-blur-md">
                {/* Decorative top accent */}
                <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400" />

                <CardContent className="p-5 sm:p-6 relative">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 rounded-bl-full" />

                  <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-5 relative z-10">
                    <motion.div
                      className={`h-12 w-12 sm:h-14 sm:w-14 rounded-xl flex items-center justify-center shadow-md transform transition-all duration-300 ${
                        activeCard === index
                          ? "rotate-0 bg-gradient-to-br from-indigo-600 to-purple-600"
                          : "-rotate-3 bg-gradient-to-br from-indigo-600 to-purple-600"
                      }`}
                      animate={
                        activeCard === index ? { rotate: [0, 5, -5, 0] } : {}
                      }
                      transition={{ duration: 0.5 }}
                    >
                      {index % 2 === 0 ? (
                        <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      ) : (
                        <Award className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                      )}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg sm:text-xl text-white">
                        {item.degree}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-indigo-400 mt-1">
                        <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 mb-4 text-white/70">
                    <MapPin className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                    <span className="font-medium text-sm">
                      {item.institution}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-white/60 mb-5">
                    {item.description}
                  </p>

                  {/* Key learnings with visual styling */}
                  {item.keyLearnings && (
                    <div className="mb-5 bg-indigo-600/10 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-medium text-sm text-indigo-400 mb-3 flex items-center gap-2">
                        <Trophy className="h-4 w-4" /> Key Learnings
                      </h4>
                      <ul className="space-y-2 text-xs sm:text-sm text-white/60">
                        {item.keyLearnings.slice(0, 3).map((learning, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-5 w-5 rounded-full bg-indigo-600/20 text-indigo-400 flex-shrink-0 flex items-center justify-center text-xs font-medium">
                              {i + 1}
                            </span>
                            <span>{learning}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Achievement badges with visual styling */}
                  {item.achievements && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-xs font-medium text-indigo-300"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link with visual styling */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400 hover:text-indigo-300 mt-2 transition-colors"
                    >
                      View Certificate <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
