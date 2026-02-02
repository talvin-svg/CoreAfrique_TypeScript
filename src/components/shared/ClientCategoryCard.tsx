"use client";

import { motion } from "framer-motion";
import { ClientCategory } from "@/types/client";
import { cn } from "@/lib/utils/cn";

interface ClientCategoryCardProps {
  category: ClientCategory;
  className?: string;
}

export function ClientCategoryCard({
  category,
  className,
}: ClientCategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-surface rounded-xl shadow-md p-6",
        "border border-transparent hover:border-secondary/20",
        "transition-shadow hover:shadow-lg",
        className
      )}
    >
      {category.icon && (
        <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
          <span className="text-3xl">{category.icon}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {category.name}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {category.description}
      </p>
      {category.clientCount && (
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-secondary">
            {category.clientCount}+
          </span>
          <span className="text-gray-600 text-sm">clients</span>
        </div>
      )}
    </motion.div>
  );
}
