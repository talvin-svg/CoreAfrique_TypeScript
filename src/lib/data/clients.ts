import { ClientCategory } from "@/types/client";

export const clientCategories: ClientCategory[] = [
  {
    id: "client-1",
    name: "Individual Investors",
    description: "High-net-worth individuals seeking personalized investment strategies and wealth management.",
    clientCount: 500,
  },
  {
    id: "client-2",
    name: "Institutional Clients",
    description: "Banks, pension funds, and insurance companies requiring sophisticated investment solutions.",
    clientCount: 50,
  },
  {
    id: "client-3",
    name: "Corporate Clients",
    description: "Businesses seeking treasury management and corporate investment advisory services.",
    clientCount: 150,
  },
  {
    id: "client-4",
    name: "Government Entities",
    description: "Public sector organizations requiring investment oversight and financial advisory.",
    clientCount: 20,
  },
];
