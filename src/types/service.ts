export interface Service {
  id: string;
  name: string;
  shortDescription: string;
  longDescription?: string;
  category: "investment-advisory" | "blockchain-education";
  icon?: string;
  url?: string;
}
