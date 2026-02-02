"use client";

import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { ParticleField } from "./ParticleField";
import { FloatingShapes } from "./FloatingShapes";
import { CanvasLoader } from "./CanvasLoader";

export function HeroCanvas() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Don't render 3D canvas if user prefers reduced motion
  if (prefersReducedMotion) {
    return (
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-secondary/5" />
    );
  }

  return (
    <div className="absolute inset-0 -z-10">
      {!isLoaded && <CanvasLoader />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
      >
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
          onCreated={() => setIsLoaded(true)}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <ParticleField />
            <FloatingShapes />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
}
