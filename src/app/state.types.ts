import { LucideIcon } from "lucide-react";

export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  level: string;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  features: string[];
}

export interface Achievement {
  title: string;
  description: string;
  year: string;
}

export interface VisibilityState {
  [key: string]: boolean;
}