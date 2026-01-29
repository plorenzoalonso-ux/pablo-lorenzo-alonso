
export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Article {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  link: string;
}

export interface Skill {
  name: string;
  level: number;
}
