"use client";

import { SectionContainer } from "@/components/shared/SectionContainer";
import { StatCard } from "@/components/shared/StatCard";
import { statistics } from "@/lib/data/company";

export function StatisticsSection() {
  return (
    <section className="bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {statistics.map((stat) => (
            <StatCard
              key={stat.id}
              stat={stat}
              className="text-white [&_div:first-child]:text-white"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
