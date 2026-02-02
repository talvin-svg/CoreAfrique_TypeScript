"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 md:px-16 md:py-20"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent" />

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to build your digital future?
            </h2>

            <p className="text-white/70 text-lg mb-10 leading-relaxed">
              Schedule a consultation with our team and discover how we can
              support your business in Africa&apos;s evolving digital economy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-xl font-medium hover:bg-secondary-dark transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 text-white border border-white/30 rounded-xl font-medium hover:bg-white/10 transition-colors"
              >
                Learn about us
              </Link>
            </div>
          </div>

          {/* Decorative dots pattern */}
          <div className="absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-20">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-white rounded-full" />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
