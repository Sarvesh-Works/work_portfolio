"use client";

import { skillsData } from "../../lib/resume-data";
import { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { motion, useInView } from "framer-motion";
import { Code, Palette, Server, Code2 } from "lucide-react";

export function Skills() {
  const [activeTab, setActiveTab] = useState(skillsData[0].category);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  // Get icon for category
  const getCategoryIcon = (category) => {
    switch (category) {
      case "Programming":
        return <Code className="h-4 w-4" />;
      case "Technology":
        return <Server className="h-4 w-4" />;
      case "Professional Skills":
        return <Code2 className="h-4 w-4" />;
      default:
        return <Code className="h-4 w-4" />;
    }
  };

  return (
    <section
      id="skills"
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Seamless radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-indigo-950/40 via-slate-950 to-slate-950" />

      {/* Very subtle animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div
        ref={containerRef}
        className="container max-w-7xl mx-auto relative z-10"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <Tabs
          defaultValue={skillsData[0].category}
          onValueChange={setActiveTab}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <TabsList className="grid w-full grid-cols-3 gap-2 p-0 bg-transparent h-auto">
              {skillsData.map((category) => (
                <TabsTrigger
                  key={category.category}
                  value={category.category}
                  className={`px-4 py-3 rounded-xl transition-all duration-300 text-sm sm:text-base font-medium ${
                    activeTab === category.category
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50"
                      : "bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:border-indigo-500/30"
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    {getCategoryIcon(category.category)}
                    <span className="hidden sm:inline">
                      {category.category}
                    </span>
                    <span className="sm:hidden">
                      {category.category === "Professional Skills"
                        ? "Pro"
                        : category.category.split(" ")[0]}
                    </span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>
          </motion.div>

          {skillsData.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView && activeTab === category.category
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.5 }}
              >
                <Card className="border-none shadow-xl bg-white/5 backdrop-blur-md overflow-hidden">
                  <CardHeader className="border-b border-white/10 bg-white/5">
                    <CardTitle className="text-xl sm:text-2xl text-white flex items-center gap-2">
                      {getCategoryIcon(category.category)}
                      {category.category} Skills
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          className="space-y-3"
                          initial={{ opacity: 0, y: 20 }}
                          animate={
                            isInView && activeTab === category.category
                              ? { opacity: 1, y: 0 }
                              : { opacity: 0, y: 20 }
                          }
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="flex justify-between items-center">
                            <div className="flex items-center gap-2">
                              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xs">
                                  {skill.name.charAt(0)}
                                </span>
                              </div>
                              <span className="font-bold text-base sm:text-lg text-white">
                                {skill.name}
                              </span>
                            </div>
                            <span className="text-xs sm:text-sm font-medium px-2 py-1 rounded-lg bg-indigo-600/20 border border-indigo-500/30 text-indigo-300">
                              {skill.level}%
                            </span>
                          </div>

                          <div className="h-2.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                              initial={{ width: 0 }}
                              animate={
                                isInView && activeTab === category.category
                                  ? { width: `${skill.level}%` }
                                  : { width: 0 }
                              }
                              transition={{
                                duration: 1,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
