export interface Skill {
  name: string;
  iconClass: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai' | 'other';
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
  type?: 'degree' | 'certification';
  /** Código corto de la certificación (MS-900, AZ-900...). */
  code?: string;
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  imageUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  iconClass: string;
}
