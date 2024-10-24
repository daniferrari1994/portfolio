export type Language = 'en' | 'es';

export interface IBase {
  title: string;
}

export interface IBaseItem<T> {
  id: string;
  url: string;
  technologies: string[];
  translations: Translation<T>;
}

export interface IProject extends IBaseItem<IProjectTranslation> {
  codeUrl: string;
  image: string;
}

export interface IProjectTranslation extends IBase {
  description: string;
  downloadCV?: string;
  subtitle?: string;
}

export interface IResume extends IBaseItem<IResumeTranslation>{
  experience: IResumeItem[];
  education: IResumeItem[];
}

export interface IResumeItem extends IBaseItem<IResumeTranslation> {
  date: string;
}

export interface IResumeTranslation extends IBase {
  description: string[];
}

export type Translation<T> = {
  [key in Language]: T;
};
