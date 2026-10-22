import axios from 'axios';
import type { IResponse } from '../interfaces';

const COLLECTIONS_URL = import.meta.env.VITE_COLLECTIONS_API_URL;

export default class CollectionService {
  static async getAllCollections(page = 1) {
    const params = {
      page,
    };
    const response = await axios.get<IResponse>(COLLECTIONS_URL, {
      params,
    });
    return response;
  }
}
