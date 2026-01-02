export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  iconName: string; // Lucide icon name
}

export interface Context {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export type ServiceContextCombination = {
  service: Service;
  context: Context;
  title: string;
  slug: string; // /services/service-slug/context-slug
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: string;
  solutionOverview: string;
  benefits: string[];
  faqs: { question: string; answer: string }[];
};

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  readingTime: string;
  content: string; // Raw MDX
}
