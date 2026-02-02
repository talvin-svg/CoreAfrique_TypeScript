"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { servicesData } from "@/lib/data/services";

export function ServicesPreviewSection() {
  const previewServices = servicesData.slice(0, 4);

  return (
    <SectionContainer className="bg-surface">
      <SectionTitle
        title="Our Services"
        subtitle="Comprehensive financial solutions tailored for African markets"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {previewServices.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ServiceCard service={service} />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="/services"
          className="inline-flex items-center gap-2 px-6 py-3 text-primary font-semibold hover:bg-primary/5 rounded-lg transition-colors"
        >
          View All Services
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </motion.div>
    </SectionContainer>
  );
}
