export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  tech: string;
  description: string[];
  link?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Publication {
  title: string;
  conference: string;
  year: string;
  link?: string;
}

export interface Achievement {
  title: string;
  subtitle?: string;
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  score: string;
  location: string;
}