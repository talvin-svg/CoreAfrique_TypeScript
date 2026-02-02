"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "Investment Readiness & Capital Structuring",
    description: "Prepare your business for fundraising with comprehensive due diligence, financial modeling, and investor-ready documentation.",
  },
  {
    title: "Blockchain & Digital Asset Advisory",
    description: "Navigate the digital asset landscape with expert guidance on tokenization, DeFi strategies, and Web3 integration.",
  },
  {
    title: "Market Entry & Growth Strategy",
    description: "Expand into African markets with localized strategies, regulatory insights, and partnership development.",
  },
  {
    title: "Financial Modeling & Valuation",
    description: "Robust financial models and valuations that stand up to investor scrutiny and support strategic decisions.",
  },
];

const credentials = [
  { label: "14+", description: "Years Advisory Experience" },
  { label: "CFA", description: "Chartered Credentials" },
  { label: "MBA", description: "Schulich School of Business" },
];

export default function InvestmentAdvisoryPage() {
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
            Investment Advisory
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-tight mb-6"
          >
            Strategic advisory for
            <br />
            <span className="text-secondary">Africa&apos;s digital economy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10"
          >
            Bespoke advisory services for startups, SMEs, and investors entering Africa&apos;s
            digital economy. From capital structuring to market entry strategy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Schedule a consultation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Credentials */}
      <section className="relative py-16 border-y border-neutral-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-8 md:gap-4">
            {credentials.map((cred, i) => (
              <motion.div
                key={cred.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{cred.label}</div>
                <div className="text-sm text-text-secondary">{cred.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-secondary mb-2">Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What we offer
            </h2>
            <p className="text-text-secondary max-w-xl">
              Hands-on, research-driven advisory aligned with regulatory realities
              and market opportunities.
            </p>
          </motion.div>

          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
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
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="relative py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-secondary mb-2">Why CoreAfrique</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Local expertise, global standards
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We combine global investment best practices with deep local knowledge.
                As a wholly owned Ghanaian firm, we bring authentic African market
                expertise with international standards.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-6"
            >
              {[
                { title: "Regulatory Alignment", desc: "Built around Ghana's VASP framework and regulatory guidelines" },
                { title: "Deep Networks", desc: "Established relationships with regulators, investors, and industry players" },
                { title: "Proven Track Record", desc: "14+ years of experience in African financial markets" },
              ].map((item) => (
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

      {/* CTA */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-primary mb-6"
          >
            Ready to start?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
          >
            Schedule a consultation with our team and discover how we can support
            your business in Africa&apos;s digital economy.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-primary-dark transition-colors"
            >
              Book a consultation
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 text-primary border border-neutral-200 rounded-xl font-medium hover:bg-surface transition-colors"
            >
              Learn about us
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
