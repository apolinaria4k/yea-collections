export interface IColResponse {
  data: ICollection[];
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
export type Specialization = number | null;

export interface ICollectionsContextValue {
  collections: ICollection[];
  setCollections: React.Dispatch<React.SetStateAction<ICollection[]>>;
  totalPages: number;
  setTotalPages: React.Dispatch<React.SetStateAction<number>>;
}
