"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ClientCategoryCard } from "@/components/shared/ClientCategoryCard";
import { clientCategories } from "@/lib/data/clients";

export function ClientsSection() {
  return (
    <SectionContainer>
      <SectionTitle
        title="Who We Serve"
        subtitle="Trusted by diverse clients across Ghana and beyond"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clientCategories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ClientCategoryCard category={category} />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
