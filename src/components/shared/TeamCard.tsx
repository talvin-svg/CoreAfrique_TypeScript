"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { TeamMember } from "@/types/team-member";
import { cn } from "@/lib/utils/cn";

interface TeamCardProps {
  member: TeamMember;
  className?: string;
}

export function TeamCard({ member, className }: TeamCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "bg-surface rounded-xl shadow-md overflow-hidden",
        "border border-transparent hover:border-primary/20",
        "transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="aspect-square relative bg-gradient-to-br from-primary/20 to-secondary/20">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-6xl font-bold text-primary/30">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {member.name}
        </h3>
        <p className="text-secondary font-medium mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {member.bio}
        </p>
        {member.qualifications.length > 0 && (
          <ul className="space-y-1">
            {member.qualifications.slice(0, 3).map((qual, index) => (
              <li
                key={index}
                className="text-xs text-gray-600 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {qual}
              </li>
            ))}
          </ul>
        )}
        <div className="flex gap-3 mt-4">
          {member.linkedinUrl && (
            <a
              href={member.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`${member.name}'s LinkedIn`}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-gray-600 hover:text-primary transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
