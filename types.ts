export interface Project {
  id: number;
  name: string;
  shortName: string;
  description: string;
  fullDescription: string;
  techStack: string[];
  demoUrl: string;
  repoUrl?: string;
  icon: string; // Using string to represent the emoji or icon name
  category: string;
  nodeSize: 'medium' | 'large' | 'extra-large';
  color: string;
  x: number; // Percentage 0-100
  y: number; // Percentage 0-100
}

export interface Skill {
  name: string;
  category: 'AI/ML' | 'Generative AI' | 'Development' | 'Specialized';
  proficiency: number; // 0-100
  isPrimary: boolean;
}

export interface TimelineItem {
  week: number;
  title: string;
  description: string;
  projectId?: number; // Links to project ID
}
