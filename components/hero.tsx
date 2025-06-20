"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Cloud,
  Server,
  Settings,
  GitBranch,
  Code,
  Database,
  Monitor,
} from "lucide-react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-devops-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isMounted &&
          Array.from({ length: 25 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: 15 + Math.random() * 25,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              {i % 7 === 0 && <Cloud className="h-8 w-8 text-devops-400" />}
              {i % 7 === 1 && <Server className="h-6 w-6 text-devops-300" />}
              {i % 7 === 2 && <Settings className="h-7 w-7 text-devops-500" />}
              {i % 7 === 3 && <GitBranch className="h-5 w-5 text-devops-400" />}
              {i % 7 === 4 && <Code className="h-6 w-6 text-emerald-400" />}
              {i % 7 === 5 && <Database className="h-5 w-5 text-emerald-300" />}
              {i % 7 === 6 && <Monitor className="h-7 w-7 text-emerald-500" />}
            </motion.div>
          ))}
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              className="relative h-40 w-40 md:h-48 md:w-48 lg:h-56 lg:w-56 animate-float"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-devops-400 via-emerald-500 to-devops-600 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/images/sadeesha.png"
                  alt="Sadeesha Perera - Full-Stack DevOps Engineer"
                  className="w-full h-full rounded-full object-cover drop-shadow-xl"
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Specializing in
              <span className="text-emerald-300"> DevOps</span> &
              <span className="text-devops-300"> Full-Stack </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-200 max-w-4xl mx-auto mb-8 drop-shadow">
              Building end-to-end solutions from code to cloud , combining
              full-stack development expertise with DevOps automation to deliver
              scalable, reliable applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500"
              >
                Hire Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToProjects}
                className="border-2 border-devops-300 text-white hover:bg-devops-800/50"
              >
                View Projects
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-slate-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">3+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-devops-400">50+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-emerald-400">99.9%</div>
                <div className="text-sm">Uptime Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-devops-400">24/7</div>
                <div className="text-sm">Support Ready</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced geometric decorations */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-devops-400/30 rotate-45"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-emerald-300/20 rotate-12"></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-devops-500/10 rotate-45"></div>
      <div className="absolute top-1/3 right-8 w-14 h-14 bg-emerald-500/10 rotate-12"></div>
    </section>
  );
}
