import { useContext } from 'react';
import { CollectionsContext } from '../context';

export default function useCollections() {
  const context = useContext(CollectionsContext);
  if (!context) {
    throw new Error('useCollections must be used within ContextProvider');
  }
  return context;
}
