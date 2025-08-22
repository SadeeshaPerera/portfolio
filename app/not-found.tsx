"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Leaf } from "lucide-react";
import { useEffect, useState } from "react";

export default function NotFound() {
  // Use state to store window dimensions
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const [isMounted, setIsMounted] = useState(false);

  // Only access window after component is mounted
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
    setIsMounted(true);

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render animations until client-side
  if (!isMounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-devops-900 to-slate-800">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute opacity-10"
              initial={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              animate={{
                x: Math.random() * 1200,
                y: Math.random() * 800,
              }}
              transition={{
                duration: 15 + Math.random() * 25,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              <Leaf className="h-8 w-8 text-emerald-400" />
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
            {/* Removed Sadeesha image for a cleaner 404 page */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                404 - Lost in the <span className="text-emerald-300">Django Jungle</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-8 drop-shadow">
                Oops! It seems you've wandered off the path. This page doesn't exist in our jungle.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500"
              >
                <Link href="/">
                  <Leaf className="mr-2 h-4 w-4" /> Return to Base Camp
                </Link>
              </Button>
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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-devops-900 to-slate-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-10"
            initial={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            animate={{
              x: Math.random() * dimensions.width,
              y: Math.random() * dimensions.height,
            }}
            transition={{
              duration: 15 + Math.random() * 25,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          >
            <Leaf className="h-8 w-8 text-emerald-400" />
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
          {/* Removed Sadeesha image for a cleaner 404 page */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              404 - Page Not Found
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-2xl mx-auto mb-4 drop-shadow">
              Sorry, the page you are looking for does not exist.<br />
              You might be lost in the <span className="text-emerald-300 font-semibold">Cloud</span>.
            </p>
            <p className="text-base text-slate-400 max-w-xl mx-auto mb-8">
              Double-check the URL or return to the homepage to find your way back.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white border-2 border-emerald-500"
            >
              <Link href="/">
                <Leaf className="mr-2 h-4 w-4" /> Go to Homepage
              </Link>
            </Button>
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
