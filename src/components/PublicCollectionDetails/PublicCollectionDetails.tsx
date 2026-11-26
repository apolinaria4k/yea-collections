import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import CollectionService from '../../API/CollectionService';
import useCollections from '../../hooks/useCollections';
import { useFetching } from '../../hooks/useFetching';
import type { ICollection } from '../../interfaces';
import { getTotalPages } from '../../utils/getTotalPages';
import OneCollectionSkeleton from '../OneCollectionSkeleton/OneCollectionSkeleton';
import PublicCollectionsAside from '../PublicCollectionsAside/PublicCollectionsAside';
import PublicCollectionsSection from '../PublicCollectionsSection/PublicCollectionsSection';
import styles from './index.module.css';

export const PublicCollectionDetails: FC = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
  const { setQuestionsPage, setQuestionsStatus, setQuestionsError } = useCollections();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [collection, setCollection] = useState<ICollection>();
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1;

  const routeRef = useRef({ collectionId: Number(collectionId), page });
  useEffect(() => {
    routeRef.current = { collectionId: Number(collectionId), page };
  }, [collectionId, page]);

  const [fetchCollection] = useFetching(async (signal: AbortSignal, id: number) => {
    const response = await CollectionService.getCollectionById(id, signal);
    setCollection(response.data);
  });

  const [fetchAllQuestions, status, error] = useFetching(
    async (signal: AbortSignal, page: number, collectionId: number) => {
      if (!Number.isFinite(collectionId)) return;
      const response = await CollectionService.getAllQuestions(page, collectionId, signal);

      if (signal.aborted) return;
      const current = routeRef.current;
      if (current.collectionId !== collectionId || current.page !== page) return;

      setQuestionsPage({
        collectionId,
        page,
        data: response.data.data,
        totalPages: getTotalPages(response.data.total, response.data.limit),
      });
    },
  );

  useEffect(() => {
    if (!collectionId) return;
    fetchCollection(Number(collectionId));
  }, [collectionId]);

  useEffect(() => {
    if (!collectionId) return;
    fetchAllQuestions(page, Number(collectionId));
  }, [page, collectionId]);

  useEffect(() => {
    setQuestionsStatus(status);
    setQuestionsError(error);
  }, [status, error, setQuestionsStatus, setQuestionsError]);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.wrapperMain}>
          {!collection ? (
            <OneCollectionSkeleton />
          ) : (
            <>
              <PublicCollectionsSection
                collection={collection}
                status={status}
                error={error}
                setIsVisible={setIsVisible}
                collectionId={Number(collectionId)}
                page={page}
              />
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
