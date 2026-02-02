"use client";

import { motion } from "framer-motion";
import { Statistic } from "@/types/company-info";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils/cn";

interface StatCardProps {
  stat: Statistic;
  className?: string;
}

export function StatCard({ stat, className }: StatCardProps) {
  const { count, ref } = useAnimatedCounter(stat.value, 2000);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "text-center p-6",
        className
      )}
    >
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
  );
}
