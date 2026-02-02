"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    id: "investment-advisory",
    number: "01",
    title: "Investment Advisory",
    description:
      "Strategic guidance for startups, SMEs, and investors entering Africa's digital economy. From capital structuring to market entry strategy.",
    href: "/services/investment-advisory",
    features: [
      "Investment Readiness",
      "Capital Structuring",
      "Digital Asset Advisory",
      "Financial Modeling",
    ],
  },
  {
    id: "blockchain-education",
    number: "02",
    title: "Blockchain Education",
    description:
      "Comprehensive education programs supporting Ghana's National Virtual Assets Literacy Initiative. Training for individuals and institutions.",
    href: "/services/blockchain-education",
    features: [
      "Corporate Training",
      "VASP Compliance",
      "Web3 Fundamentals",
      "Regulatory Alignment",
    ],
  },
];

export function ServicesPreviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-secondary mb-2">Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What we do
          </h2>
          <p className="text-text-secondary max-w-xl">
            Two complementary service lines designed to support Africa&apos;s digital transformation.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.href} className="group block">
                <div className="p-8 md:p-10 rounded-2xl border border-neutral-200 hover:border-secondary/30 hover:shadow-lg transition-all duration-300 bg-white">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Number */}
                    <div className="flex-shrink-0">
                      <span className="text-5xl font-bold text-secondary/30 group-hover:text-secondary/50 transition-colors">
                        {service.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-semibold text-primary mb-3 group-hover:text-secondary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-surface text-primary text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Learn more link */}
                      <div className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-secondary transition-colors">
                        Learn more
                        <svg
                          className="w-4 h-4 transform transition-transform group-hover:translate-x-1"
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
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-text-secondary">
            Not sure which service fits your needs?{" "}
            <Link
              href="/contact"
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              Let&apos;s discuss your project
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
