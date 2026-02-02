"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Semi-transparent background to let 3D shapes show through */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 to-white/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 border border-primary/10 rounded-full text-sm text-primary mb-8"
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          Building Africa&apos;s Digital Future
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary tracking-tight leading-[1.1] mb-6"
        >
          Investment advisory
          <br />
          <span className="text-secondary">meets blockchain expertise</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We help businesses navigate Africa&apos;s digital economy through strategic advisory,
          investment structuring, and blockchain education aligned with regulatory frameworks.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/services/investment-advisory"
            className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            Explore Services
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 bg-white text-primary rounded-xl font-medium border border-neutral-200 hover:bg-surface hover:border-neutral-300 transition-all"
          >
            Learn about us
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-neutral-200"
        >
          <p className="text-sm text-text-secondary mb-4">Trusted credentials</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-primary font-medium">NaVALI Knowledge Partner</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-primary font-medium">CFA Charterholder</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              <span className="text-primary font-medium">5+ Years Blockchain</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-2 bg-primary/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
