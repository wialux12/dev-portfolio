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

/**
 * "contain" — для скриншотов мобильных экранов (портретная ориентация):
 * картинка вписывается целиком на тёмную подложку карточки, а не обрезается
 * по краям, как это происходит с "cover" в альбомной рамке.
 */
export type ProjectImageFit = "cover" | "contain";

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
  imageFit?: ProjectImageFit;
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
