"use client";

import { teamData } from "@/lib/data/team";
import { timelineData } from "@/lib/data/timeline";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const founder = teamData.find((member) => member.id === "team-1");
const otherTeamMembers = teamData.filter((member) => member.id !== "team-1");

export default function AboutPage() {
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
            About us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary tracking-tight leading-tight mb-6"
          >
            Building Africa&apos;s
            <br />
            <span className="text-secondary">digital future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary max-w-2xl leading-relaxed"
          >
            Core Afrique Investment Ltd is a Ghanaian boutique investment and advisory firm
            focused on unlocking value across emerging technologies, digital assets, and frontier markets.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative py-24 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-secondary mb-3">Mission</p>
              <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed">
                Building future-ready enterprises through strategic advisory,
                investment structuring, and capacity building.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm font-medium text-secondary mb-3">Vision</p>
              <p className="text-2xl md:text-3xl font-semibold text-primary leading-relaxed">
                To be the trusted bridge between innovation and regulation
                in Africa&apos;s digital economy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-secondary mb-2">Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our milestones
            </h2>
          </motion.div>

          <div className="space-y-8">
            {timelineData.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-20">
                  <span className="text-2xl font-bold text-secondary">{event.year}</span>
                </div>
                <div className="flex-1 pb-8 border-b border-neutral-200">
                  <h3 className="text-lg font-semibold text-primary mb-2">
                    {event.title}
                  </h3>
                  <p className="text-text-secondary">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      {founder && (
        <section className="relative py-24 bg-surface">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <p className="text-sm font-medium text-secondary mb-2">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                Our Founder
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-square bg-neutral-200 rounded-2xl mb-6 overflow-hidden">
                  {founder.image ? (
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <span className="text-6xl font-bold text-neutral-300">
                        {founder.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-primary">{founder.name}</h3>
                <p className="text-secondary font-medium mb-4">{founder.role}</p>
                {founder.linkedinUrl && (
                  <a
                    href={founder.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-secondary hover:text-primary text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="md:col-span-2 space-y-8"
              >
                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Biography</p>
                  <p className="text-text-secondary leading-relaxed">{founder.bio}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-text-secondary mb-3">Credentials</p>
                  <div className="flex flex-wrap gap-2">
                    {founder.qualifications.map((qual, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white text-primary text-sm rounded-full"
                      >
                        {qual}
                      </span>
                    ))}
                  </div>
                </div>

                {founder.professionalHighlights && founder.professionalHighlights.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-text-secondary mb-3">Highlights</p>
                    <ul className="space-y-2">
                      {founder.professionalHighlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-text-secondary">
                          <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {/* Team */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-sm font-medium text-secondary mb-2">Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Our people
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {otherTeamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-surface rounded-xl"
              >
                <div className="w-16 h-16 shrink-0 rounded-xl overflow-hidden bg-neutral-200">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                      <span className="text-xl font-bold text-neutral-300">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-primary">{member.name}</h3>
                  <p className="text-secondary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="relative py-24 bg-primary">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium text-secondary mb-2">Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What we stand for
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We operate with transparency and hold ourselves to the highest ethical standards.",
              },
              {
                title: "Excellence",
                description:
                  "We pursue mastery in our craft, continuously improving our expertise.",
              },
              {
                title: "Impact",
                description:
                  "We measure success by the positive change we create for our clients.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
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
            Want to work with us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg mb-10 max-w-lg mx-auto"
          >
            Get in touch to discuss how we can help you achieve your goals.
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
              Contact us
            </Link>
            <Link
              href="/services/investment-advisory"
              className="px-8 py-4 text-primary border border-neutral-200 rounded-xl font-medium hover:bg-surface transition-colors"
            >
              Explore services
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
