"use client";

import { motion } from "framer-motion";

interface SectionDividerProps {
  height?: "sm" | "md" | "lg";
  className?: string;
}

const heightMap = {
  sm: "h-12",
  md: "h-20",
  lg: "h-28",
};

export function SectionDivider({
  height = "md",
  className = "",
}: SectionDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className={`w-full ${heightMap[height]} relative ${className}`}
    >
      {/* Top fade */}
      <div 
        className="absolute inset-x-0 top-0 h-1/2"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.03))",
        }}
      />
      {/* Bottom fade */}
      <div 
        className="absolute inset-x-0 bottom-0 h-1/2"
        style={{
          background: "linear-gradient(to top, transparent, rgba(0,0,0,0.03))",
        }}
      />
    </motion.div>
  );
}
