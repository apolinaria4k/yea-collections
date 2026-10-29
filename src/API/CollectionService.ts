import axios from 'axios';
import type { ICollection, IColResponse, ISpecResponse } from '../interfaces';

const COLLECTIONS_URL = import.meta.env.VITE_COLLECTIONS_API_URL;
const SPECIALIZATIONS_URL = import.meta.env.VITE_SPECIALIZATIONS_API_URL;
const COLLECTION_BY_ID = import.meta.env.VITE_COLLECTION_BY_ID_API_URL;

export default class CollectionService {
  static async getAllCollections(
    page = 1,
    titleOrDescriptionSearch: string,
    specializations: string,
    isFree: string,
  ) {
    const params = {
      page,
      titleOrDescriptionSearch,
      specializations: specializations || null,
      isFree: isFree || null,
    };

    const response = await axios.get<IColResponse>(COLLECTIONS_URL, {
      params,
    });
    return response;
  }

  static async getAllSpecializations(limit: number | undefined = 5) {
    const response = await axios.get<ISpecResponse>(SPECIALIZATIONS_URL, {
      params: {
        limit,
      },
    });
    return response;
  }

  static async getCollectionById(collectionId: number) {
    const response = await axios.get<ICollection>(`${COLLECTION_BY_ID}${collectionId}/public`);
    return response;
  }
}
