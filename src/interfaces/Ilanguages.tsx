export type Language = 'en' | 'es';

export interface IBaseSection {
  description: string;
  downloadCV?: string;
  title: string;
  subtitle?: string;
}

export interface IProject {
  codeUrl: string;
  id: string;
  image: string;
  projectUrl: string;
  technologies: string[];
  translations: {
    [key in Language]: IBaseSection;
  };
}
