import { createContext } from 'react';
import type { ICollectionsContextValue } from '../interfaces';

export const CollectionsContext = createContext<ICollectionsContextValue | null>(null);
