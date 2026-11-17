import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { useFetching } from '../../hooks/useFetching';
import type { ICollection } from '../../interfaces';
import { getTotalPages } from '../../utils/getTotalPages';
import ForAllWithoutQuestions from '../ForAllWithoutQuestions/ForAllWithoutQuestions';
import ForMembers from '../ForMembers/ForMembers';
import PublicCollectionsAside from '../PublicCollectionsAside/PublicCollectionsAside';
import type { FC } from 'react';
import PublicCollectionsSection from '../PublicCollectionsSection/PublicCollectionsSection';
import styles from './index.module.css';
import OneCollectionSkeleton from '../OneCollectionSkeleton/OneCollectionSkeleton';

export const PublicCollectionDetails: FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const { setTotalPages, setQuestions, questions } = useCollections();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [collection, setCollection] = useState<ICollection>();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const [fetchCollection] = useFetching(async (collectionId: number) => {
    const response = await CollectionService.getCollectionById(Number(collectionId));
    setCollection(response.data);
  });

  const [fetchAllQuestions, status, error] = useFetching(
    async (page: number, collectionId: number) => {
      const response = await CollectionService.getAllQuestions(page, collectionId);
      setQuestions(response.data.data);
      const totalCount = response.data.total;
      setTotalPages(getTotalPages(totalCount));
    },
  );

  useEffect(() => {
    fetchCollection(Number(collectionId));
  }, [collectionId]);

  useEffect(() => {
    fetchAllQuestions(page, Number(collectionId));
  }, [page, collectionId]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          {!collection ? (
            <OneCollectionSkeleton />
          ) : (
            <>
              {status === 'idle' || status === 'loading' ? (
                <OneCollectionSkeleton />
              ) : status === 'error' ? (
                <h2 className={styles.title}>{error}</h2>
              ) : !questions ? (
                <OneCollectionSkeleton />
              ) : !collection!.isFree ? (
                <ForMembers />
              ) : collection!.isFree && !questions.length ? (
                <ForAllWithoutQuestions />
              ) : (
                <PublicCollectionsSection
                  collection={collection}
                  status={status}
                  error={error}
                  setIsVisible={setIsVisible}
                />
              )}
              <PublicCollectionsAside
                collection={collection}
                isVisible={isVisible}
                setIsVisible={setIsVisible}
              />
            </>
          )}
        </div>
      </main>
    </>
  );
};
