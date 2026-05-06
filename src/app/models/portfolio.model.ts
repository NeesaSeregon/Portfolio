export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear: number | null;
  description?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}
