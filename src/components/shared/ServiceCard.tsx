"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Service } from "@/types/service";
import { cn } from "@/lib/utils/cn";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const content = (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-surface rounded-xl shadow-md p-6 cursor-pointer",
        "border border-transparent hover:border-primary/20",
        "transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-start gap-4">
        {service.icon && (
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">{service.icon}</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {service.shortDescription}
          </p>
        </div>
      </div>
      {service.longDescription && (
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">
          {service.longDescription}
        </p>
      )}
    </motion.div>
  );

  if (service.url) {
    return <Link href={service.url}>{content}</Link>;
  }

  return content;
}
