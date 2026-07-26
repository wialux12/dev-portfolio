export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectChallenge {
  title: string;
  body: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectStatus = "live" | "development";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  status: ProjectStatus;
  statusLabel: string;
  role: string;
  stack: string[];
  cover: ProjectImage;
  gallery: ProjectImage[];
  links: ProjectLink[];
  metrics: ProjectMetric[];
  problem: string;
  task: string;
  solution: string[];
  contribution: string;
  architecture: string[];
  challenges: ProjectChallenge[];
  result: string;
}
