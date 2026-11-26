import { useMemo, useState } from 'react';
import { CollectionsContext } from '../context';
import type { FC, ReactNode } from 'react';
import type { ICollection, IQuestionsPage, ListError, Status } from '../interfaces';

interface Props {
  children: ReactNode;
}

const ContextProvider: FC<Props> = ({ children }) => {
  const [collections, setCollections] = useState<ICollection[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  const [questionsPage, setQuestionsPage] = useState<IQuestionsPage | null>(null);
  const [questionsStatus, setQuestionsStatus] = useState<Status>('idle');
  const [questionsError, setQuestionsError] = useState<ListError>(null);

  const [retryTick, setRetryTick] = useState<number>(0);

  const value = useMemo(
    () => ({
      collections,
      setCollections,
      totalPages,
      setTotalPages,
      questionsPage,
      setQuestionsPage,
      questionsStatus,
      setQuestionsStatus,
      questionsError,
      setQuestionsError,
      retryTick,
      setRetryTick,
    }),
    [collections, totalPages, questionsPage, questionsStatus, questionsError, retryTick],
  );
  return <CollectionsContext.Provider value={value}>{children}</CollectionsContext.Provider>;
};

export default ContextProvider;
