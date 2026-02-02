import { HeroSection } from "@/components/home/HeroSection";
import { ServicesPreviewSection } from "@/components/home/ServicesPreviewSection";
import { StatisticsSection } from "@/components/home/StatisticsSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreviewSection />
      <StatisticsSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
