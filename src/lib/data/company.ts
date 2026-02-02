import { CompanyInfo, Statistic } from "@/types/company-info";

export const companyInfo: CompanyInfo = {
  name: "Core Afrique Investment Ltd",
  tagline: "Bridging knowledge, capital, and opportunity for Africa's digital future",
  description: "Core Afrique Investment Ltd is a Ghanaian boutique investment and advisory firm focused on unlocking value across emerging technologies, digital assets, and frontier markets. With deep expertise in Blockchain, virtual assets, and capital formation, CAI operates at the intersection of innovation, regulation, and sustainable economic growth in Africa.",
  mission: "Building future-ready enterprises and informed markets by combining strategic advisory, investment structuring, and capacity building to support businesses, institutions, and individuals navigating Africa's rapidly evolving digital and financial landscape.",
  vision: "Building Africa's Digital Asset Future—Responsibly. To be the trusted bridge between innovation and regulation, supporting Africa's transition into a regulated digital economy through investment advisory and Blockchain education aligned with Ghana's regulatory framework.",
  address: "No. 1 Fourth Nii Kwaofio Link, Baatsonaa, P.O. Box CT 6242, Cantonments, Accra, Ghana",
  phone: "+233 (0) 244 252947",
  email: "info@coreafrique.com",
  socialLinks: {
    linkedin: "https://linkedin.com/company/coreafrique",
    twitter: "https://twitter.com/coreafrique",
    facebook: "https://facebook.com/coreafrique",
    instagram: "https://instagram.com/coreafrique",
  },
};

export const statistics: Statistic[] = [
  {
    id: "stat-1",
    label: "Years of Experience",
    value: 14,
    suffix: "+",
  },
  {
    id: "stat-2",
    label: "Years Blockchain Expertise",
    value: 8,
    suffix: "+",
  },
  {
    id: "stat-3",
    label: "Team Members",
    value: 11,
    suffix: "+",
  },
  {
    id: "stat-4",
    label: "Client Categories",
    value: 5,
    suffix: "",
  },
];

// Blockchain-focused differentiators (for Blockchain Education page)
export const blockchainDifferentiators = [
  {
    id: "bc-1",
    title: "NaVALI",
    description: "Knowledge Partner of Bank of Ghana (BoG) and Securities and Exchange Commission (SEC)",
    highlighted: true,
  },
  {
    id: "bc-2",
    title: "8 Years Blockchain Experience",
    description: "Deep expertise in Blockchain technology, digital assets, and decentralized systems",
  },
  {
    id: "bc-3",
    title: "VASP Framework Aligned",
    description: "Operating within Ghana's Virtual Asset Service Provider regulatory guidelines",
  },
];

// Investment-focused differentiators (for Investment Advisory page)
export const investmentDifferentiators = [
  {
    id: "inv-1",
    title: "CFA & MBA Credentials",
    description: "Chartered Financial Analyst with MBA from Schulich School of Business, York University",
  },
  {
    id: "inv-2",
    title: "14+ Years Experience",
    description: "Deep expertise in financial markets, capital structuring, and investment advisory",
  },
  {
    id: "inv-3",
    title: "African Market Expertise",
    description: "Wholly Ghanaian-owned firm with authentic local knowledge and international standards",
  },
];

// Blockchain credentials for display on blockchain page
export const blockchainCredentials = {
  navali: {
    title: "NaVALI",
    subtitle: "Knowledge Partner",
    description: "Knowledge Partner of Bank of Ghana (BoG) and Securities and Exchange Commission (SEC)",
    highlighted: true,
  },
  blockchainExperience: {
    title: "8+ Years",
    subtitle: "Blockchain Experience",
    description: "Deep expertise in Blockchain technology, digital assets, and Web3",
  },
};
