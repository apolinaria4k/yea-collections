import axios from 'axios';
import type {
  ICollection,
  IColResponse,
  IQueResponse,
  IQuestion,
  ISpecResponse,
} from '../interfaces';
import { CONFIG } from '../config/env';

function getRequiredEnv(key: keyof typeof CONFIG): string {
  const value = CONFIG[key];
  if (!value) {
    throw new Error(`Не задана переменная окружения ${key}. Проверьте .env (см. .env.example).`);
  }
  return value;
}

const COLLECTIONS_URL = getRequiredEnv('VITE_COLLECTIONS_API_URL');
const QUESTIONS_URL = getRequiredEnv('VITE_QUESTIONS_API_URL');
const SPECIALIZATIONS_URL = getRequiredEnv('VITE_SPECIALIZATIONS_API_URL');
const COLLECTION_BY_ID = getRequiredEnv('VITE_COLLECTION_BY_ID_API_URL');
const QUESTION_BY_ID_URL = getRequiredEnv('VITE_QUESTION_BY_ID_API_URL');

export default class CollectionService {
  static async getAllCollections(
    page: number = 1,
    titleOrDescriptionSearch: string,
    specializations: string,
    isFree: string,
    signal?: AbortSignal,
  ) {
    const params = {
      page,
      titleOrDescriptionSearch,
      specializations: specializations || undefined,
      isFree: isFree || undefined,
    };

    const response = await axios.get<IColResponse>(COLLECTIONS_URL, {
      params,
      signal,
    });
    return response;
  }

  static async getAllQuestions(page: number = 1, collection: number, signal?: AbortSignal) {
    const params = {
      page,
      collection,
    };

    const response = await axios.get<IQueResponse>(QUESTIONS_URL, {
      params,
      signal,
    });

    return response;
  }

  static async getAllSpecializations(limit: number = 5, signal?: AbortSignal) {
    const response = await axios.get<ISpecResponse>(SPECIALIZATIONS_URL, {
      params: {
        limit,
      },
      signal,
    });
    return response;
  }

  static async getCollectionById(collectionId: number, signal?: AbortSignal) {
    const response = await axios.get<ICollection>(`${COLLECTION_BY_ID}${collectionId}/public`, {
      signal,
    });
    return response;
  }

  static async getQuestionById(id: number, signal: AbortSignal) {
    const response = await axios.get<IQuestion>(`${QUESTION_BY_ID_URL}${id}`, { signal });

    return response;
  }
}
