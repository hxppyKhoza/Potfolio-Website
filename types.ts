
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl: string;
  icon?: string;
  color?: string;
  category?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Language' | 'Frontend' | 'Backend' | 'AI/ML' | 'Tool';
}
