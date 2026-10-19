export interface ICollection {
  id: string;
  company: ICompany | null;
  imageSrc: string;
  description: string;
  isFree: boolean;
  keywords: string[];
  questionsCount: number;
  specializations: ISpecialization[];
}

export interface ICompany {
  id: string;
  title: string;
  imageSrc: string | null;
}

export interface ISpecialization {
  id: string;
  title: string;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';
