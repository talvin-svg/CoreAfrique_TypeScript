"use client";

import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "Institutional",
    description: "Regulators, government agencies, and financial institutions",
    examples: [
      // "Bank of Ghana",
      // "SEC Ghana",
      // "NIA",
    ],
  },
  {
    id: 2,
    name: "Corporate",
    description: "Financial services and technology companies",
    examples: ["Banks", "Fintechs", "VASPs"],
  },
  {
    id: 3,
    name: "SMEs & Startups",
    description: "Growth-stage companies seeking investment readiness",
    examples: ["Tech startups", "Scale-ups", "Ventures"],
  },
  {
    id: 4,
    name: "Educational",
    description: "Academic and research institutions",
    examples: ["Universities", "Think tanks", "Research centers"],
  },
  {
    id: 5,
    name: "Individual",
    description: "Professionals and entrepreneurs seeking expertise",
    examples: ["Executives", "Investors", "Professionals"],
  },
];

export function ClientsSection() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-secondary mb-2">Clients</p>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Who we serve
          </h2>
          <p className="text-text-secondary max-w-xl">
            Trusted by diverse clients across Ghana and the broader African ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-white rounded-xl border border-neutral-200 hover:border-secondary/30 hover:shadow-sm transition-all"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {client.name}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {client.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {client.examples.map((example) => (
                  <span
                    key={example}
                    className="px-2 py-1 bg-surface text-primary text-xs rounded"
                  >
                    {example}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
