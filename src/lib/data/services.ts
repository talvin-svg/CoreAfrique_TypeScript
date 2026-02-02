import { Service } from "@/types/service";

export const servicesData: Service[] = [
  {
    id: "investment-advisory-1",
    name: "Portfolio Management",
    shortDescription: "Expert management of investment portfolios tailored to your financial goals.",
    longDescription: "Our portfolio management services provide comprehensive oversight of your investments, ensuring optimal asset allocation and risk management strategies aligned with your objectives.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "investment-advisory-2",
    name: "Wealth Planning",
    shortDescription: "Strategic wealth planning for long-term financial security.",
    longDescription: "We help you build and preserve wealth through careful planning, tax optimization, and investment strategies designed for generational wealth transfer.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "investment-advisory-3",
    name: "Risk Assessment",
    shortDescription: "Comprehensive risk analysis and mitigation strategies.",
    longDescription: "Our risk assessment services identify potential threats to your investments and develop robust strategies to protect your portfolio.",
    category: "investment-advisory",
    url: "/services/investment-advisory",
  },
  {
    id: "blockchain-education-1",
    name: "Blockchain Fundamentals",
    shortDescription: "Learn the core concepts of blockchain technology.",
    longDescription: "A comprehensive introduction to blockchain technology, covering distributed ledger systems, consensus mechanisms, and real-world applications.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-2",
    name: "VASP Compliance",
    shortDescription: "Navigate virtual asset service provider regulations.",
    longDescription: "Expert guidance on VASP compliance requirements, regulatory frameworks, and best practices for operating in the digital asset space.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
  {
    id: "blockchain-education-3",
    name: "Crypto Investment Strategies",
    shortDescription: "Strategic approaches to cryptocurrency investments.",
    longDescription: "Learn proven strategies for investing in cryptocurrencies, including risk management, portfolio diversification, and market analysis.",
    category: "blockchain-education",
    url: "/services/blockchain-education",
  },
];

export const investmentAdvisoryServices = servicesData.filter(
  (s) => s.category === "investment-advisory"
);

export const blockchainEducationServices = servicesData.filter(
  (s) => s.category === "blockchain-education"
);
