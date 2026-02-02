"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const programs = [
  {
    title: "Blockchain Fundamentals",
    description: "Comprehensive introduction to blockchain technology, cryptocurrencies, and decentralized systems.",
  },
  {
    title: "Corporate Training",
    description: "Tailored programs for businesses looking to understand and leverage blockchain technology.",
  },
  {
    title: "VASP Compliance",
    description: "Education on Ghana's Virtual Asset Service Provider regulations and compliance requirements.",
  },
  {
    title: "Web3 & DeFi",
    description: "Advanced training on decentralized finance, smart contracts, and Web3 applications.",
  },
];

const audiences = [
  { title: "General Public", desc: "Foundational blockchain knowledge" },
  { title: "Professionals", desc: "Strategic digital asset awareness" },
  { title: "Financial Institutions", desc: "Blockchain for business applications" },
  { title: "Government Agencies", desc: "Policy and regulatory alignment" },
  { title: "VASP License Holders", desc: "Compliance-focused education" },
];

export default function BlockchainEducationPage() {
  return (
    <main className="bg-white">
      {/* Floating background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm font-medium text-secondary mb-4"
          >
            Blockchain Education
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-tight mb-6"
          >
            Building Africa&apos;s
            <br />
            <span className="text-secondary">digital asset future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            Comprehensive education programs supporting Ghana&apos;s National Virtual Assets
            Literacy Initiative. Training for individuals and institutions.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Request training
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#programs"
              className="px-6 py-3 text-primary border border-neutral-200 rounded-xl font-medium hover:bg-surface transition-colors"
            >
              View programs
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credentials - ISO removed */}
      <section className="relative py-16 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
            {[
              { label: "NaVALI", description: "Knowledge Partner of BoG & SEC" },
              { label: "8+ Years", description: "Blockchain Experience" },
              { label: "CFA", description: "Chartered Credentials" },
            ].map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl font-bold text-primary mb-1">{cred.label}</div>
                <div className="text-sm text-text-secondary">{cred.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-secondary mb-2">Programs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our programs
            </h2>
            <p className="text-text-secondary max-w-xl">
              Promoting informed, responsible, and compliant adoption of blockchain technology.
            </p>
          </motion.div>

          <div className="space-y-6">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6 py-8 border-b border-neutral-200"
              >
                <span className="text-4xl font-bold text-secondary/30">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {program.title}
                  </h3>
                  <p className="text-text-secondary">{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who we serve */}
      <section className="relative py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-secondary mb-2">Audience</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Who we serve
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Our programs are tailored for different audiences, from beginners
                to institutional stakeholders, all aligned with Ghana&apos;s
                regulatory framework.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {audiences.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="w-2 h-2 bg-secondary rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="relative py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="p-6 border border-neutral-200 rounded-xl bg-surface">
            <p className="text-sm text-text-secondary">
              <strong className="text-primary">Regulatory Disclosure:</strong> Our blockchain
              education programs are educational in nature and do not constitute financial advice.
              We are committed to regulatory compliance and work in partnership with relevant authorities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to upskill your team?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-lg mb-10 max-w-lg mx-auto"
          >
            Get in touch to discuss a training program tailored to your
            organization&apos;s needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-secondary text-white rounded-xl font-medium hover:bg-secondary-dark transition-colors"
            >
              Request a consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
