import { useState, type ReactElement } from 'react';
import { CollectionsContext } from '../context';
import type { ICollection, IQuestion, ListError, Status } from '../interfaces';

interface Props {
  children: ReactElement;
}

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [loadedPage, setLoadedPage] = useState<number>(0);
  const [listStatus, setListStatus] = useState<Status>('idle');
  const [listError, setListError] = useState<ListError>(null);
  const [retryTick, setRetryTick] = useState<number>(0);
  return (
    <CollectionsContext.Provider
      value={{
        collections,
        setCollections,
        questions,
        setQuestions,
        totalPages,
        setTotalPages,
        loadedPage,
        setLoadedPage,
        listStatus,
        setListStatus,
        listError,
        setListError,
        retryTick,
        setRetryTick,
      }}>
      {children}
    </CollectionsContext.Provider>
  );
};

export default ContextProvider;
