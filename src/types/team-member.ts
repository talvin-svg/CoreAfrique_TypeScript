export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  qualifications: string[];
  linkedinUrl?: string;
  email?: string;
  image?: string;
}
