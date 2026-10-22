import { useState, type ReactElement } from 'react';
import { CollectionsContext } from '../context';
import type { ICollection } from '../interfaces';

interface Props {
  children: ReactElement;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  return (
    <CollectionsContext.Provider
      value={{
        collections,
        setCollections,
        totalPages,
        setTotalPages,
      }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export default ContextProvider;
