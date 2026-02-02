"use client";

import { motion } from "framer-motion";

export function CanvasLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-background/50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="relative w-16 h-16">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary/20"
          />
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-gray-600 text-sm">Loading...</span>
      </motion.div>
    </div>
  );
}
