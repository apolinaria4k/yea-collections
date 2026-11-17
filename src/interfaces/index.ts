import type { Dispatch, SetStateAction } from 'react';

export interface IColResponse {
  data: ICollection[];
  limit: number;
  page: number;
  total: number;
}

export interface IQueResponse {
  data: IQuestion[];
  limit: number;
  page: number;
  total: number;
}

export interface ISpecResponse {
  data: ISpecialization[];
  limit: number;
  page: number;
  total: number;
}

export interface ICollection {
  id: number;
  company: ICompany | null;
  imageSrc: string;
  title: string;
  description: string;
  isFree: boolean;
  keywords: string[];
  questionsCount: number;
  specializations: ISpecialization[];
}

export interface ICompany {
  id: number;
  title: string;
  imageSrc: string | null;
}

export interface IQuestion {
  id: number;
  title: string;
  complexity: number;
  rate: number;
  keywords: string[];
  longAnswer: string;
  shortAnswer: string;
  questionSkills: ISkill[];
  questionSpecializations: ISpecialization[];
  description: string;
}

export interface IAccess {
  id: number;
  title: string;
  isFree: boolean;
}

export interface ISpecialization {
  id: number;
  title: string;
}

export interface ISkill {
  id: number;
  title: string;
}

export type Status = 'idle' | 'loading' | 'success' | 'error';
export type ListError = string | null;

export interface ICollectionsContextValue {
  collections: ICollection[];
  setCollections: Dispatch<SetStateAction<ICollection[]>>;
  totalPages: number;
  setTotalPages: Dispatch<SetStateAction<number>>;
  questions: IQuestion[];
  setQuestions: Dispatch<SetStateAction<IQuestion[]>>;
  loadedPage: number;
  setLoadedPage: Dispatch<SetStateAction<number>>;
  listStatus: Status;
  setListStatus: Dispatch<SetStateAction<Status>>;
  listError: ListError;
  setListError: Dispatch<SetStateAction<ListError>>;
  retryTick: number;
  setRetryTick: Dispatch<SetStateAction<number>>;
}
