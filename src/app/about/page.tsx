import { Metadata } from "next";
import { SectionContainer } from "@/components/shared/SectionContainer";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TeamCard } from "@/components/shared/TeamCard";
import { TimelineWidget } from "@/components/about/TimelineWidget";
import { MissionSection } from "@/components/about/MissionSection";
import { teamData } from "@/lib/data/team";
import { timelineData } from "@/lib/data/timeline";
import { companyInfo } from "@/lib/data/company";

export const metadata: Metadata = {
  title: "About Us - CoreAfrique",
  description: companyInfo.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About CoreAfrique
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <MissionSection />

      {/* Timeline */}
      <SectionContainer className="bg-surface">
        <SectionTitle
          title="Our Journey"
          subtitle="Key milestones in our growth story"
        />
        <TimelineWidget events={timelineData} />
      </SectionContainer>

      {/* Team */}
      <SectionContainer>
        <SectionTitle
          title="Our Team"
          subtitle="Meet the experts driving our success"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </SectionContainer>
    </>
  );
}
