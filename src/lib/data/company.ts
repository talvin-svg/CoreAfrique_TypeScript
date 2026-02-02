import { CompanyInfo, Statistic } from "@/types/company-info";

export const companyInfo: CompanyInfo = {
  name: "CoreAfrique",
  tagline: "Empowering African Investments",
  description: "CoreAfrique is a leading investment advisory and blockchain education company based in Ghana, serving clients across African markets with world-class financial services.",
  mission: "To democratize access to sophisticated investment strategies and blockchain knowledge across Africa, empowering individuals and institutions to build lasting wealth.",
  vision: "To be the most trusted financial advisory and blockchain education partner in Africa, driving economic growth through innovation and excellence.",
  address: "15 Independence Avenue, Accra, Ghana",
  phone: "+233 30 123 4567",
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
    label: "Assets Under Advisory",
    value: 500,
    suffix: "M+",
    prefix: "$",
  },
  {
    id: "stat-2",
    label: "Clients Served",
    value: 720,
    suffix: "+",
  },
  {
    id: "stat-3",
    label: "Years of Experience",
    value: 9,
    suffix: "+",
  },
  {
    id: "stat-4",
    label: "Team Members",
    value: 45,
    suffix: "+",
  },
];
